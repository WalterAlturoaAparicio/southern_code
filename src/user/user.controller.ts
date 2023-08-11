import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Review } from 'src/review/review.entity'
import { ReviewService } from 'src/review/review.service'

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get(':username/reviews')
  getReviewsByUser(@Param('username') username: string): Promise<Review[]> {
    return this.reviewService.findAllReviewsByUser(username)
  }
}
