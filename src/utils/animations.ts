import $ from 'jquery'
// import { TweenMax, Elastic } from 'gsap'

// const ease = Elastic.easeOut.config(0.25, 1)

export const pageOutro = (node: HTMLElement) => {
  // first scroll to the top of the page if we're scrolled more than 100px
  const doc = document.documentElement
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
  if (top > 100) {
    $('html').animate(
      {
        scrollTop: 0
      },
      350
    )
  }

  // fade the page out
  // TweenMax.fromTo(node, 0.5, { opacity: 1 }, { opacity: 0, ease })
}

export const pageIntro = (node: HTMLElement, pathname: string) => {
  switch (pathname) {
    case '/':
      homePageIntro(node)
    default:
      homePageIntro(node)
  }
}

const homePageIntro = (node: HTMLElement) => {
  // TweenMax.fromTo(node, 0.5, { opacity: 0 }, { opacity: 1, ease })
}
