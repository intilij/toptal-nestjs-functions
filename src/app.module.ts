import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvshowModule } from './tvshow/tvshow.module';
import { Tvshow1Module } from './tvshow1/tvshow1.module';

@Module({
  imports: [TvshowModule, Tvshow1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
