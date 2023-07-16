import { defineStore } from 'pinia'
import request from '@/config/axiosInstance'
import { ref } from 'vue'

export const useQuoteStore = defineStore('quote', () => {
  const quotes = ref([])

  const fetchQuotes = async () => {
    const { data } = await request.get('/api/quotes')
    quotes.value = data
  }
  const addNewQuote = (quote) => {
    quotes.value = [quote, ...quotes.value]
  }
  const removeQuote = (quoteId) => {
    quotes.value = quotes.value.filter((quote) => quote.id !== quoteId)
  }
  const getQuote = (quoteId) => {
    return quotes.value.find((quote) => quote.id === quoteId)
  }
  const updateQuotes = (quote) => {
    quotes.value = quotes.value.map((currentQuote) => {
      if (currentQuote.id === quote.id) {
        return quote
      }
      return currentQuote
    })
  }

  return { quotes, fetchQuotes, addNewQuote, removeQuote, updateQuotes, getQuote }
})
