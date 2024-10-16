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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseRoutineController = void 0;
const common_1 = require("@nestjs/common");
const exercise_routine_service_1 = require("./exercise-routine.service");
let ExerciseRoutineController = class ExerciseRoutineController {
    constructor(exerciseRoutineService) {
        this.exerciseRoutineService = exerciseRoutineService;
    }
    healthCheck() {
        return {
            status: 'healthy',
            timestamp: new Date().toISOString(),
        };
    }
    create(gender, begineer, on_period, height, weight, goal, city, age) {
        const exerciseRoutine = this.exerciseRoutineService.create(gender, begineer, on_period, height, weight, goal, age, city);
        return exerciseRoutine;
    }
    findAll() {
        return this.exerciseRoutineService.findAll();
    }
    findOne(id) {
        return this.exerciseRoutineService.findOne(id);
    }
};
exports.ExerciseRoutineController = ExerciseRoutineController;
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExerciseRoutineController.prototype, "healthCheck", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)("gender")),
    __param(1, (0, common_1.Body)("begineer")),
    __param(2, (0, common_1.Body)("on_period")),
    __param(3, (0, common_1.Body)("height")),
    __param(4, (0, common_1.Body)("weight")),
    __param(5, (0, common_1.Body)("goal")),
    __param(6, (0, common_1.Body)("city")),
    __param(7, (0, common_1.Body)("age")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ExerciseRoutineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExerciseRoutineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExerciseRoutineController.prototype, "findOne", null);
exports.ExerciseRoutineController = ExerciseRoutineController = __decorate([
    (0, common_1.Controller)('exercise-routine'),
    __metadata("design:paramtypes", [exercise_routine_service_1.ExerciseRoutineService])
], ExerciseRoutineController);
//# sourceMappingURL=exercise-routine.controller.js.map