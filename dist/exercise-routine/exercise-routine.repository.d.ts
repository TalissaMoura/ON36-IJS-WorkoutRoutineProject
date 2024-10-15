import { ExerciseRoutine } from "./domain/exercise-routine.model";
export declare class ExerciseRoutineRepository {
    private readonly exercises;
    private createEntity;
    private createDomain;
    save(exerciseRoutine: ExerciseRoutine): Promise<ExerciseRoutine>;
    searchById(id: string): Promise<ExerciseRoutine | null>;
    findAll(): Promise<ExerciseRoutine[]>;
}
