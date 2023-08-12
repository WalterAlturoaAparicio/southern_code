import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'

export class SwaggerAuth {
  static setup(app: INestApplication): void {
    const customOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'Southern Challenge Docs',
      customCss: '.swagger-ui .topbar { display: none }',
      customJs: `
        const token = localStorage.getItem('access_token');
        if (token) {
          window.ui.authActions.authorize({
            value: 'Bearer ' + token,
          });
        }
      `,
    }

    const config = new DocumentBuilder()
      .setTitle('Southern Challenge API')
      .setDescription(
        'Challenge de southern code con implementacion de Tmbd Api',
      )
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'JWT',
      )
      .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('swagger', app, document, customOptions)
  }
}
