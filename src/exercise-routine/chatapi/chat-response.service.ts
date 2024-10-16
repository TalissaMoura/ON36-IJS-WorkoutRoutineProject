import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { WeatherService } from 'src/weather/weather.service';
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatOpenAI } from '@langchain/openai';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';


@Injectable()
export class ChatResponseService {

  private readonly apiKey 
  private readonly llm
  private readonly systemTemplate
  private readonly parser
  private readonly promptTemplate

  private loadApiKey(): string {
    try {
      const filePath = path.join(".secrets","secrets.json")
      const fileContents = fs.readFileSync(filePath,'utf-8');
      const data = JSON.parse(fileContents)
      return data.GOOGLE_GEMINI_KEY
    } catch (error) {
      console.error('Error fetching chat response data:', error.response?.data || error.message);
      throw new Error('Could not load API key');
    }
  }

  constructor(private readonly weatherService: WeatherService) {
    this.apiKey = this.loadApiKey();
    this.llm = new ChatGoogleGenerativeAI({
      model: "gemini-1.5-flash",
      temperature: 0,
      apiKey: this.apiKey
    });

    this.parser = new StringOutputParser()

    this.systemTemplate = `You are a helpful personal trainer agent where your mission is to give a list of exercises for the user based on their personal data and weather conditions. 
    You are equipped with a tool that give the weather conditions where the user is and personal data from user that contains information about their current physical status, if on_period is set to true
    means that the user is having the menstrual cycle. Based on the user input and context, determine the best exercises for the current achieve their fitness goal.`;

    this.promptTemplate = ChatPromptTemplate.fromMessages([
      ["system", this.systemTemplate],
      ["user", `Here is the information about the user:
        Age: {age}
        Gender: {gender}
        Beginner: {beginner}
        On period: {on_period}
        Height: {height} cm
        Weight: {weight} kg
        goal: {goal}
    
        The current weather conditions are:
        Temperature: {temperature}°C
        Humidity: {humidity}%
        Cloud coverage: {cloud}%
        Air quality: {airQuality}
        date: {date}
    
        Based on this information, suggest an appropriate exercise routine that takes into account the user's profile and the weather.`]
    ]);
  }

  async getRoutine(
    gender:string,
    beginner:string,
    on_period:string,
    height:string,
    weight:string,
    age:string,
    goal:string,
    city:string) {
    
      const currentWeather = await this.weatherService.create(city)

      const chain = this.promptTemplate.pipe(this.llm).pipe(this.parser);

      const result = await chain.invoke({ 
        gender: gender, 
        beginner: beginner,
        on_period: on_period,
        height: height,
        weight: weight,
        goal: goal,
        age: age,
        temperature: currentWeather.temperature,
        humidity: currentWeather.humidity,
        cloud: currentWeather.cloud,
        airQuality: currentWeather.airQuality,
        date: currentWeather.date,
        city: currentWeather.city,
        });

        return result
  }
}
