"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherRepository = void 0;
const common_1 = require("@nestjs/common");
const weather_entity_1 = require("./entities/weather.entity");
const weather_model_1 = require("./domain/weather.model");
let WeatherRepository = class WeatherRepository {
    constructor() {
        this.weathers = new Map();
    }
    createEntity(weather) {
        const newEntity = new weather_entity_1.WeatherEntity();
        newEntity.id = weather.weatherId;
        newEntity.city = weather.city;
        newEntity.cloud = weather.cloud.toString();
        newEntity.airQuality = weather.airQuality.toString();
        newEntity.temperature = weather.temperature.toString();
        newEntity.humidity = weather.humidity.toString();
        newEntity.date = weather.date;
        return newEntity;
    }
    createDomain(weatherEntity) {
        const newWeather = new weather_model_1.Weather(weatherEntity.city, weatherEntity.temperature, weatherEntity.humidity, weatherEntity.cloud, weatherEntity.airQuality, weatherEntity.date);
        return newWeather;
    }
    async save(weather) {
        const persistenceModel = this.createEntity(weather);
        this.weathers.set(persistenceModel.id, persistenceModel);
        const newEntity = this.weathers.get(persistenceModel.id);
        return this.createDomain(newEntity);
    }
    async searchById(id) {
        const entities = Array.from(this.weathers.values());
        const weatherEntity = entities.find((item) => item.id === id);
        if (!weatherEntity) {
            return null;
        }
        return this.createDomain(weatherEntity);
    }
    async findAll() {
        const weatherEntities = Array.from(this.weathers.values());
        return weatherEntities.map(entity => this.createDomain(entity));
    }
};
exports.WeatherRepository = WeatherRepository;
exports.WeatherRepository = WeatherRepository = __decorate([
    (0, common_1.Injectable)()
], WeatherRepository);
//# sourceMappingURL=weather.repository.js.map