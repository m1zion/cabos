import fs from 'fs'
const toursData = JSON.parse(
  fs.readFileSync('./src/data/tours.json', 'utf-8')
)

const languages = ['en', 'es', 'de']

const routes = []

languages.forEach(lang => {
  routes.push(`/${lang}`)

  toursData.tours.forEach(tour => {
    routes.push(`/${lang}/Tours/${tour.category}`)
  })
})
// Read package.json
const packageJson = JSON.parse(
  fs.readFileSync('./package.json', 'utf-8')
)
// Inject routes
packageJson.reactSnap = {
  ...packageJson.reactSnap,
  routes
}
// Write back
fs.writeFileSync(
  './package.json',
  JSON.stringify(packageJson, null, 2)
)

console.log('Routes injected into package.json')