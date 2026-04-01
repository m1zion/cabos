const fs = require('fs')

const toursData = JSON.parse(
  fs.readFileSync('./src/data/tours.json', 'utf-8')
)

const languages = ['en', 'es', 'de']

const routes = ['/']

languages.forEach(lang => {
  routes.push(`/${lang}`)
  routes.push(`/${lang}/Tours`)
  toursData.tours.forEach(tour => {
    routes.push(`/${lang}/tours/${tour.category}`)
  })
})



console.log("=====================");
console.log(routes);
module.exports = {
  source: 'dist',
  routes,
  crawl: false,
  skipThirdPartyRequests: true,
  exclude: ['/404.html'],
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  inlineCss: false,
  concurrency: 1
}