import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExerciseRoutineEntity } from "./entities/exercise-routine.entity";
import { ExerciseRoutine } from "./domain/exercise-routine.model";
@Injectable()
export class ExerciseRoutineRepository{
    private readonly exercises = new Map<string,ExerciseRoutineEntity>()

    private createEntity(exerciseRoutine: ExerciseRoutine):ExerciseRoutineEntity{
      const newEntity = new ExerciseRoutineEntity()
      newEntity.exerciseID = exerciseRoutine.id
      newEntity.message = exerciseRoutine.message 
      newEntity.date = exerciseRoutine.date
      return newEntity
    }

    private createDomain(ExerciseRoutineEntity:ExerciseRoutineEntity):ExerciseRoutine{
      const newExerciseRoutine = new ExerciseRoutine(
        ExerciseRoutineEntity.message,
        ExerciseRoutineEntity.date)
      return newExerciseRoutine
    }

    async save(exerciseRoutine:ExerciseRoutine): Promise<ExerciseRoutine>{
        const persistenceModel = this.createEntity(exerciseRoutine)
        this.exercises.set(persistenceModel.exerciseID, persistenceModel);
        const newEntity = this.exercises.get(persistenceModel.exerciseID);
        return this.createDomain(newEntity)
    }
    async searchById(id:string): Promise<ExerciseRoutine|null>{
        const entities = Array.from(this.exercises.values());
        const exerciseRoutineEntity = entities.find((item) => item.exerciseID === id);
        if (!exerciseRoutineEntity) {
          return null;
        }
        return this.createDomain(exerciseRoutineEntity)
}
    async findAll(){
      const exercisesEntities = Array.from(this.exercises.values()); // Get all exercisesEntity objects
      return exercisesEntities.map(entity => this.createDomain(entity)); // Convert to ExerciseRoutine objects
    }

}