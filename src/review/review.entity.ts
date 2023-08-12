import { Movie } from 'src/movie/movie.entity'
import {
  Check,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
@Check(`"rating" >=1 AND rating <=10`)
export class Review {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userName: string

  @Column()
  rating: number

  @Column()
  tmbdId: number

  @Column()
  movieId: number

  /**
   * RELATIONS
   */
  @ManyToOne(() => Movie, (movies) => movies.reviews)
  movie: Movie
}
