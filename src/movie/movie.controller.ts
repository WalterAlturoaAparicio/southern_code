import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
// import { MovieDto } from './movie.dto'
import { ReviewService } from 'src/review/review.service'
import { Review } from 'src/review/review.entity'

@ApiTags('Movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get(':tmbdId/reviews')
  getReviewsByMovie(@Param('id', ParseIntPipe) id: number): Promise<Review[]> {
    return this.reviewService.findAllReviewsByMovie(id)
  }
}
