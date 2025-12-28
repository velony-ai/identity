import { DomainEvent } from 'src/shared/domain/base.domain-event';
import { type AggregateId } from 'src/shared/domain/base.entity';

export class UserNameUpdatedDomainEvent extends DomainEvent {
  public static readonly TYPE = 'UserNameUpdated';

  constructor(
    aggregateId: AggregateId,
    public readonly props: {
      name: string;
    },
  ) {
    super(aggregateId);
  }
}
