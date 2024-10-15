import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { WeatherApiModule } from './weatherapi/weatherapi.module';
import { WeatherRepository } from './weather.repository';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService,WeatherRepository],
  imports: [WeatherApiModule],
  exports: [WeatherService,WeatherRepository]
})
export class WeatherModule {}
