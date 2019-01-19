import axios from 'axios'
import { wpApiBase } from '../../config'

const wpApiEndpoints = {
  getAllPages: async () => {
    try {
      const result = await axios.get(`${wpApiBase}/pages?per_page=99&_embed`)
      return result.data as WPPage[]
    } catch (error) {
      throw error.response.data
    }
  },
  getAllNews: async () => {
    try {
      const result = await axios.get(`${wpApiBase}/news?per_page=99&_embed`)
      return result.data as WPNews[]
    } catch (error) {
      throw error.response.data
    }
  },
  getAllEvents: async () => {
    try {
      const result = await axios.get(`${wpApiBase}/events?per_page=99&_embed`)
      return result.data as WPEvent[]
    } catch (error) {
      throw error.response.data
    }
  }
}

export default wpApiEndpoints
