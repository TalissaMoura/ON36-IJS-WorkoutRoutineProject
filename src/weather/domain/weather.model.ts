import { randomUUID } from "crypto"

export class Weather {
   weatherId: string
   city: string
   date: string
   temperature: string
   humidity: string
   cloud: string
   airQuality: string

  constructor(city:string,temperature:string,humidity:string,cloud:string,airQuality:string,date:string){
    this.weatherId = randomUUID()
    this.city = city 
    this.temperature = temperature
    this.humidity = humidity
    this.cloud = cloud 
    this.date = date
    this.airQuality = airQuality
  }
}