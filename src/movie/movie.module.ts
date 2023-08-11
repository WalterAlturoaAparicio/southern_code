import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Movie } from './movie.entity'
import { MovieController } from './movie.controller'
import { ReviewModule } from 'src/review/review.module'

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), ReviewModule],
  controllers: [MovieController],
  providers: [],
})
export class MovieModule {}
