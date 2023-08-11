import { IsArray, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ReviewDto } from 'src/review/review.dto'

export class MovieDto {
  @ApiProperty({
    description: 'Titulo de la pelicula',
  })
  @IsString()
  title: string

  @ApiProperty({
    description: 'Fecha de realizacion de la pelicula',
  })
  @IsString()
  release_date: string

  @ApiProperty({
    description: 'Url de la imagen del poster',
  })
  @IsString()
  poster_path: string

  @ApiProperty({
    description: 'Descripcion de la pelicula',
  })
  @IsString()
  overview: string

  @ApiProperty({
    description: 'Array de reseñas',
  })
  @IsArray()
  @Type(() => ReviewDto)
  enrollments: ReviewDto[]
}
