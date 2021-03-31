import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Tvshow1Service } from './tvshow1.service';
import { CreateTvshow1Dto } from './dto/create-tvshow1.dto';
import { UpdateTvshow1Dto } from './dto/update-tvshow1.dto';

@Controller('tvshow1')
export class Tvshow1Controller {
  constructor(private readonly tvshow1Service: Tvshow1Service) {}

  @Post()
  create(@Body() createTvshow1Dto: CreateTvshow1Dto) {
    return this.tvshow1Service.create(createTvshow1Dto);
  }

  @Get()
  findAll() {
    console.log("This is Tvshow1Controller.");
    return this.tvshow1Service.findAll();
  }
  /*
  getTest(): string {
    return this.tvshow1Service.getTest();
  }*/

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tvshow1Service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTvshow1Dto: UpdateTvshow1Dto) {
    return this.tvshow1Service.update(+id, updateTvshow1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tvshow1Service.remove(+id);
  }
}
