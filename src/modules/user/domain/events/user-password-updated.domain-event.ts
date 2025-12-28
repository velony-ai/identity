import { DomainEvent } from 'src/shared/domain/base.domain-event';
import { type AggregateId } from 'src/shared/domain/base.entity';

export class UserPasswordUpdatedDomainEvent extends DomainEvent {
  public static readonly TYPE = 'UserPasswordUpdated';

  constructor(aggregateId: AggregateId) {
    super(aggregateId);
  }
}
