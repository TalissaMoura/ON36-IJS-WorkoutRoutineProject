import { ExerciseRoutineService } from './exercise-routine.service';
export declare class ExerciseRoutineController {
    private readonly exerciseRoutineService;
    constructor(exerciseRoutineService: ExerciseRoutineService);
    create(gender: string, begineer: string, on_period: string, height: string, weight: string, goal: string, city: string, age: string): Promise<import("./domain/exercise-routine.model").ExerciseRoutine>;
    findAll(): Promise<import("./domain/exercise-routine.model").ExerciseRoutine[]>;
    findOne(id: string): Promise<import("./domain/exercise-routine.model").ExerciseRoutine>;
}
