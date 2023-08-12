import { IsString, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ReviewDto {
  @ApiProperty({
    description: 'Id de la pelicula',
  })
  @IsNumber()
  tmbdId: number

  @ApiProperty({
    description: 'Nombre de usuario que hizo la review',
  })
  @IsString()
  userName: string

  @ApiProperty({
    description: 'Calificacion de la pelicula',
  })
  @IsNumber()
  rating: number
}
