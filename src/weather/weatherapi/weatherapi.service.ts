import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs'; // To convert Observable to Promise
import { Weather } from '../domain/weather.model';
import { ConfigService } from '@nestjs/config';
import * as fs from "fs"
import * as path from "path"

@Injectable()
export class WeatherApiService {
  private readonly apiKey: string ;
  private readonly baseUrl: string = 'https://api.weatherapi.com/v1/current.json';

  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
    this.apiKey = this.loadApiKey();
  }

  private loadApiKey(): string  {
    try {
      const apiKey = process.env.WEATHER_API_KEY
      return apiKey
    } catch (error) {
      throw new Error('Could not load API key');
    }
  }

  private getAirQuality(gbIndex: number): string {
    if (gbIndex >= 1 && gbIndex <= 3) {
      return "Good";
    } else if (gbIndex >= 4 && gbIndex <= 6) {
      return "Moderate";
    } else if (gbIndex >= 7 && gbIndex <= 9) {
      return "Bad";
    } else if (gbIndex >= 10) {
      return "Very Bad";
    } else {
      return "Could not determine air quality";
    }
  }
  

  async getWeather(city: string) {
    try {
      const response = await firstValueFrom(this.httpService.get(`${this.baseUrl}`, {
        params: {
          key: this.apiKey,
          q: city,
          aqi: 'yes',
        },
      }));

          // Check if response.data is defined and has the expected structure
      if (!response.data || !response.data.current) {
        throw new NotFoundException(`City not found or invalid API key, error: ${response.data}`);
      }

      const { current } = response.data;
      const currentDate = new Date().toString()

      return new Weather(
        city,
        `${current.temp_c} celsius`,
        current.humidity,
        current.cloud,
        this.getAirQuality(current.air_quality["gb-defra-index"]),
        currentDate,
       
      )
    } catch (error) {
      throw new NotFoundException('City not found or invalid API key');
    }
  }
}


