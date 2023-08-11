import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { ReviewModule } from 'src/review/review.module'

@Module({
  imports: [ReviewModule],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
