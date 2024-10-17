import { WeatherService } from 'src/weather/weather.service';
export declare class ChatResponseService {
    private readonly weatherService;
    private readonly apiKey;
    private readonly llm;
    private readonly systemTemplate;
    private readonly parser;
    private readonly promptTemplate;
    private loadApiKey;
    constructor(weatherService: WeatherService);
    getRoutine(gender: string, beginner: string, on_period: string, height: string, weight: string, age: string, goal: string, city: string): Promise<any>;
}
