import { UnauthorizedException } from '@nestjs/common';

export class InvalidPasswordException extends UnauthorizedException {
  constructor(message?: string) {
    super({
      message: message ?? 'Invalid password',
      error: 'Unauthorized',
      statusCode: 401,
      errorCode: 'USER_PASSWORD_INVALID',
    });
  }
}
