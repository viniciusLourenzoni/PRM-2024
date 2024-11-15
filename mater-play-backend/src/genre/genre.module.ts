import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GenreController } from "./genre.controller";
import { GenreService } from "./genre.service";
import { Genre } from "./genre.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  controllers: [GenreController],
  providers: [GenreService],
  exports: []
})

export class GenreModule {}