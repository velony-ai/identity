import { ConflictException } from '@nestjs/common';

export class UsernameAlreadyExistsException extends ConflictException {
  constructor(message?: string) {
    super({
      message: message ?? 'Username already exists',
      error: 'Conflict',
      statusCode: 409,
      errorCode: 'USERNAME_ALREADY_EXISTS',
    });
  }
}
