import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { WeatherRepository } from './weather.repository';
import { WeatherApiService } from './weatherapi/weatherapi.service';
import { Weather } from './domain/weather.model';

@Injectable()
export class WeatherService {

  constructor(private readonly weatherApiService: WeatherApiService,private readonly weatherRepository:WeatherRepository) {}

  async create(city:string): Promise<Weather> {
    try {
      const newWeather = await this.weatherApiService.getWeather(city)
      const weather = await this.weatherRepository.save(newWeather)
      return weather
    }
    catch (error) {
      console.error('Error fetching weather data:', error.response?.data || error.message);
      throw new HttpException('Failed to get weather data', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    const weather = await this.weatherRepository.searchById(id)
    return weather
  }

  async findAll(){
    return await this.weatherRepository.findAll()
  }
}
