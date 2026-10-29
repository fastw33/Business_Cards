const files = import.meta.glob('../assets/tli-brochures/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
})
const covers = import.meta.glob('../assets/tli-brochures/*.{webp,png,jpg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const tliBrochures = Object.entries(files).map(([path, url]) => {
  const filename = path.split('/').pop()
  const id = filename.replace(/\.pdf$/i, '')
  return {
    id,
    url,
    filename,
    title: id.replace(/[-_]+/g, ' '),
    cover: Object.entries(covers).find(([coverPath]) =>
      coverPath.replace(/\.(webp|png|jpg)$/i, '').endsWith(`/${id}`)
    )?.[1],
  }
}).sort((a, b) => a.title.localeCompare(b.title, 'en'))
