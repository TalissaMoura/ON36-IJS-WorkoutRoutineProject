import { randomUUID } from "crypto"

export class ExerciseRoutine {
  exerciseId: string
  message: string
  date: Date

  constructor(message:string,date:Date){
    this.exerciseId = randomUUID()
    this.message = message
    this.date = date
  }
}