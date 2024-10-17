"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const exercise_routine_entity_1 = require("./src/exercise-routine/entities/exercise-routine.entity");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: configService.getOrThrow('DATABASE_HOST'),
    port: configService.getOrThrow('DATABASE_PORT'),
    database: configService.getOrThrow('DATABASE_NAME'),
    username: configService.getOrThrow('DATABASE_USER'),
    password: configService.getOrThrow('DATABASE_PASSWORD'),
    migrations: ['migrations/**'],
    entities: [exercise_routine_entity_1.ExerciseRoutineEntity],
});
//# sourceMappingURL=typeOrm.config.js.map