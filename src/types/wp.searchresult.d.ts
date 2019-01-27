declare interface WPSearchResult {
  id: number
  title: string
  url: string
  type: string
  subtype: string
  _links: SearchLinks
}

declare interface SearchLinks {
  self: Self[]
  about: About[]
  collection: About[]
}

declare interface About {
  href: string
}

declare interface Self {
  embeddable: boolean
  href: string
}
