export declare const COMMAND_BRAND: unique symbol;

import { v7 as uuidv7 } from 'uuid';

export type CommandId = string;

export abstract class Command<TProps = void, TContext = void> {
  readonly [COMMAND_BRAND]: Command<TProps, TContext>;

  constructor(
    public readonly props: TProps,
    public readonly context: TContext,
  ) {
    this.id = uuidv7();
  }

  public readonly id: CommandId;
}
