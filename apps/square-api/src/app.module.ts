import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './db.module';
import { PlacesModule } from './places/places.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, PlacesModule, AddressModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

