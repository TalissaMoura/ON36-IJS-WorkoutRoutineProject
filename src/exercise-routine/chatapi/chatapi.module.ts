import { Module } from '@nestjs/common';
import { ChatResponseService } from './chat-response.service';
import { WeatherModule } from 'src/weather/weather.module';

@Module({
  imports: [WeatherModule],
  providers: [ChatResponseService],
  exports: [ChatResponseService]
})
export class ChatApiModule {}
