import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
// import { MovieDto } from './movie.dto'
import { ReviewService } from 'src/review/review.service'
import { Review } from 'src/review/review.entity'

@ApiTags('Movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get(':tmbdId/reviews')
  async getReviewsByMovie(
    @Param('tmbdId', ParseIntPipe) tmbdId: number,
  ): Promise<Review[]> {
    try {
      const { movieId } = await this.reviewService.findReviewByTmbdId(tmbdId)
      if (!movieId) {
        throw new NotFoundException(
          `No se encontró la película con tmbdId: ${tmbdId}`,
        )
      }
      return this.reviewService.findAllReviewsByMovie(movieId)
    } catch (error) {
      return []
    }
  }
}
