import { BadRequestException } from '@nestjs/common';

export class MissingAuthenticationMethodException extends BadRequestException {
  constructor(message?: string) {
    super({
      message:
        message ??
        'User must have at least one authentication method (password, email, or phone number)',
      error: 'Bad Request',
      statusCode: 400,
      errorCode: 'USER_MISSING_AUTHENTICATION_METHOD',
    });
  }
}
