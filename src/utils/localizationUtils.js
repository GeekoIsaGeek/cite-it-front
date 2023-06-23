import bilingualGenres from '@/stores/genres'

export const getLocalizedGenres = (givenGenres, locale) => {
  const localizedGenres = bilingualGenres[locale]
  return givenGenres.map((genre, index) => Object.values(localizedGenres)[index])
}
