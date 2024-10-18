import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import * as fs from "fs"

const certPath = path.join("/app","rds-ca-cert.pem");


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow('DATABASE_HOST'),
        port: configService.getOrThrow('DATABASE_PORT'),
        database: configService.getOrThrow('DATABASE_NAME'),
        username: configService.getOrThrow('DATABASE_USER'),
        password: configService.getOrThrow('DATABASE_PASSWORD'),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow('TYPEORM_SYNCHRONIZE'),
        ssl: {
          ca: fs.readFileSync(certPath),
        }
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
