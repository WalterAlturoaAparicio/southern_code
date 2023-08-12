import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Response } from 'express'
import axios from 'axios'
import { CustomRequest } from './interfaces/custom-request.interface'
import { config } from 'dotenv'

config()
@Injectable()
export class ExternalApiMiddleware implements NestMiddleware {
  async use(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const accessToken = process.env.TOKEN
      const { tmbdId } = req.body
      // Verificar si se obtuvo el token de acceso
      if (!accessToken) {
        throw new Error('Access token not available.')
      }

      // Configurar las opciones de la solicitud con el token de acceso
      const response = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${tmbdId}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })

      // Realizar la solicitud a la API externa
      req.externalApiData = response.data
      next()
    } catch (error) {
      // Handle API request error
      console.error('Error calling external API:', error)
      next(error)
    }
  }
}
