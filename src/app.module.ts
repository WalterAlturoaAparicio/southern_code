import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MovieModule } from './movie/movie.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from 'dotenv'
import { ReviewModule } from './review/review.module'
import { UserModule } from './user/user.module'
import { dataSourceOptions } from 'src/db/data-source'

config()

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    MovieModule,
    ReviewModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
