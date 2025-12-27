import { ConflictException } from '@nestjs/common';

export class PhoneNumberAlreadyExistsException extends ConflictException {
  constructor(message?: string) {
    super({
      message: message ?? 'Phone number already exists',
      error: 'Conflict',
      statusCode: 409,
      errorCode: 'PHONE_NUMBER_ALREADY_EXISTS',
    });
  }
}
