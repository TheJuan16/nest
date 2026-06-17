import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepo.create(createCategoryDto);
    return await this.categoryRepo.save(category);
  }

  async findAll() {
    const categories = await this.categoryRepo.find();
    return categories;
    return `This action returns all categories`;
  }

  async findOne(id: number) {
    const category = await this. categoryRepo.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`La categoria no fue encontrada con el id ${id}`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`La categoria no fue encontrada con el id ${id}`) ;
    }
    Object.assign(category, updateCategoryDto);
    return await this.categoryRepo.save(category);
  }

  async remove(id: number) {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`La categoria no fue encontrada con el id ${id}`);
    }
    await this.categoryRepo.delete(id);
    return {message:`La categoria con id ${id} fue eliminada correctamente`}
  }
}
