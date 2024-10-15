import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { ExerciseRoutineModule } from './exercise-routine/exercise-routine.module';

@Module({
  imports: [WeatherModule, ExerciseRoutineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
