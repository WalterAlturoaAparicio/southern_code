import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Movie } from './movie.entity'
import { IMovie } from './movie.interface'

@Injectable()
export class MovieService {
  constructor(@InjectRepository(Movie) private movieRepo: Repository<Movie>) {}

  createMovie(movie: IMovie) {
    const newMov = this.movieRepo.create(movie)
    return this.movieRepo.save(newMov)
  }

  findMovieByTitle(title: string) {
    return this.movieRepo.findOne({ where: { title } })
  }
}
