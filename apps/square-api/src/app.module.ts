import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './db.module';
import { PlacesModule } from './places/places.module';
import { AddressModule } from './address/address.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, PlacesModule, AddressModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

