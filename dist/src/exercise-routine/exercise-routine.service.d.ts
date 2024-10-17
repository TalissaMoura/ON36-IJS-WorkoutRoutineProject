import { ChatResponseService } from './chatapi/chat-response.service';
import { ExerciseRoutineEntity } from './entities/exercise-routine.entity';
import { EntityManager, Repository } from 'typeorm';
export declare class ExerciseRoutineService {
    private readonly ExerciseRoutineRepository;
    private readonly entityManager;
    private readonly ChatResponseService;
    constructor(ExerciseRoutineRepository: Repository<ExerciseRoutineEntity>, entityManager: EntityManager, ChatResponseService: ChatResponseService);
    create(gender: string, beginner: string, on_period: string, height: string, weight: string, goal: string, age: string, city: string): Promise<void>;
    findAll(): Promise<ExerciseRoutineEntity[]>;
    findOne(exerciseId: string): Promise<ExerciseRoutineEntity>;
}
