import { Module } from '@nestjs/common';
import { ChatResponseService } from './chat-response.service';
import { WeatherModule } from 'src/weather/weather.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [WeatherModule, ConfigModule.forRoot({isGlobal:true})],
  providers: [ChatResponseService, ConfigService],
  exports: [ChatResponseService, ConfigService]
})
export class ChatApiModule {}
