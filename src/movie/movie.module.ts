import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';

@Module({
  imports: [],
  controllers: [],
  providers: [MovieService],
})
export class MovieModule {}
