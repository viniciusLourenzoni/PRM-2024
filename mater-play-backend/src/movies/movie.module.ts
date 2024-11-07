import { Module } from "@nestjs/common";
import { MovieController } from "./movie.controller";
import { MovieService } from "./movie.service";
import { Movie } from "./movie.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/categories/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Category, Movie])],
  controllers: [MovieController],
  providers: [MovieService],
  exports: []
})

export class MovieModule {}