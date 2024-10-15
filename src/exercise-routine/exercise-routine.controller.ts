import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseRoutineService } from './exercise-routine.service';


@Controller('exercise-routine')
export class ExerciseRoutineController {
  constructor(private readonly exerciseRoutineService: ExerciseRoutineService) {}

  @Post()
  create(
    @Body("gender") gender: string,
    @Body("begineer") begineer: string,
    @Body("on_period") on_period: string,
    @Body("height") height: string,
    @Body("weight") weight: string, 
    @Body("goal") goal: string,
    @Body("city") city: string,
    @Body("age") age: string) {
      const exerciseRoutine = this.exerciseRoutineService.create(gender,begineer,on_period,height,weight,goal,age,city)
    return exerciseRoutine
  }

  @Get()
  findAll() {
    return this.exerciseRoutineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseRoutineService.findOne(id);
  }

}
