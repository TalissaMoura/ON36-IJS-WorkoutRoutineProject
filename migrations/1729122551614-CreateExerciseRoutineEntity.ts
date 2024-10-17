import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateExerciseRoutineTable1694499104593 implements MigrationInterface {
  // This method will be called when the migration is executed
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "ExerciseRoutine" (
        "exerciseId" uuid NOT NULL,
        "message" TEXT NOT NULL,
        "date" DATE NOT NULL,
        CONSTRAINT "PK_ExerciseRoutine" PRIMARY KEY ("exerciseId")
      )
    `);
  }

  // This method will be called when the migration is rolled back
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ExerciseRoutine"`);
  }
}
