import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherApiService } from './weatherapi.service';

@Module({
  imports: [HttpModule],
  providers: [WeatherApiService],
  exports: [WeatherApiService], // Optional: if you want to use it in other modules
})
export class WeatherApiModule {}
