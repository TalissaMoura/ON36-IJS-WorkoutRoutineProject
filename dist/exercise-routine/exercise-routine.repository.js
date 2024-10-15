"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseRoutineRepository = void 0;
const common_1 = require("@nestjs/common");
const exercise_routine_entity_1 = require("./entities/exercise-routine.entity");
const exercise_routine_model_1 = require("./domain/exercise-routine.model");
let ExerciseRoutineRepository = class ExerciseRoutineRepository {
    constructor() {
        this.exercises = new Map();
    }
    createEntity(exerciseRoutine) {
        const newEntity = new exercise_routine_entity_1.ExerciseRoutineEntity();
        newEntity.exerciseID = exerciseRoutine.id;
        newEntity.message = exerciseRoutine.message;
        newEntity.date = exerciseRoutine.date;
        return newEntity;
    }
    createDomain(ExerciseRoutineEntity) {
        const newExerciseRoutine = new exercise_routine_model_1.ExerciseRoutine(ExerciseRoutineEntity.message, ExerciseRoutineEntity.date);
        return newExerciseRoutine;
    }
    async save(exerciseRoutine) {
        const persistenceModel = this.createEntity(exerciseRoutine);
        this.exercises.set(persistenceModel.exerciseID, persistenceModel);
        const newEntity = this.exercises.get(persistenceModel.exerciseID);
        return this.createDomain(newEntity);
    }
    async searchById(id) {
        const entities = Array.from(this.exercises.values());
        const exerciseRoutineEntity = entities.find((item) => item.exerciseID === id);
        if (!exerciseRoutineEntity) {
            return null;
        }
        return this.createDomain(exerciseRoutineEntity);
    }
    async findAll() {
        const exercisesEntities = Array.from(this.exercises.values());
        return exercisesEntities.map(entity => this.createDomain(entity));
    }
};
exports.ExerciseRoutineRepository = ExerciseRoutineRepository;
exports.ExerciseRoutineRepository = ExerciseRoutineRepository = __decorate([
    (0, common_1.Injectable)()
], ExerciseRoutineRepository);
//# sourceMappingURL=exercise-routine.repository.js.map