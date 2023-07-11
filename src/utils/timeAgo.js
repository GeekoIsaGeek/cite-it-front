import en from '@/assets/locales/en'
import ka from '@/assets/locales/ka'

export default (timestamp, lang = 'en') => {
  const currentTime = new Date()
  const targetTime = new Date(timestamp)
  const elapsed = currentTime - targetTime

  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const month = 30 * day
  const year = 365 * day

  const strings = lang === 'en' ? en.time : ka.time
  let returnString = ''

  if (elapsed < minute) {
    return strings.justNow
  } else if (elapsed < hour) {
    const minutes = Math.floor(elapsed / minute)
    returnString = `${minutes} ${strings[minutes === 1 ? 'minute' : 'minutes']}`
  } else if (elapsed < day) {
    const hours = Math.floor(elapsed / hour)
    returnString = `${hours} ${strings[hours === 1 ? 'hour' : 'hours']}`
  } else if (elapsed < month) {
    const days = Math.floor(elapsed / day)
    returnString = `${days} ${strings[days === 1 ? 'day' : 'days']}`
  } else if (elapsed < year) {
    const months = Math.floor(elapsed / month)
    returnString = `${months} ${strings[months === 1 ? 'month' : 'months']}`
  } else {
    const years = Math.floor(elapsed / year)
    returnString = `${years} ${strings[years === 1 ? 'year' : 'years']}`
  }
  return `${returnString} ${strings['ago']}`
}
