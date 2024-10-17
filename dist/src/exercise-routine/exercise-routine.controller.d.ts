import { ExerciseRoutineService } from './exercise-routine.service';
export declare class ExerciseRoutineController {
    private readonly exerciseRoutineService;
    constructor(exerciseRoutineService: ExerciseRoutineService);
    healthCheck(): {
        status: string;
        timestamp: string;
    };
    create(gender: string, begineer: string, on_period: string, height: string, weight: string, goal: string, city: string, age: string): Promise<void>;
    findAll(): Promise<import("./entities/exercise-routine.entity").ExerciseRoutineEntity[]>;
    findOne(id: string): Promise<import("./entities/exercise-routine.entity").ExerciseRoutineEntity>;
}
