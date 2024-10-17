import { Module } from '@nestjs/common';
import { ExerciseRoutineService } from './exercise-routine.service';
import { ExerciseRoutineController } from './exercise-routine.controller';
import { ChatApiModule } from './chatapi/chatapi.module';
import { ExerciseRoutineEntity } from './entities/exercise-routine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ChatApiModule, TypeOrmModule.forFeature([ExerciseRoutineEntity])],
  controllers: [ExerciseRoutineController],
  providers: [ExerciseRoutineService],
})
export class ExerciseRoutineModule {}
