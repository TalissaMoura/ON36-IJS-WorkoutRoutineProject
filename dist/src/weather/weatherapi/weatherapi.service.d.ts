import { HttpService } from '@nestjs/axios';
import { Weather } from '../domain/weather.model';
import { ConfigService } from '@nestjs/config';
export declare class WeatherApiService {
    private readonly httpService;
    private readonly configService;
    private readonly apiKey;
    private readonly baseUrl;
    constructor(httpService: HttpService, configService: ConfigService);
    private loadApiKey;
    private getAirQuality;
    getWeather(city: string): Promise<Weather>;
}
