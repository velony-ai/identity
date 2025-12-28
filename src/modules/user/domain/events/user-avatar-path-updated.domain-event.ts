import { DomainEvent } from 'src/shared/domain/base.domain-event';
import { type AggregateId } from 'src/shared/domain/base.entity';

export class UserAvatarPathUpdatedDomainEvent extends DomainEvent {
  public static readonly TYPE = 'UserAvatarPathUpdated';

  constructor(
    aggregateId: AggregateId,
    public readonly props: {
      avatarPath: string;
    },
  ) {
    super(aggregateId);
  }
}
