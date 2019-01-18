// Generated by https://quicktype.io

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

declare interface WPPost {
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
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any[]
  categories: number[]
  tags: number[]
  _links: Links
}

declare interface Links {
  self: About[]
  collection: About[]
  about: About[]
  author: Author[]
  replies: Author[]
  'version-history': About[]
  'wp:featuredmedia': Author[]
  'wp:attachment': About[]
  'wp:term': WpTerm[]
  curies: Cury[]
}

declare interface About {
  href: string
}

declare interface Author {
  embeddable: boolean
  href: string
}

declare interface Cury {
  name: string
  href: string
  templated: boolean
}

declare interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

declare interface Content {
  rendered: string
  protected: boolean
}

declare interface GUID {
  rendered: string
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
  alt_text: string
  source_url: string
}

// more

declare interface MenuItem {
  title: string
  slug: string
  subpages?: Subpage[]
}
declare interface Subpage {
  title: string
  slug: string
}

declare interface StaffMember {
  name: string
  title: string
  email: string
  phone: string
  img: string
  bio: string
}
