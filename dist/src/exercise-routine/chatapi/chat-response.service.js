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
exports.ChatResponseService = void 0;
const common_1 = require("@nestjs/common");
const prompts_1 = require("@langchain/core/prompts");
const weather_service_1 = require("../../weather/weather.service");
const output_parsers_1 = require("@langchain/core/output_parsers");
const google_genai_1 = require("@langchain/google-genai");
const config_1 = require("@nestjs/config");
let ChatResponseService = class ChatResponseService {
    constructor(weatherService, configService) {
        this.weatherService = weatherService;
        this.configService = configService;
        this.apiKey = this.loadApiKey();
        this.llm = new google_genai_1.ChatGoogleGenerativeAI({
            model: "gemini-1.5-flash",
            temperature: 0,
            apiKey: this.apiKey
        });
        this.parser = new output_parsers_1.StringOutputParser();
        this.systemTemplate = `You are a helpful personal trainer agent where your mission is to give a list of exercises for the user based on their personal data and weather conditions. 
    You are equipped with a tool that give the weather conditions where the user is and personal data from user that contains information about their current physical status, if on_period is set to true
    means that the user is having the menstrual cycle. Based on the user input and context, determine the best exercises for the current achieve their fitness goal.`;
        this.promptTemplate = prompts_1.ChatPromptTemplate.fromMessages([
            ["system", this.systemTemplate],
            ["user", `Here is the information about the user:
        Age: {age}
        Gender: {gender}
        Beginner: {beginner}
        On period: {on_period}
        Height: {height} cm
        Weight: {weight} kg
        goal: {goal}
    
        The current weather conditions are:
        Temperature: {temperature}°C
        Humidity: {humidity}%
        Cloud coverage: {cloud}%
        Air quality: {airQuality}
        date: {date}
    
        Based on this information, suggest an appropriate exercise routine that takes into account the user's profile and the weather.`]
        ]);
    }
    loadApiKey() {
        try {
            const apiKey = process.env.GEMINI_API_KEY;
            return apiKey;
        }
        catch (error) {
            console.error('Error fetching chat response data:', error.response?.data || error.message);
            throw new Error('Could not load API key');
        }
    }
    async getRoutine(gender, beginner, on_period, height, weight, age, goal, city) {
        const currentWeather = await this.weatherService.create(city);
        const chain = this.promptTemplate.pipe(this.llm).pipe(this.parser);
        const result = await chain.invoke({
            gender: gender,
            beginner: beginner,
            on_period: on_period,
            height: height,
            weight: weight,
            goal: goal,
            age: age,
            temperature: currentWeather.temperature,
            humidity: currentWeather.humidity,
            cloud: currentWeather.cloud,
            airQuality: currentWeather.airQuality,
            date: currentWeather.date,
            city: currentWeather.city,
        });
        return result;
    }
};
exports.ChatResponseService = ChatResponseService;
exports.ChatResponseService = ChatResponseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weather_service_1.WeatherService, config_1.ConfigService])
], ChatResponseService);
//# sourceMappingURL=chat-response.service.js.map