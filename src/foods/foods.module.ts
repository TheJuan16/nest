import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { Food } from './entities/food.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsController } from './foods.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
