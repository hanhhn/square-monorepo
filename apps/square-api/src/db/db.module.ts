import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'yourpassword',
      database: 'yourdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // dùng false nếu dùng migration
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      migrationsRun: false,
    }),
  ],
})
export class DatabaseModule {}
