import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExerciseRoutine } from './domain/exercise-routine.model';
import { ChatResponseService } from './chatapi/chat-response.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseRoutineEntity } from './entities/exercise-routine.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ExerciseRoutineService {

  constructor(
    @InjectRepository(ExerciseRoutineEntity)
    private readonly ExerciseRoutineRepository: Repository<ExerciseRoutineEntity>, 
    private readonly entityManager: EntityManager,
    private readonly ChatResponseService: ChatResponseService){}

  async create(
    gender:string, 
    beginner:string, 
    on_period:string, 
    height:string, 
    weight:string, 
    goal:string,
    age:string, 
    city:string){
    try {
      const chatResponse = await this.ChatResponseService.getRoutine(
        gender,
        beginner,
        on_period,
        height,
        weight,
        age,
        goal,
        city
      )
      const currentDate = new Date()
      const exerciseRoutineResponse = new ExerciseRoutine(chatResponse,currentDate)
      const newEntity = new ExerciseRoutineEntity(exerciseRoutineResponse)
      await this.entityManager.save(newEntity)
    
    }
    catch (error) {
      console.error('Error fetching chat response data:', error.response?.data || error.message);
      throw new HttpException('Failed to get chat response data', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return await this.ExerciseRoutineRepository.find()
  }

  async findOne(exerciseId: string) {
    return await this.ExerciseRoutineRepository.findOneBy( { exerciseId } )
  }
  
}
