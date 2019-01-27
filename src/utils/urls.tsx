export const getURLfromID = (pages: ProcessedPage[], id: number): string => {
  const page = pages.filter(i => i.id === id)[0]

  if (page.parent === 0) return `/${page.slug}`

  // if the page is a lvl 3 page

  const parentPage = pages.filter(i => i.id === page.parent)[0]

  if (parentPage.parent === 0) return `/${parentPage.slug}/${page.slug}`

  // if the page is a lvl 4 page

  const parentParentPage = pages.filter(i => i.id === parentPage.parent)[0]

  return `/${parentParentPage.slug}/${parentPage.slug}/${page.slug}`
}
