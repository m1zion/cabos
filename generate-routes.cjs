const fs = require('fs')

const toursData = JSON.parse(fs.readFileSync('./src/data/tours.json', 'utf-8'))
const toursCategoriesData = JSON.parse(fs.readFileSync('./src/data/toursCategories.json', 'utf-8'))
const experiencesData = JSON.parse(fs.readFileSync('./src/data/experiences.json', 'utf-8'))
const languages = ['en', 'es', 'de']
const routes = ['/']

languages.forEach(lang => {
  routes.push(`/${lang}`)
  toursCategoriesData.tours.forEach(tour => {
    routes.push(`/${lang}/tours/${tour.category}`)
  })
  toursData.tours.forEach(tour => {
    routes.push(`/${lang}/tourdetail/${tour.id}`)
  })
  experiencesData.experiences.forEach(experience => {
    routes.push(`/${lang}/experiencedetail/${experience.id}`)
  })
})

// Read package.json, inject routes, write it back
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
pkg.reactSnap = {
  source: 'build',
  destination: 'build',
  crawl: false,
  skipThirdPartyRequests: true,
  inlineCss: false,
  concurrency: 1,
  routes,        // tells react-snap which URLs exist
  include: routes  // ✅ tells react-snap which ones to actually render
}
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2))
//console.log("✅ Routes written to package.json reactSnap.routes")