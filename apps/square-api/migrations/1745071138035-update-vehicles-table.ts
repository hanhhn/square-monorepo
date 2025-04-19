import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateVehiclesTable1745071138035 implements MigrationInterface {
    name = 'UpdateVehiclesTable1745071138035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "licensePlate"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "color"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "license_plate" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "type" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "status" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "description" character varying(500)`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "manufacturer" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "year" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_ab4b806373c2ee43946679d572e"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "model"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "model" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "trips" DROP COLUMN "vehicle_id"`);
        await queryRunner.query(`ALTER TABLE "trips" ADD "vehicle_id" uuid`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_ab4b806373c2ee43946679d572e" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_ab4b806373c2ee43946679d572e"`);
        await queryRunner.query(`ALTER TABLE "trips" DROP COLUMN "vehicle_id"`);
        await queryRunner.query(`ALTER TABLE "trips" ADD "vehicle_id" integer`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "model"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "model" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_ab4b806373c2ee43946679d572e" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "manufacturer"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "license_plate"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "color" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "licensePlate" character varying(50) NOT NULL`);
    }

}
