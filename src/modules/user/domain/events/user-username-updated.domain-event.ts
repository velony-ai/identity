import { DomainEvent } from 'src/shared/domain/base.domain-event';
import { type AggregateId } from 'src/shared/domain/base.entity';

export class UserUsernameUpdatedDomainEvent extends DomainEvent {
  public static readonly TYPE = 'UserUsernameUpdated';

  constructor(
    aggregateId: AggregateId,
    public readonly props: {
      username: string;
    },
  ) {
    super(aggregateId);
  }
}
