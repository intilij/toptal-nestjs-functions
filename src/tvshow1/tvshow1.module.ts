import { Module } from '@nestjs/common';
import { Tvshow1Service } from './tvshow1.service';
import { Tvshow1Controller } from './tvshow1.controller';

@Module({
  controllers: [Tvshow1Controller],
  providers: [Tvshow1Service]
})
export class Tvshow1Module {}
