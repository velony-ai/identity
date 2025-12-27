import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from 'src/shared/infrastructure/http/user.controller';
import { PgModule } from 'src/shared/infrastructure/persistence/pg/pg.module';

import { RemoveUserPasswordHandler } from './application/commands/handlers/remove-user-password.handler';
import { UpdateUserAvatarPathHandler } from './application/commands/handlers/update-user-avatar-path.handler';
import { UpdateUserNameHandler } from './application/commands/handlers/update-user-name.handler';
import { UpdateUserPasswordHandler } from './application/commands/handlers/update-user-password.handler';
import { UpdateUserUsernameHandler } from './application/commands/handlers/update-user-username.handler';
import { UserCommandRepository } from './domain/repositories/user.command.repository';
import { UserCommandRepositoryPg } from './infrastructure/repositories/user.command.repository.pg';

@Module({
  imports: [CqrsModule, PgModule],
  controllers: [UserController],
  providers: [
    RemoveUserPasswordHandler,
    UpdateUserPasswordHandler,
    UpdateUserAvatarPathHandler,
    UpdateUserNameHandler,
    UpdateUserUsernameHandler,

    {
      provide: UserCommandRepository,
      useClass: UserCommandRepositoryPg,
    },
  ],
})
export class UserModule {}
