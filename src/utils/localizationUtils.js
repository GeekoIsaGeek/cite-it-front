import bilingualGenres from '@/stores/genres'

export const getLocalizedGenres = (givenGenres, locale) => {
  const localizedGenres = bilingualGenres[locale]
  return givenGenres.map((genre) => {
    const indexOfGenre = Object.values(bilingualGenres['en']).indexOf(genre)
    return Object.values(localizedGenres)[indexOfGenre]
  })
}
