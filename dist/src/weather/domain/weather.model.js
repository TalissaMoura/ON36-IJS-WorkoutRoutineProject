"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const crypto_1 = require("crypto");
class Weather {
    constructor(city, temperature, humidity, cloud, airQuality, date) {
        this.weatherId = (0, crypto_1.randomUUID)();
        this.city = city;
        this.temperature = temperature;
        this.humidity = humidity;
        this.cloud = cloud;
        this.date = date;
        this.airQuality = airQuality;
    }
}
exports.Weather = Weather;
//# sourceMappingURL=weather.model.js.map