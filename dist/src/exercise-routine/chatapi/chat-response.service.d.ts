import { WeatherService } from 'src/weather/weather.service';
import { ConfigService } from '@nestjs/config';
export declare class ChatResponseService {
    private readonly weatherService;
    private readonly configService;
    private readonly apiKey;
    private readonly llm;
    private readonly systemTemplate;
    private readonly parser;
    private readonly promptTemplate;
    constructor(weatherService: WeatherService, configService: ConfigService);
    private loadApiKey;
    getRoutine(gender: string, beginner: string, on_period: string, height: string, weight: string, age: string, goal: string, city: string): Promise<any>;
}
