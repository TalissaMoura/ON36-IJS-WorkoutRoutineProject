import { WeatherRepository } from './weather.repository';
import { WeatherApiService } from './weatherapi/weatherapi.service';
import { Weather } from './domain/weather.model';
export declare class WeatherService {
    private readonly weatherApiService;
    private readonly weatherRepository;
    constructor(weatherApiService: WeatherApiService, weatherRepository: WeatherRepository);
    create(city: string): Promise<Weather>;
    findOne(id: string): Promise<Weather>;
    findAll(): Promise<Weather[]>;
}
