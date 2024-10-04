import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { Movie } from 'src/entities/movie.entity';
import { MovieService } from 'src/services/movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Movie> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
    }

    return found;
  }
}
