const faker = require('faker')

module.exports = (amountOfPosts = 0) =>
  Array(amountOfPosts)
    .fill()
    .map(() => ({
      title: faker.name.title(),
      author: faker.name.findName(),
      body: faker.lorem.paragraphs(3),
    }))
