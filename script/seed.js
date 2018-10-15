'use strict'

const db = require('../server/db')
const {User, Vet} = require('../server/db/models')
const mockUsers = require('./USER_DATA.json')
const mockVets = require('./VET_DATA.json')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = []
  for (let i = 0; i < mockUsers.length; i++) {
    users.push(User.create(mockUsers[i]))
  }
  await Promise.all(users)
  const vets = []
  for (let i = 0; i < mockVets.length; i++) {
    vets.push(Vet.create(mockVets[i]))
  }
  await Promise.all(users)
  // console.log(`seeded ${users.length} users`)
  // console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
