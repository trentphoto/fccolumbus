/* eslint-disable */

// express requirements
import path from 'path'
import fs from 'fs'

// React requirements
import React from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { Frontload, frontloadServerRender } from 'react-frontload'
import Loadable from 'react-loadable'

// our StorageEvent, entrypoint, and manifest
import createStore from '../dist/modules/store'
import App from '../dist/App'
import manifest from '../build/asset-manifest.json'

// styled-components stuff
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import { fetchAllPages } from '../dist/modules/ducks/pages/operations'
import { fetchAllPosts } from '../dist/modules/ducks/blog/operations'
import { fetchAllEvents } from '../dist/modules/ducks/events/operations'
import { fetchAllNews } from '../dist/modules/ducks/news/operations'
import { fetchAllTestimonials } from '../dist/modules/ducks/testimonials/operations'
import { fetchAllStaff } from '../dist/modules/ducks/staff/operations'
import { fetchAllVols } from '../dist/modules/ducks/vols/operations'

// loader
export default (req, res) => {
  /*
        a simple helper function to prepare the html markup. this loads:
        - page title
        - SEO meta tags
        - preloaded state (for Redux) depending on the current route
        - code-split script tags depending on the current route
    */
  const injectHTML = (
    data,
    { html, title, meta, body, scripts, styles, state }
  ) => {
    data = data.replace('<html>', `<html ${html}>`)
    data = data.replace(/<title>.*?<\/title>/g, title)
    data = data.replace('</head>', `${meta}${styles}</head>`)
    data = data.replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
    )
    data = data.replace('</body>', scripts.join('') + '</body>')

    return data
  }

  // load in our html file from our build
  fs.readFile(
    path.resolve(__dirname, '../build/index.html'),
    'utf8',
    async (err, htmlData) => {
      //    if there's an error
      if (err) {
        console.error('read error', err)
        return res.state(404).end()
      }

      // create a store (with a memory history) from our current url
      const { store } = createStore(req.url)

      // async redux actions go here
      const pages = await fetchAllPages()(store.dispatch) // call this function which returns the array of processedPages
      const posts = await fetchAllPosts()(store.dispatch)
      const events = await fetchAllEvents()(store.dispatch)
      const news = await fetchAllNews()(store.dispatch)
      const testimonials = await fetchAllTestimonials()(store.dispatch)
      const staff = await fetchAllStaff()(store.dispatch)
      const vols = await fetchAllVols()(store.dispatch)

      // store.dispatch(fetchAllPagesSuccess(pages)) // this is passed into each function above, which calls the Success function anyway - so we don't need this

      const context = {}
      const modules = []

      // styled-components
      const sheet = new ServerStyleSheet()

      /*
        Here's the core functionality of this file. we do the following in specific order:
        1. Load the <App /> Component
        2. Inside of the Frontload HOC    
        3. inside of a redux <StaticRouter> (since we're on the server), given a location and a context to write to
        4. inside of the store provider
        5. inside of the React Loadable HOC to make sure we have all the right scripts depending on page
        6. render it all
        7. make sure that when rendering Frontload knows to get all the appropriate preloaded requests

        in English, we basically need to know what page we're dealing with, and then load all the appropriate scripts and
        data for that page. we take all that information and compute the appropriate state to send to the user. this is
        then loaded into the correct components and sent as a Promise to be handled below.
        */
      frontloadServerRender(() =>
        // return renderToString
        renderToString(
          <Loadable.Capture report={m => modules.push(m)}>
            <StyleSheetManager sheet={sheet.instance}>
              <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                  <Frontload isServer={true}>
                    <App />
                  </Frontload>
                </StaticRouter>
              </Provider>
            </StyleSheetManager>
          </Loadable.Capture>
        )
      ).then(routeMarkup => {
        if (context.url) {
          // if context has a url property, then we need to handle a rediraction in redux router
          res.writeHead(302, {
            Location: context.url
          })

          res.end()
        } else {
          // otherwise, carry on...

          // let's give ourselves a function to load all our page-specific JS assets for code splitting
          const extractAssets = (assets, chunks) =>
            Object.keys(assets)
              .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
              .map(k => assets[k])

          // let's format those assets into pretty <script> tags
          const extraChunks = extractAssets(manifest, modules).map(
            c =>
              `<script type="text/javascript" src="/${c.replace(
                /^\//,
                ''
              )}"></script>`
          )

          // we need to tell helmet to compute the right meta getAllJSDocTagsOfKind, title, and such
          const helmet = Helmet.renderStatic()

          // note: disable if you desire
          // let's output the title, just to see SSR is working as intended
          // console.log('THE TITLE', helmet.title.toString())

          // this must be called after the component is rendered above
          const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();

          // pass all this into our html formatting function above - injectHTML()
          const html = injectHTML(htmlData, {
            html: helmet.htmlAttributes.toString(),
            title: helmet.title.toString(),
            meta: helmet.meta.toString(),
            body: routeMarkup,
            scripts: extraChunks,
            styles: styleTags,
            state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
          })

          // we have all the final html, now send to the user!
          res.send(html)
        }
      })
    }
  )
}
