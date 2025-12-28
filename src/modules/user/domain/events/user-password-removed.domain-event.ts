import { DomainEvent } from 'src/shared/domain/base.domain-event';
import { type AggregateId } from 'src/shared/domain/base.entity';

export class UserPasswordRemovedDomainEvent extends DomainEvent {
  public static readonly TYPE = 'UserPasswordRemoved';

  constructor(aggregateId: AggregateId) {
    super(aggregateId);
  }
}
