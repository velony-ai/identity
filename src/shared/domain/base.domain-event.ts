export declare const DOMAIN_EVENT_BRAND: unique symbol;

import { v7 as uuidv7 } from 'uuid';

import { type AggregateId } from './base.entity';

export type DomainEventId = string;

export abstract class DomainEvent {
  private readonly [DOMAIN_EVENT_BRAND]: DomainEvent;

  public constructor(aggregateId: AggregateId) {
    this.id = uuidv7();
    this.aggregateId = aggregateId;
    this.occurredAt = new Date();
  }

  public get type(): string {
    return (this.constructor as typeof DomainEvent).TYPE;
  }

  public static readonly TYPE: string;

  public readonly id: DomainEventId;

  public readonly aggregateId: AggregateId;

  public readonly occurredAt: Date;
}
