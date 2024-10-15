import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseRoutineController } from './exercise-routine.controller';
import { ExerciseRoutineService } from './exercise-routine.service';

describe('ExerciseRoutineController', () => {
  let controller: ExerciseRoutineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseRoutineController],
      providers: [ExerciseRoutineService],
    }).compile();

    controller = module.get<ExerciseRoutineController>(ExerciseRoutineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
