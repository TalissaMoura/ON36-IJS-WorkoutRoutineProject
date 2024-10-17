"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExerciseRoutineTable1694499104593 = void 0;
class CreateExerciseRoutineTable1694499104593 {
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE "ExerciseRoutine" (
        "exerciseId" uuid NOT NULL,
        "message" TEXT NOT NULL,
        "date" DATE NOT NULL,
        CONSTRAINT "PK_ExerciseRoutine" PRIMARY KEY ("exerciseId")
      )
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "ExerciseRoutine"`);
    }
}
exports.CreateExerciseRoutineTable1694499104593 = CreateExerciseRoutineTable1694499104593;
//# sourceMappingURL=1729122551614-CreateExerciseRoutineEntity.js.map