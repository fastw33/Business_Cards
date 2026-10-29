// Add PDFs to this folder; Vite discovers them in development and each build.
const files = import.meta.glob('../assets/fastway-brochures/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
})
const covers = import.meta.glob(
  '../assets/fastway-brochures/*.{webp,png,jpg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const details = {
  'catalogo-fastway': {
    title: 'Catálogo Fastway',
    info: 'PDF · 7 páginas · 3,7 MB',
  },
}

export const fastwayBrochures = Object.entries(files)
  .map(([path, url]) => {
    const filename = path.split('/').pop()
    const id = filename.replace(/\.pdf$/i, '')
    const cover = Object.entries(covers).find(([coverPath]) =>
      coverPath.replace(/\.(webp|png|jpg)$/i, '').endsWith(`/${id}`)
    )?.[1]
    return {
      id,
      url,
      filename,
      cover,
      title: details[id]?.title || id.replace(/[-_]+/g, ' '),
      info: details[id]?.info || 'Documento PDF',
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title, 'es'))
