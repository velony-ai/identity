import { DomainEvent } from 'src/shared/domain/base.domain-event';
import { type AggregateId } from 'src/shared/domain/base.entity';

export class UserCreatedDomainEvent extends DomainEvent {
  public static readonly TYPE = 'UserCreated';

  constructor(
    aggregateId: AggregateId,
    public readonly props: {
      name: string;
      username: string;
      avatarPath?: string;
      email?: string;
      phoneNumber?: string;
    },
  ) {
    super(aggregateId);
  }
}
