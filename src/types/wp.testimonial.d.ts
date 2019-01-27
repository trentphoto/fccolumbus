declare interface ProcessedTestimonial {
  id: number
  title: string
  img: string
  content: string
}

// -----------------

declare interface WPTestimonial {
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
  featured_media: number
  template: string
  acf: any[]
  _links: TestimonialLinks
  _embedded?: Embedded
}

interface Embedded {
  'wp:featuredmedia': WpFeaturedmedia[]
}

interface WpFeaturedmedia {
  id: number
  date: string
  slug: string
  type: string
  link: string
  title: GUID
  author: number
  acf: any[]
  caption: GUID
  alt_text: string
  media_type: string
  media_details: MediaDetails
  source_url: string
}

interface About {
  href: string
}

interface AuthorElement {
  embeddable: boolean
  href: string
}

interface GUID {
  rendered: string
}

interface MediaDetails {
  width: number
  height: number
  file: string
  sizes: Sizes
}

interface Full {
  file: string
  width: number
  height: number
  source_url: string
}

interface TestimonialLinks {
  self: About[]
  collection: About[]
  about: About[]
  'wp:featuredmedia'?: AuthorElement[]
  'wp:attachment': About[]
  curies: Cury[]
}

interface Cury {
  name: string
  href: string
  templated: boolean
}

interface Content {
  rendered: string
  protected: boolean
}
