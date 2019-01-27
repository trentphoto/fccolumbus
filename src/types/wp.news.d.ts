declare interface ProcessedNews {
  title: string
  slug: string
  id: number
  date: string
  content: string
  excerpt: string
  img: string
  type?: string
  link?: string
}

// ------------------------ pre-processed API response below

declare interface WPNews {
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
  acf: Acf
  _links: NewsLinks
  _embedded: Embedded
}

declare interface Embedded {
  'wp:featuredmedia': Media[]
}

declare interface Media {
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
  mime_type: MIMEType
  media_details: MediaDetails
  source_url: string
  _links: WpFeaturedmediaLinks
}

declare interface WpFeaturedmediaLinks {
  self: About[]
  collection: About[]
  about: About[]
  author: AuthorElement[]
  replies: AuthorElement[]
}

declare interface About {
  href: string
}

declare interface AuthorElement {
  embeddable: boolean
  href: string
}

declare interface GUID {
  rendered: string
}

declare interface MediaDetails {
  width: number
  height: number
  file: string
  sizes: Sizes
  image_meta: ImageMeta
}

declare interface ImageMeta {
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

declare interface Sizes {
  thumbnail: Full
  medium: Full
  medium_large: Full
  large: Full
  'post-thumbnail': Full
  full: Full
}

declare interface Full {
  file: string
  width: number
  height: number
  mime_type: MIMEType
  source_url: string
}

declare enum MIMEType {
  ImageJPEG = 'image/jpeg'
}

declare interface NewsLinks {
  self: About[]
  collection: About[]
  about: About[]
  'wp:featuredmedia': AuthorElement[]
  'wp:attachment': About[]
  curies: Cury[]
}

declare interface Cury {
  name: string
  href: string
  templated: boolean
}

declare interface Acf {
  excerpt: string
}

declare interface Content {
  rendered: string
  protected: boolean
}
