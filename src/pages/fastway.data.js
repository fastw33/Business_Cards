export const fastwayLinks = {
  website: 'https://www.fastwaysas.com',
  clients: 'https://portalclientes.fastwaysas.com/ingreso',
  academy: 'https://academy.fastwaysas.com/',
}

export const fastwayPeople = [
  {
    id: 'gina',
    name: 'Gina Sánchez',
    fullName: 'Gina Sánchez',
    role: 'CEO · Gerente General',
    image: '/fastway/gina.webp',
    phone: '+57 318 212 3378',
    email: 'gsanchez@fastwaysas.com',
    service: 'los servicios de Fastway',
    featured: true,
  },
  {
    id: 'karen',
    name: 'Karen González',
    fullName: 'Karen Julieth Gonzalez Valencia',
    role: 'Analista de agenciamiento de carga',
    image: '/fastway/karen.webp',
    phone: '+57 314 300 2760',
    email: 'Insales2@fastwaysas.com',
    service: 'logística y comercio exterior',
  },
  {
    id: 'felipe',
    name: 'Felipe Barrera',
    fullName: 'Andres Felipe Barrera Rodriguez',
    role: 'Líder de Proyectos',
    image: '/AndresBarrera.webp',
    phone: '+57 302 858 3784',
    email: 'proyectos@fastwaysas.com',
    service: 'proyectos y logística circular',
  },
  {
    id: 'mauricio',
    name: 'Mauricio Morales',
    fullName: 'Mauricio Morales',
    role: 'Analista de agenciamiento de carga',
    image: '/fastway/mauricio.jpg',
    photoScale: 1.75,
    phone: '+57 304 308 9159',
    email: 'comunicaciones@fastwaysas.com',
    service: 'logística y comercio exterior',
  },
]

export function fastwayWhatsapp(person) {
  const message = `Hola ${person.name.split(' ')[0]}, escaneé la tarjeta digital de Fastway y me gustaría recibir información sobre ${person.service}.`
  return `https://wa.me/${person.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}
