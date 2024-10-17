import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class ExerciseRoutineEntity {

  @PrimaryColumn({ type: "uuid" })
  exerciseId: string 

  @Column()
  message: string 

  @Column({type: "date"})
  date: Date 

  constructor( exerciseRoutine: Partial<ExerciseRoutineEntity>){
    Object.assign(this, exerciseRoutine)
  }
}
