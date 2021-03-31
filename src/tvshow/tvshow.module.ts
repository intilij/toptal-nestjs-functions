import { Module } from '@nestjs/common';
import { TvshowController } from './tvshow.controller';
import { TvshowService } from './tvshow.service';

@Module({
  controllers: [TvshowController],
  providers: [TvshowService]
})
export class TvshowModule {}
