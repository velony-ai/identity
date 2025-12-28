import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { TypedConfigService } from 'src/config/typed-config.service';
import { UserUsernameUpdatedDomainEvent } from 'src/modules/user/domain/events/user-username-updated.domain-event';
import type { EventContext } from 'src/shared/application/event-context.interface';
import { KafkaService } from 'src/shared/infrastructure/events/kafka.service';

@Injectable()
export class UserUsernameUpdatedEventHandler {
  constructor(
    private readonly configService: TypedConfigService,
    private readonly kafkaService: KafkaService,
  ) {}

  @OnEvent(UserUsernameUpdatedDomainEvent.TYPE)
  async handle(
    event: UserUsernameUpdatedDomainEvent,
    context: EventContext,
  ): Promise<void> {
    await this.kafkaService.client.producer.send({
      topic: 'identity.user',
      messages: [
        {
          key: event.aggregateId,
          value: Buffer.from(
            JSON.stringify({
              meta: {
                event_id: event.id,
                event_type: event.type,
                user_id: context.userId,
                correlation_id: context.correlationId,
                source: this.configService.get('SERVICE_NAME'),
                occurred_at: event.occurredAt.toISOString(),
              },
              data: {
                username: event.props.username,
              },
            }),
          ),
        },
      ],
    });
  }
}
