import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()
async function main() {
  for (let i = 0; i < 50; i++) {

    let free = Math.random() < 0.25;

    await prisma.song.create({
        data: {
            title: faker.music.songName(),
            artist: faker.music.artist(),
            length: faker.number.int({min: 75, max: 300}),
            price: free? 0: faker.number.int({min: 99, max: 300}),
            rating: faker.number.float({min: 1, max:5})
        }
    });
  }
  for (let i = 0; i < 10; i++) {
    await prisma.playlist.create({
      data: {
        name: faker.music.album(),
        songs: {
          connect: { id: i+1 }
        }
      }
    })
  }
  await prisma.playlist.update({
    where: { id: 2 },
    data: {
      songs: {
        connect: [
          { id: 1 },
          { id: 4 },
          { id: 5 },
          { id: 14 }
        ]
      }
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })