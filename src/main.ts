import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { SwaggerAuth } from './auth/swagger-auth.guard'

config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  SwaggerAuth.setup(app)
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
