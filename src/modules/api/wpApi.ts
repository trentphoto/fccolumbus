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
  }
}

export default wpApiEndpoints
