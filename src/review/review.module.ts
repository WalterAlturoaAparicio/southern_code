import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ReviewService } from './review.service'
import { Review } from './review.entity'
import { ReviewController } from './review.controller'
import { ExternalApiMiddleware } from './review.middleware'
import { MovieService } from 'src/movie/movie.service'
import { Movie } from 'src/movie/movie.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Review, Movie])],
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
  exports: [ReviewService],
})
export class ReviewModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExternalApiMiddleware).forRoutes('reviews')
  }
}
