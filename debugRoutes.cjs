// debugRoutes.js
const fs = require('fs')

const toursData = JSON.parse(fs.readFileSync('./src/data/tours.json', 'utf-8'))
const toursCategoriesData = JSON.parse(fs.readFileSync('./src/data/toursCategories.json', 'utf-8'))
const experiencesData = JSON.parse(fs.readFileSync('./src/data/experiences.json', 'utf-8'))

const languages = ['en', 'es', 'de']

const routes = ['/']

languages.forEach(lang => {
  routes.push(`/${lang}`)
  /*toursCategoriesData.tours.forEach(tour => {
    routes.push(`/${lang}/tours/${tour.category}`)
  })
  toursData.tours.forEach(tour => {
    routes.push(`/${lang}/tourDetail/${tour.id}`)
  })*/
   experiencesData.experiences.forEach(experience => {
    routes.push(`/${lang}/experienceDetail/${experience.id}`)
  })
})

console.log("ROUTES:")
console.log(routes)