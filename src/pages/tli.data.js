// Source: Web-Transport/web-transport/src/lib/contacts.ts.
// TLI contacts are deliberately independent of the other company directories.
export const tliPeople = [
  {
    id: 'juan',
    name: 'Juan Cristancho',
    role: 'Sales',
    initials: 'JC',
    phone: '+1 (954) 494-7790',
    number: '19544947790',
    emails: ['sales@btgcompany.net'],
  },
  {
    id: 'liliana',
    name: 'Liliana Puerta',
    role: 'Office Manager',
    initials: 'LP',
    phone: '+1 (786) 486-0492',
    number: '17864860492',
    emails: ['spfway@tlimiami.com', 'spfway@bellsouth.net'],
  },
  {
    id: 'jessica',
    name: 'Jessica Cristancho',
    role: 'Traffic Manager',
    initials: 'JC',
    phone: '+1 (954) 439-5171',
    number: '19544395171',
    emails: ['operations@btgcompany.net'],
  },
  {
    id: 'giancarlo',
    name: 'Giancarlo Avendano',
    role: 'Operations Manager',
    initials: 'GA',
    phone: '+1 (786) 661-0046',
    number: '17866610046',
    emails: ['gc@tlimiami.com'],
  },
]

export const tliLinks = {
  website: 'https://tlimiami.com',
  map: 'https://www.google.com/maps/search/?api=1&query=10049%20NW%2089th%20Ave%20unit%204%20Medley%2C%20FL%2033178',
}

export function tliWhatsapp(person) {
  const message = `Hello ${person.name.split(' ')[0]}, I scanned the TLI Miami digital card and would like assistance with a shipment.`
  return `https://wa.me/${person.number}?text=${encodeURIComponent(message)}`
}
