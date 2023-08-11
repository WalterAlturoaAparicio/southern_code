import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Southern Challenge API')
    .setVersion('1.0')
    .addBearerAuth()
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      filter: true,
    },
  })

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
