import { defineStore } from 'pinia'
import request from '@/config/axiosInstance'

export const useQuoteStore = defineStore('quote', {
  state: () => {
    return {
      quotes: []
    }
  },
  actions: {
    updateQuotes(quote) {
      this.quotes = this.quotes.map((currentQuote) => {
        if (currentQuote.id === quote.id) {
          return quote
        }
        return currentQuote
      })
    },
    async fetchQuotes() {
      const { data } = await request.get('/api/quotes')
      this.quotes = data
    }
  }
})
