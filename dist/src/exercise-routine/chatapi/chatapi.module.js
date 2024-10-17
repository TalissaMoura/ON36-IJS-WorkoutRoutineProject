"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatApiModule = void 0;
const common_1 = require("@nestjs/common");
const chat_response_service_1 = require("./chat-response.service");
const weather_module_1 = require("../../weather/weather.module");
const config_1 = require("@nestjs/config");
let ChatApiModule = class ChatApiModule {
};
exports.ChatApiModule = ChatApiModule;
exports.ChatApiModule = ChatApiModule = __decorate([
    (0, common_1.Module)({
        imports: [weather_module_1.WeatherModule, config_1.ConfigModule.forRoot({ isGlobal: true })],
        providers: [chat_response_service_1.ChatResponseService, config_1.ConfigService],
        exports: [chat_response_service_1.ChatResponseService, config_1.ConfigService]
    })
], ChatApiModule);
//# sourceMappingURL=chatapi.module.js.map