"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseRoutineModule = void 0;
const common_1 = require("@nestjs/common");
const exercise_routine_service_1 = require("./exercise-routine.service");
const exercise_routine_controller_1 = require("./exercise-routine.controller");
const chatapi_module_1 = require("./chatapi/chatapi.module");
const exercise_routine_repository_1 = require("./exercise-routine.repository");
let ExerciseRoutineModule = class ExerciseRoutineModule {
};
exports.ExerciseRoutineModule = ExerciseRoutineModule;
exports.ExerciseRoutineModule = ExerciseRoutineModule = __decorate([
    (0, common_1.Module)({
        imports: [chatapi_module_1.ChatApiModule],
        controllers: [exercise_routine_controller_1.ExerciseRoutineController],
        providers: [exercise_routine_service_1.ExerciseRoutineService, exercise_routine_repository_1.ExerciseRoutineRepository],
    })
], ExerciseRoutineModule);
//# sourceMappingURL=exercise-routine.module.js.map