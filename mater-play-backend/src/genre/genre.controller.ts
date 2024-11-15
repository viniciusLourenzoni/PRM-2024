import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Genre } from "./genre.entity";
import { GenreService } from "./genre.service";

@Controller('genres')
export class GenreController {
  constructor(private readonly service: GenreService) {}

  @Get()
  async findAll(): Promise<Genre[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Genre> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Gênero não encontrado', HttpStatus.NOT_FOUND);
    }

    return found;
  }

  @Post()
  create(@Body()category: Genre): Promise<Genre>{
    return this.service.save(category);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: string): Promise<void>{
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Genêro não encontrado', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}