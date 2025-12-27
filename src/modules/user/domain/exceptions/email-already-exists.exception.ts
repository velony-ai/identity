import { ConflictException } from '@nestjs/common';

export class EmailAlreadyExistsException extends ConflictException {
  constructor(message?: string) {
    super({
      message: message ?? 'Email already exists',
      error: 'Conflict',
      statusCode: 409,
      errorCode: 'EMAIL_ALREADY_EXISTS',
    });
  }
}
