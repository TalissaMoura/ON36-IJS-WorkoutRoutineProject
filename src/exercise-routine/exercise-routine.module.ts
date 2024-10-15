import { Module } from '@nestjs/common';
import { ExerciseRoutineService } from './exercise-routine.service';
import { ExerciseRoutineController } from './exercise-routine.controller';
import { ChatApiModule } from './chatapi/chatapi.module';
import { ExerciseRoutineRepository } from './exercise-routine.repository';

@Module({
  imports: [ChatApiModule],
  controllers: [ExerciseRoutineController],
  providers: [ExerciseRoutineService,ExerciseRoutineRepository],
})
export class ExerciseRoutineModule {}
