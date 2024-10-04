import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { MovieService } from './services/movie.service';
import { MovieController } from './controllers/movie.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Movie],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Movie]),
  ],
  providers: [MovieService],
  controllers: [MovieController],
})
export class AppModule {}
