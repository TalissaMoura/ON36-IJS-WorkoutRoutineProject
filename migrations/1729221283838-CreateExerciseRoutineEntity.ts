import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateExerciseRoutine1729221283838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        CREATE TABLE "ExerciseRoutines" (
          "exerciseId" uuid NOT NULL,
          "message" TEXT NOT NULL,
          "date" DATE NOT NULL,
          CONSTRAINT "PK_ExerciseRoutines" PRIMARY KEY ("exerciseId")
        )
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "ExerciseRoutines"`);
    }

}
