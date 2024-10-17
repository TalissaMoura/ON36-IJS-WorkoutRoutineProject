import { WeatherService } from './weather.service';
export declare class WeatherController {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    create(city: string): Promise<import("./domain/weather.model").Weather>;
    findOne(id: string): Promise<import("./domain/weather.model").Weather>;
    findAll(): Promise<import("./domain/weather.model").Weather[]>;
}
