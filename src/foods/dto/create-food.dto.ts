import { IsNotEmpty, IsNumber } from 'class-validator';
/* eslint-disable prettier/prettier */
export class CreateFoodDto {
  @IsNotEmpty()
  @IsNumber()
  name!: string;
  @IsNotEmpty()
  @IsNumber()
  price!: number;
  @IsNotEmpty()
  @IsNumber()
  description!: string;
  @IsNotEmpty()
  @IsNumber()
  image!: string;
  @IsNotEmpty()
  @IsNumber()
  category!: string;
}
