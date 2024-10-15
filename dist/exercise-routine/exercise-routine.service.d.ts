import { ExerciseRoutineRepository } from './exercise-routine.repository';
import { ExerciseRoutine } from './domain/exercise-routine.model';
import { ChatResponseService } from './chatapi/chat-response.service';
export declare class ExerciseRoutineService {
    private readonly ExerciseRoutineRepository;
    private readonly ChatResponseService;
    constructor(ExerciseRoutineRepository: ExerciseRoutineRepository, ChatResponseService: ChatResponseService);
    create(gender: string, beginner: string, on_period: string, height: string, weight: string, goal: string, age: string, city: string): Promise<ExerciseRoutine>;
    findAll(): Promise<ExerciseRoutine[]>;
    findOne(id: string): Promise<ExerciseRoutine>;
}
