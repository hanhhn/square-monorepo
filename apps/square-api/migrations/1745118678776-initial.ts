import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1745118678776 implements MigrationInterface {
    name = 'Initial1745118678776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "square"."users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(255) NOT NULL, "full_name" character varying(100) NOT NULL, "phone" character varying(20), "date_of_birth" date, "gender" character varying(20) NOT NULL, "address" text, "status" character varying(20) NOT NULL, "role" character varying(20) NOT NULL, "avatar_url" character varying(255), "settings" json, "last_login" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "license_plate" character varying(255) NOT NULL, "type" character varying(255) NOT NULL, "capacity" integer NOT NULL, "status" character varying(255) NOT NULL, "description" character varying(500), "model" character varying(255) NOT NULL, "manufacturer" character varying(255) NOT NULL, "year" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "driver_id" uuid, CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."locations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "address" character varying(255) NOT NULL, "latitude" numeric(10,7) NOT NULL, "longitude" numeric(10,7) NOT NULL, "type" character varying(255) NOT NULL, "status" character varying(255) NOT NULL, "description" character varying(500), "contact_person" character varying(255), "contact_phone" character varying(255), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."routes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "code" character varying(100) NOT NULL, "start_location_id" uuid NOT NULL, "end_location_id" uuid NOT NULL, "distance_km" numeric(10,2) NOT NULL, "estimated_duration_minutes" integer NOT NULL, "status" character varying(20) NOT NULL, "description" text, "base_fare" numeric(10,2) NOT NULL, "stop_points" json, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_76100511cdfa1d013c859f01d8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."trips" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "route_id" uuid NOT NULL, "vehicle_id" uuid NOT NULL, "code" character varying(100) NOT NULL, "departure_time" TIMESTAMP NOT NULL, "arrival_time" TIMESTAMP NOT NULL, "status" character varying(20) NOT NULL, "available_seats" integer NOT NULL, "current_price" numeric(10,2) NOT NULL, "description" text, "schedule_stops" json, "driver_name" character varying(50), "driver_phone" character varying(20), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f71c231dee9c05a9522f9e840f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."bookings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "trip_id" uuid NOT NULL, "code" character varying(100) NOT NULL, "status" character varying(20) NOT NULL, "number_of_seats" integer NOT NULL, "total_price" numeric(10,2) NOT NULL, "unit_price" numeric(10,2) NOT NULL, "payment_status" character varying(50) NOT NULL, "payment_method" character varying(50), "payment_time" TIMESTAMP, "notes" text, "passenger_info" json, "contact_name" character varying(50) NOT NULL, "contact_phone" character varying(20) NOT NULL, "contact_email" character varying(100), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."countries" ("id" SERIAL NOT NULL, "name" character(255) NOT NULL, CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."provinces" ("id" SERIAL NOT NULL, "name" character(255) NOT NULL, "country_id" integer, CONSTRAINT "PK_2e4260eedbcad036ec53222e0c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."districts" ("id" SERIAL NOT NULL, "name" character(255) NOT NULL, "province_id" integer, CONSTRAINT "PK_972a72ff4e3bea5c7f43a2b98af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "square"."wards" ("id" SERIAL NOT NULL, "name" character(255) NOT NULL, "district_id" integer, CONSTRAINT "PK_f67afa72e02ac056570c0dde279" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "square"."vehicles" ADD CONSTRAINT "FK_9c2e0a8772c9e43b32f57bfcfcc" FOREIGN KEY ("driver_id") REFERENCES "square"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."routes" ADD CONSTRAINT "FK_b7f482eec606f5f3e62a13f4b25" FOREIGN KEY ("start_location_id") REFERENCES "square"."locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."routes" ADD CONSTRAINT "FK_686ccd2450a968cbd9002153cd0" FOREIGN KEY ("end_location_id") REFERENCES "square"."locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."trips" ADD CONSTRAINT "FK_e49dbbd9991c9b7baec9779e7ce" FOREIGN KEY ("route_id") REFERENCES "square"."routes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."trips" ADD CONSTRAINT "FK_ab4b806373c2ee43946679d572e" FOREIGN KEY ("vehicle_id") REFERENCES "square"."vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."bookings" ADD CONSTRAINT "FK_45fa98a28a6944e39d8a5754bd1" FOREIGN KEY ("trip_id") REFERENCES "square"."trips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."bookings" ADD CONSTRAINT "FK_64cd97487c5c42806458ab5520c" FOREIGN KEY ("user_id") REFERENCES "square"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."provinces" ADD CONSTRAINT "FK_4148c03cb7bf422b9ee3ade134e" FOREIGN KEY ("country_id") REFERENCES "square"."countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."districts" ADD CONSTRAINT "FK_9d451638507b11822dc411a2dfe" FOREIGN KEY ("province_id") REFERENCES "square"."provinces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "square"."wards" ADD CONSTRAINT "FK_3d1ef92876a28d10ac2d3fe766b" FOREIGN KEY ("district_id") REFERENCES "square"."districts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "square"."wards" DROP CONSTRAINT "FK_3d1ef92876a28d10ac2d3fe766b"`);
        await queryRunner.query(`ALTER TABLE "square"."districts" DROP CONSTRAINT "FK_9d451638507b11822dc411a2dfe"`);
        await queryRunner.query(`ALTER TABLE "square"."provinces" DROP CONSTRAINT "FK_4148c03cb7bf422b9ee3ade134e"`);
        await queryRunner.query(`ALTER TABLE "square"."bookings" DROP CONSTRAINT "FK_64cd97487c5c42806458ab5520c"`);
        await queryRunner.query(`ALTER TABLE "square"."bookings" DROP CONSTRAINT "FK_45fa98a28a6944e39d8a5754bd1"`);
        await queryRunner.query(`ALTER TABLE "square"."trips" DROP CONSTRAINT "FK_ab4b806373c2ee43946679d572e"`);
        await queryRunner.query(`ALTER TABLE "square"."trips" DROP CONSTRAINT "FK_e49dbbd9991c9b7baec9779e7ce"`);
        await queryRunner.query(`ALTER TABLE "square"."routes" DROP CONSTRAINT "FK_686ccd2450a968cbd9002153cd0"`);
        await queryRunner.query(`ALTER TABLE "square"."routes" DROP CONSTRAINT "FK_b7f482eec606f5f3e62a13f4b25"`);
        await queryRunner.query(`ALTER TABLE "square"."vehicles" DROP CONSTRAINT "FK_9c2e0a8772c9e43b32f57bfcfcc"`);
        await queryRunner.query(`DROP TABLE "square"."wards"`);
        await queryRunner.query(`DROP TABLE "square"."districts"`);
        await queryRunner.query(`DROP TABLE "square"."provinces"`);
        await queryRunner.query(`DROP TABLE "square"."countries"`);
        await queryRunner.query(`DROP TABLE "square"."bookings"`);
        await queryRunner.query(`DROP TABLE "square"."trips"`);
        await queryRunner.query(`DROP TABLE "square"."routes"`);
        await queryRunner.query(`DROP TABLE "square"."locations"`);
        await queryRunner.query(`DROP TABLE "square"."vehicles"`);
        await queryRunner.query(`DROP TABLE "square"."users"`);
    }

}
