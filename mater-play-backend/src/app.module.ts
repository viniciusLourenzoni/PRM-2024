import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { MovieService } from './services/movie.service';
import { MovieController } from './controllers/movie.controller';
import { Category } from './entities/category.entity';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';

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
      entities: [Movie, Category],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Movie, Category]),
  ],
  providers: [MovieService, CategoryService],
  controllers: [MovieController, CategoryController],
})
export class AppModule {}
