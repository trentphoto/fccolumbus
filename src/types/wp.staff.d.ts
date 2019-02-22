declare interface ProcessedStaff {
  id: number
  slug: string
  name: string
  title: string
  content: string
  phone: string
  email: string
  img: string
}

declare interface WPStaff {
  id: number
  date: Date
  date_gmt: Date
  guid: GUID
  modified: Date
  modified_gmt: Date
  slug: string
  status: string
  type: string
  link: string
  title: GUID
  content: Content
  featured_media: number
  template: string
  acf: Acf
  _links: StaffLinks
  _embedded: Embedded
}

interface Embedded {
  'wp:featuredmedia': WpFeaturedmedia[]
}

interface WpFeaturedmediaLinks {
  self: About[]
  collection: About[]
  about: About[]
  author: AuthorElement[]
  replies: AuthorElement[]
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
  image_meta: ImageMeta
}

interface ImageMeta {
  aperture: string
  credit: string
  camera: string
  caption: string
  created_timestamp: string
  copyright: string
  focal_length: string
  iso: string
  shutter_speed: string
  title: string
  orientation: string
  keywords: any[]
}

interface StaffLinks {
  self: About[]
  collection: About[]
  about: About[]
  'wp:featuredmedia': AuthorElement[]
  'wp:attachment': About[]
  curies: Cury[]
}

interface Cury {
  name: string
  href: string
  templated: boolean
}

interface Acf {
  title: string
  email: string
  phone: string
}

interface Content {
  rendered: string
  protected: boolean
}
