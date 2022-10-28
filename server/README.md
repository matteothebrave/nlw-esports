@ NEED SOME FIXES ON SERVER, SPLIT

# BackEnd
# Entidades

### Game
id
title
bannerUrl 

#### Ad
id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt


## Casos de uso

Listagem de Games com contagem de anuncios
Criacao de novo anuncio 
Listagem de anuncios por game
Buscar discord pelo ID do anuncio

LIBS - FW
-> SQLite for DB
-> Prisma for ORM (npm i -D prisma  -- npx prisma init --datasource-provider SQlite) npx prisma studio 
