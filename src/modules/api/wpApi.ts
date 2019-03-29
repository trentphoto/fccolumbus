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
  getAllTestimonials: async () => {
    try {
      const result = await axios.get(
        `${wpApiBase}/testimonial?per_page=99&_embed`
      )
      return result.data as WPTestimonial[]
    } catch (error) {
      throw error.response.data
    }
  },
  getAllEvents: async () => {
    try {
      const result = await axios.get(
        `${wpApiBase}/events?per_page=99&categories=2&_embed`
      )
      return result.data as WPEvent[]
    } catch (error) {
      throw error.response.data
    }
  },
  getAllPastorsBlog: async () => {
    try {
      const result = await axios.get(`${wpApiBase}/blog?per_page=99&_embed`)
      return result.data as WPNews[]
    } catch (error) {
      throw error.response.data
    }
  },
  getAllVols: async () => {
    try {
      const result = await axios.get(`${wpApiBase}/vol?per_page=99&_embed`)
      return result.data as WPEvent[]
    } catch (error) {
      throw error.response.data
    }
  },
  getAllStaff: async () => {
    try {
      const result = await axios.get(`${wpApiBase}/staff?per_page=99&_embed`)
      return result.data as WPStaff[]
    } catch (error) {
      throw error.response.data
    }
  }
}

export default wpApiEndpoints
