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
exports.ExerciseRoutineService = void 0;
const common_1 = require("@nestjs/common");
const exercise_routine_repository_1 = require("./exercise-routine.repository");
const exercise_routine_model_1 = require("./domain/exercise-routine.model");
const chat_response_service_1 = require("./chatapi/chat-response.service");
let ExerciseRoutineService = class ExerciseRoutineService {
    constructor(ExerciseRoutineRepository, ChatResponseService) {
        this.ExerciseRoutineRepository = ExerciseRoutineRepository;
        this.ChatResponseService = ChatResponseService;
    }
    async create(gender, beginner, on_period, height, weight, goal, age, city) {
        try {
            const chatResponse = await this.ChatResponseService.getRoutine(gender, beginner, on_period, height, weight, age, goal, city);
            const currentDate = new Date().toString();
            const exerciseRoutineResponse = new exercise_routine_model_1.ExerciseRoutine(chatResponse, currentDate);
            const exerciseRoutine = await this.ExerciseRoutineRepository.save(exerciseRoutineResponse);
            return exerciseRoutine;
        }
        catch (error) {
            console.error('Error fetching chat response data:', error.response?.data || error.message);
            throw new common_1.HttpException('Failed to get chat response data', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return await this.ExerciseRoutineRepository.findAll();
    }
    async findOne(id) {
        const exerciseRoutine = await this.ExerciseRoutineRepository.searchById(id);
        return exerciseRoutine;
    }
};
exports.ExerciseRoutineService = ExerciseRoutineService;
exports.ExerciseRoutineService = ExerciseRoutineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [exercise_routine_repository_1.ExerciseRoutineRepository, chat_response_service_1.ChatResponseService])
], ExerciseRoutineService);
//# sourceMappingURL=exercise-routine.service.js.map