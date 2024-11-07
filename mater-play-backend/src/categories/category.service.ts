import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private readonly repository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.repository.find({
      where: { active: true },
    });
  }

  findById(id: string): Promise<Category> {
    return this.repository.findOneBy({ id: id });
  }

  save(category: Category): Promise<Category>   {
    return this.repository.save(category);
  }

  async remove(id: string): Promise<void>{
    await this.repository.delete(id);
  }
}
