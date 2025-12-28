import { readFileSync } from 'fs';

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from 'src/config/config.module';
import { TypedConfigService } from 'src/config/typed-config.service';

import { KafkaService } from './kafka.service';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_CLIENT',
        imports: [ConfigModule],
        inject: [TypedConfigService],
        useFactory: (config: TypedConfigService) => {
          return {
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: 'velony.identity',
                brokers: config.get('KAFKA_BROKERS'),
                ssl: {
                  // eslint-disable-next-line security/detect-non-literal-fs-filename
                  ca: [readFileSync(config.get('KAFKA_CA_PATH'), 'utf-8')],
                },
                sasl: {
                  mechanism: 'scram-sha-256',
                  username: config.get('KAFKA_USERNAME'),
                  password: config.get('KAFKA_PASSWORD'),
                },
              },
            },
          };
        },
      },
    ]),
  ],
  providers: [KafkaService],
  exports: [ClientsModule, KafkaService],
})
export class KafkaModule {}
