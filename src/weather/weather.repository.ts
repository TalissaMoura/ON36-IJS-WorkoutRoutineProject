import { Injectable, UnauthorizedException } from "@nestjs/common";
import { WeatherEntity } from "./entities/weather.entity";
import { Weather } from "./domain/weather.model";

@Injectable()
export class WeatherRepository{
    private readonly weathers = new Map<string,WeatherEntity>()

    private createEntity(weather:Weather):WeatherEntity{
      const newEntity = new WeatherEntity()
      newEntity.id = weather.weatherId
      newEntity.city = weather.city
      newEntity.cloud = weather.cloud.toString()
      newEntity.airQuality = weather.airQuality.toString()
      newEntity.temperature = weather.temperature.toString()
      newEntity.humidity = weather.humidity.toString()
      newEntity.date = weather.date
      return newEntity
    }

    private createDomain(weatherEntity:WeatherEntity):Weather{
      const newWeather = new Weather(
        weatherEntity.city,
        weatherEntity.temperature,
        weatherEntity.humidity,
        weatherEntity.cloud,
        weatherEntity.airQuality,
        weatherEntity.date,)
      return newWeather
    }

    async save(weather:Weather): Promise<Weather>{
        const persistenceModel = this.createEntity(weather)
        this.weathers.set(persistenceModel.id, persistenceModel);
        const newEntity = this.weathers.get(persistenceModel.id);
        return this.createDomain(newEntity)
    }
    async searchById(id:string): Promise<Weather|null>{
        const entities = Array.from(this.weathers.values());
        const weatherEntity = entities.find((item) => item.id === id);
        if (!weatherEntity) {
          return null;
        }
        return this.createDomain(weatherEntity)
}
    async findAll(){
      const weatherEntities = Array.from(this.weathers.values()); // Get all WeatherEntity objects
      return weatherEntities.map(entity => this.createDomain(entity)); // Convert to Weather objects
    }

}