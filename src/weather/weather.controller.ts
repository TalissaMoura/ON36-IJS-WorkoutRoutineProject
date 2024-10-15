import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  create(@Body("city") city: string) {
    return this.weatherService.create(city);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weatherService.findOne(id);
  }

  @Get()
  findAll(){
    return this.weatherService.findAll();
  }

}
