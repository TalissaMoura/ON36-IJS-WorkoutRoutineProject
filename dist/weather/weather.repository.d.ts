import { Weather } from "./domain/weather.model";
export declare class WeatherRepository {
    private readonly weathers;
    private createEntity;
    private createDomain;
    save(weather: Weather): Promise<Weather>;
    searchById(id: string): Promise<Weather | null>;
    findAll(): Promise<Weather[]>;
}
