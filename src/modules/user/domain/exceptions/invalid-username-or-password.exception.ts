import { UnauthorizedException } from '@nestjs/common';

export class InvalidUsernameOrPasswordException extends UnauthorizedException {
  constructor(message?: string) {
    super({
      message: message ?? 'Invalid username or password',
      error: 'Unauthorized',
      statusCode: 401,
      errorCode: 'LOCAL_LOGIN_INVALID',
    });
  }
}
