import { HttpService } from '@nestjs/axios';
import { Weather } from '../domain/weather.model';
export declare class WeatherApiService {
    private readonly httpService;
    private readonly apiKey;
    private readonly baseUrl;
    constructor(httpService: HttpService);
    private loadApiKey;
    private getAirQuality;
    getWeather(city: string): Promise<Weather>;
}
