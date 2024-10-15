import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExerciseRoutineRepository } from './exercise-routine.repository';
import { ExerciseRoutine } from './domain/exercise-routine.model';
import { ChatResponseService } from './chatapi/chat-response.service';

@Injectable()
export class ExerciseRoutineService {

  constructor(private readonly ExerciseRoutineRepository: ExerciseRoutineRepository, private readonly ChatResponseService: ChatResponseService){}

  async create(
    gender:string, 
    beginner:string, 
    on_period:string, 
    height:string, 
    weight:string, 
    goal:string,
    age:string, 
    city:string): Promise<ExerciseRoutine> {
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
      const currentDate = new Date().toString()
      const exerciseRoutineResponse = new ExerciseRoutine(chatResponse,currentDate)
      const exerciseRoutine = await this.ExerciseRoutineRepository.save(exerciseRoutineResponse)
      return exerciseRoutine
    }
    catch (error) {
      console.error('Error fetching chat response data:', error.response?.data || error.message);
      throw new HttpException('Failed to get chat response data', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return await this.ExerciseRoutineRepository.findAll()
  }

  async findOne(id: string) {
    const exerciseRoutine = await this.ExerciseRoutineRepository.searchById(id)
    return exerciseRoutine
  }
  
}
