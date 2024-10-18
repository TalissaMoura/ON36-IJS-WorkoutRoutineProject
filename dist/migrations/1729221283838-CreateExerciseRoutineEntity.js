"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExerciseRoutine1729221283838 = void 0;
class CreateExerciseRoutine1729221283838 {
    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE "ExerciseRoutines" (
          "exerciseId" uuid NOT NULL,
          "message" TEXT NOT NULL,
          "date" DATE NOT NULL,
          CONSTRAINT "PK_ExerciseRoutines" PRIMARY KEY ("exerciseId")
        )
      `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "ExerciseRoutines"`);
    }
}
exports.CreateExerciseRoutine1729221283838 = CreateExerciseRoutine1729221283838;
//# sourceMappingURL=1729221283838-CreateExerciseRoutineEntity.js.map