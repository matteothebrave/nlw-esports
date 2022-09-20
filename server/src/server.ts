import express from 'express'
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())




app.get('/games', async (request, response) => {
  // procura todos
  const games = await prisma.game.findMany({
    // faz o join
    include: {
      // agregate
      _count: {
        // relacionamento de ads
        select: {
          ads: true,
        }
      }
    }
  })
  return response.json(games);
})
app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body: any = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  // status 201 (CREATED/SUCCESS)
  return response.status(201).json(ad);
})
// localhost:333/ads
app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return response.status(200).json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(',')
    }
  }))
})

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })

  return response.json({
    discord: ad.discord,
  })
})

// para ouvir a porta no (localhost:3333)
app.listen(3333)