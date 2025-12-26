import { DomainEvent } from 'src/shared/domain/base.domain-event';
import { type AggregateId } from 'src/shared/domain/base.entity';

export class UserRegisteredDomainEvent extends DomainEvent {
  constructor(
    userId: AggregateId,
    public readonly props: {
      name: string;
      username: string;
    },
  ) {
    super(userId);
  }
}
