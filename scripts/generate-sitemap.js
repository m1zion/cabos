import fs from 'fs'
const baseUrl = 'https://loscabosmoments.com'
const languages = ['en', 'es', 'de']
const routes = [
  '',
    '/tours/sunsetcruises',
    '/tours/waterexperiences',
    '/tours/boatyatch',
    '/tours/whalewatching',
    '/tours/camelhorse',
    '/tours/atvrazors',
    '/tours/daytrip',
    '/tourdetail/sunsetpartyboat',
    '/tourdetail/sunsetdinnerpirate',
    '/tourdetail/sunsetjazz',
    '/tourdetail/romanticsunset',
    '/tourdetail/snorkeladventure',
    '/tourdetail/snorkelpirate',
    '/tourdetail/scubadiving',
    '/tourdetail/surflessons',
    '/tourdetail/jetski',
    '/tourdetail/parasailing',
    '/tourdetail/archofcabo',
    '/tourdetail/privateboat',
    '/tourdetail/fishing',
    '/tourdetail/whalewatching',
    '/tourdetail/piratewhalewatching',
    '/tourdetail/whalewatchingsunset',
    '/tourdetail/dunesCamel',
    '/tourdetail/beachhorse',
    '/tourdetail/dunesatv',
    '/tourdetail/dunesutv',
    '/tourdetail/balandrabeach',
    '/tourdetail/espiritusanto',
    '/tourdetail/whalesharkpaz',
    '/tourdetail/snorkelcabopulmo',
    '/tourdetail/santiago',
    '/tourdetail/todossantos',
    '/experiencedetail/tequilamezcaltasting',
    '/experiencedetail/pizzamakingexperience',
    '/experiencedetail/salsa',
    '/experiencedetail/decorations',
    '/experiencedetail/butler',
    '/experiencedetail/fireworks'
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