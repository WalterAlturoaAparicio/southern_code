import { Controller, Post, Query } from '@nestjs/common'
import { ReviewService } from './review.service'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { IReview } from './review.interface'
import { Review } from './review.entity'

@ApiTags('Reviews')
@ApiBearerAuth()
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  createReview(@Query() body: IReview): Promise<Review> {
    return this.reviewService.createReview(body)
  }
}
