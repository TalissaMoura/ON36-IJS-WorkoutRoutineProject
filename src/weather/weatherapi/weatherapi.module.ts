import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherApiService } from './weatherapi.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({isGlobal:true})],
  providers: [WeatherApiService,ConfigService],
  exports: [WeatherApiService,ConfigService], // Optional: if you want to use it in other modules
})
export class WeatherApiModule {}
