import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './db.module';
import { PlacesModule } from './places/places.module';
import { AddressModule } from './address/address.module';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { LocationsModule } from './locations/locations.module';
import { RoutesModule } from './routes/routes.module';
import { TripsModule } from './trips/trips.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, PlacesModule, AddressModule, UsersModule, VehiclesModule, LocationsModule, RoutesModule, TripsModule, BookingsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

