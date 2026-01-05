import { v7 as uuidv7 } from 'uuid';

import { Id } from '@velony/domain';

export class VerificationId extends Id<string> {
  public static create(value?: string): VerificationId {
    return new VerificationId(value ?? uuidv7());
  }
}
