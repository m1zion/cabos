import fs from 'fs'
const baseUrl = 'https://loscabosmoments.com'
const languages = ['en', 'es', 'de']
const routes = [
  '',
    '/tours/sunsetCruises',
    '/tours/waterExperiences',
    '/tours/boatYatch',
    '/tours/whaleWatching',
    '/tours/camelHorse',
    '/tours/atvRazors',
    '/tours/dayTrip',
    '/tourDetail/sunsetPartyboat',
    '/tourDetail/sunsetDinnerPirate',
    '/tourDetail/sunsetJazz',
    '/tourDetail/romanticSunset',
    '/tourDetail/snorkelAdventure',
    '/tourDetail/snorkelPirate',
    '/tourDetail/scubaDiving',
    '/tourDetail/surfLessons',
    '/tourDetail/jetSki',
    '/tourDetail/parasailing',
    '/tourDetail/archOfCabo',
    '/tourDetail/privateBoat',
    '/tourDetail/fishing',
    '/tourDetail/whaleWatching',
    '/tourDetail/pirateWhaleWatching',
    '/tourDetail/whaleWatchingSunset',
    '/tourDetail/dunesCamel',
    '/tourDetail/beachHorse',
    '/tourDetail/dunesATV',
    '/tourDetail/dunesUTV',
    '/tourDetail/balandraBeach',
    '/tourDetail/espirituSanto',
    '/tourDetail/whaleSharkPaz',
    '/tourDetail/snorkelCaboPulmo',
    '/tourDetail/santiago',
    '/tourDetail/todosSantos',
    '/experienceDetail/tequilaMezcalTasting',
    '/experienceDetail/pizzaMakingExperience',
    '/experienceDetail/salsa',
    '/experienceDetail/decorations',
    '/experienceDetail/butler',
    '/experienceDetail/fireworks'
]

const generateUrls = () => {
  let urls = ''
  routes.forEach(route => {
    languages.forEach(lang => {
      urls += `
  <url>
    <loc>${baseUrl}/${lang}${route}</loc>
    <changefreq>${route.includes('Detail') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route === '' ? '0.9' : '0.8'}</priority>
  </url>`
    })
  })
  return urls
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generateUrls()}
</urlset>`
fs.writeFileSync('./public/sitemap.xml', sitemap)