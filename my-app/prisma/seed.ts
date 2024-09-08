import { PrismaClient } from '@prisma/client'
import { fakerKO as faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function seedUsers() {
  Array.from({ length: 10 }, (v, i) => i).forEach(async () => {
    const userData = {
      email: faker.internet.email(),
      name: faker.person.lastName() + faker.person.firstName(),
      image: faker.image.avatar(),
      desc: faker.lorem.paragraph(),
    }
    const res = await prisma.user.create({
      data: userData,
    })
    console.log(res)
  })
}

async function seedRooms() {}

function getRandomLatitude() {}
function getRandomLongtitude() {}

async function main() {
  await seedUsers()
  // await seedRooms()
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
