import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Review } from './review.entity'
import { Repository } from 'typeorm'
import { IReview } from './review.interface'

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepo: Repository<Review>,
  ) {}

  createReview(review: IReview) {
    const newRev = this.reviewRepo.create(review)
    return this.reviewRepo.save(newRev)
  }

  findAllReviewsByUser(user: string) {
    return this.reviewRepo
      .createQueryBuilder('review')
      .leftJoin('review.Movie', 'movie')
      .where('review.userName = :user', { user })
      .select([
        'movie.title',
        'movie.release_date',
        'movie.poster_path',
        'movie.overview',
        'review.rating',
        'review.username',
      ])
      .getMany()
  }
  findAllReviewsByMovie(id: number) {
    return this.reviewRepo
      .createQueryBuilder('review')
      .leftJoin('review.Movie', 'movie')
      .where('movie.id = :id', { id })
      .select([
        'movie.title',
        'movie.release_date',
        'movie.poster_path',
        'movie.overview',
        'review.rating',
        'review.username',
      ])
      .getMany()
  }
}
