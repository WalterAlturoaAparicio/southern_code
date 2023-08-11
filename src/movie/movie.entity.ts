import { Review } from 'src/review/review.entity'
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  release_date: string

  @Column()
  poster_path: string

  @Column()
  overview: string

  /**
   * RELATIONS
   */
  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[]
}
