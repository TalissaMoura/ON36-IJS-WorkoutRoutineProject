"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const weather_model_1 = require("../domain/weather.model");
const config_1 = require("@nestjs/config");
let WeatherApiService = class WeatherApiService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.baseUrl = 'https://api.weatherapi.com/v1/current.json';
        this.apiKey = this.loadApiKey();
    }
    loadApiKey() {
        try {
            const apiKey = process.env.WEATHER_API_KEY;
            return apiKey;
        }
        catch (error) {
            throw new Error('Could not load API key');
        }
    }
    getAirQuality(gbIndex) {
        if (gbIndex >= 1 && gbIndex <= 3) {
            return "Good";
        }
        else if (gbIndex >= 4 && gbIndex <= 6) {
            return "Moderate";
        }
        else if (gbIndex >= 7 && gbIndex <= 9) {
            return "Bad";
        }
        else if (gbIndex >= 10) {
            return "Very Bad";
        }
        else {
            return "Could not determine air quality";
        }
    }
    async getWeather(city) {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.baseUrl}`, {
                params: {
                    key: this.apiKey,
                    q: city,
                    aqi: 'yes',
                },
            }));
            if (!response.data || !response.data.current) {
                throw new common_1.NotFoundException(`City not found or invalid API key, error: ${response.data}`);
            }
            const { current } = response.data;
            const currentDate = new Date().toString();
            return new weather_model_1.Weather(city, `${current.temp_c} celsius`, current.humidity, current.cloud, this.getAirQuality(current.air_quality["gb-defra-index"]), currentDate);
        }
        catch (error) {
            throw new common_1.NotFoundException('City not found or invalid API key');
        }
    }
};
exports.WeatherApiService = WeatherApiService;
exports.WeatherApiService = WeatherApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService, config_1.ConfigService])
], WeatherApiService);
//# sourceMappingURL=weatherapi.service.js.map