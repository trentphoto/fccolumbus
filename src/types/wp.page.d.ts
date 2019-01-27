declare interface ProcessedPage {
  id: number
  date: Date
  slug: string
  title: string
  content: string
  excerpt: string
  parent: number
  img: string
  link?: string
  type?: string
}

// --------------

declare interface WPPage {
  id: number
  date: string
  date_gmt: string
  guid: GUID
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: GUID
  content: Content
  excerpt: Content
  author: number
  featured_media: number
  parent: number
  comment_status: string
  ping_status: string
  template: string
  meta: any[]
  _links: Links
  _embedded: Embedded
}
