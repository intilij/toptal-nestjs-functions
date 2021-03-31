import { PartialType } from '@nestjs/mapped-types';
import { CreateTvshow1Dto } from './create-tvshow1.dto';

export class UpdateTvshow1Dto extends PartialType(CreateTvshow1Dto) {}
