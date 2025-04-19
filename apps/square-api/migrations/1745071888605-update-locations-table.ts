import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLocationsTable1745071888605 implements MigrationInterface {
    name = 'UpdateLocationsTable1745071888605'

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
        await queryRunner.query(`ALTER TABLE "locations" ADD "type" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "status" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "description" character varying(500)`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "contact_person" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "contact_phone" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_ab4b806373c2ee43946679d572e"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "model"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "model" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "routes" DROP CONSTRAINT "FK_b7f482eec606f5f3e62a13f4b25"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "PK_7cc1c9e3853b94816c094825e74"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "routes" DROP COLUMN "start_location_id"`);
        await queryRunner.query(`ALTER TABLE "routes" ADD "start_location_id" uuid`);
        await queryRunner.query(`ALTER TABLE "routes" DROP COLUMN "end_location_id"`);
        await queryRunner.query(`ALTER TABLE "routes" ADD "end_location_id" uuid`);
        await queryRunner.query(`ALTER TABLE "trips" DROP COLUMN "vehicle_id"`);
        await queryRunner.query(`ALTER TABLE "trips" ADD "vehicle_id" uuid`);
        await queryRunner.query(`ALTER TABLE "routes" ADD CONSTRAINT "FK_b7f482eec606f5f3e62a13f4b25" FOREIGN KEY ("start_location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "routes" ADD CONSTRAINT "FK_686ccd2450a968cbd9002153cd0" FOREIGN KEY ("end_location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_ab4b806373c2ee43946679d572e" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_ab4b806373c2ee43946679d572e"`);
        await queryRunner.query(`ALTER TABLE "routes" DROP CONSTRAINT "FK_686ccd2450a968cbd9002153cd0"`);
        await queryRunner.query(`ALTER TABLE "routes" DROP CONSTRAINT "FK_b7f482eec606f5f3e62a13f4b25"`);
        await queryRunner.query(`ALTER TABLE "trips" DROP COLUMN "vehicle_id"`);
        await queryRunner.query(`ALTER TABLE "trips" ADD "vehicle_id" integer`);
        await queryRunner.query(`ALTER TABLE "routes" DROP COLUMN "end_location_id"`);
        await queryRunner.query(`ALTER TABLE "routes" ADD "end_location_id" integer`);
        await queryRunner.query(`ALTER TABLE "routes" DROP COLUMN "start_location_id"`);
        await queryRunner.query(`ALTER TABLE "routes" ADD "start_location_id" integer`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "PK_7cc1c9e3853b94816c094825e74"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "routes" ADD CONSTRAINT "FK_b7f482eec606f5f3e62a13f4b25" FOREIGN KEY ("start_location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "model"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "model" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_ab4b806373c2ee43946679d572e" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "contact_phone"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "contact_person"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "type"`);
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
