import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { ExerciseRoutineEntity } from './src/exercise-routine/entities/exercise-routine.entity';
import * as path from 'path';
import * as fs from "fs";

config();

const certPath = path.join("/app","rds-ca-cert.pem");

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.getOrThrow('DATABASE_HOST'),
  port: configService.getOrThrow('DATABASE_PORT'),
  database: configService.getOrThrow('DATABASE_NAME'),
  username: configService.getOrThrow('DATABASE_USER'),
  password: configService.getOrThrow('DATABASE_PASSWORD'),
  migrations: ['migrations/**'],
  entities: [ExerciseRoutineEntity],
  ssl: {
    ca: fs.readFileSync(certPath,"utf-8"),
  }
});
