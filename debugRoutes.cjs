// debugRoutes.js
const fs = require('fs')

const toursData = JSON.parse(
  fs.readFileSync('./src/data/tours.json', 'utf-8')
)

const languages = ['en', 'es', 'de']

const routes = ['/']

languages.forEach(lang => {
  routes.push(`/${lang}`)

  toursData.tours.forEach(tour => {
    routes.push(`/${lang}/tours/${tour.category}`)
  })
})

console.log("ROUTES:")
console.log(routes)