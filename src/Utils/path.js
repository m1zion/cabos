/*
Este helper sirve para definir la base de las imagenes ya que en github pages es necesario incluir una carpeta /cabos y en netlify no 
"/assets/images/tours/sunsetPartyboat/1.jpg"  		works in localhost, netlify
"/cabos/assets/images/tours/sunsetPartyboat/1.jpg"	works in localhost, github
"../assets/images/tours/sunsetPartyboat/portrait.jpg",  works in localhost, netlify
'../../assets/icons/bed_color.svg';                     QUiza este fuincione siempre
esto sumado a la definicion de la base en vite.config.js hace que funcione en todos los ambientes
*/
export function withBase(path) {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '');
}