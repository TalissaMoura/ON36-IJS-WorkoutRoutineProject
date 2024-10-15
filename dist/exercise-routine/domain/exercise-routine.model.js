"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseRoutine = void 0;
const crypto_1 = require("crypto");
class ExerciseRoutine {
    constructor(message, date) {
        this.id = (0, crypto_1.randomUUID)();
        this.message = message;
        this.date = date;
    }
}
exports.ExerciseRoutine = ExerciseRoutine;
//# sourceMappingURL=exercise-routine.model.js.map