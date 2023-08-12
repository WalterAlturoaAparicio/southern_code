import { Controller, Post, Req } from '@nestjs/common'
import { ReviewService } from './review.service'
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger'
import { Review } from './review.entity'
import { ReviewDto } from './review.dto'
import { CustomRequest } from './interfaces/custom-request.interface'
import { MovieService } from 'src/movie/movie.service'

@ApiTags('Reviews')
@ApiBearerAuth()
@Controller('reviews')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly movieService: MovieService,
  ) {}

  @Post()
  @ApiBody({
    type: ReviewDto,
  })
  async createReview(@Req() req: CustomRequest): Promise<Review> {
    const { externalApiData, body } = req
    if (externalApiData) {
      const { overview, poster_path, release_date, title } = externalApiData
      let movieExists = await this.movieService.findMovieByTitle(title)
      if (!movieExists) {
        movieExists = await this.movieService.createMovie({
          title,
          overview,
          poster_path,
          release_date,
        })
      }
      const review = {
        ...body,
        movieId: movieExists.id,
      }
      return this.reviewService.createReview(review)
    }
  }
}
