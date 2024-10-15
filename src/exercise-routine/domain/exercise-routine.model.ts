import { randomUUID } from "crypto"

export class ExerciseRoutine {
  id: string
  message: string
  date:string 

  constructor(message:string,date:string){
    this.id = randomUUID()
    this.message = message
    this.date = date
  }
}