// defaults
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About, Home, NotFound } from './views'
import { ThemeProvider, createGlobalStyle } from './styled-components'
import Lvl2Page from './views/Lvl2Page/Lvl2Page'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faBars,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faChevronRight,
  faChevronLeft,
  faHome,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faSearch,
  faBars,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faChevronRight,
  faChevronLeft,
  faHome,
  faTimes
)

const theme = {
  red: '#8e1212',
  gray: '#cccccc',
  lightgray: '#f0f0f0',
  redDark: '#7a1010',
  white: '#ffffff',
  dark: '#202020',
  timing: {
    duration: {
      fast: '300ms',
      slow: '500ms'
    },
    curve: 'cubic-bezier(.05, .69, .14, 1)'
  }
}

const GlobalStyles = createGlobalStyle`
  html, body {
    width: 100%;
    margin: 0;
    font-family: 'Times New Roman', serif !important;
  }
  a:hover {
    text-decoration: none!important;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyles />
      <div className="page-wrapper">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={Lvl2Page} />
          <Route path="/connect" component={Lvl2Page} />
          <Route path="/gather" component={Lvl2Page} />
          <Route path="/grow" component={Lvl2Page} />
          <Route path="/lead" component={Lvl2Page} />
          {/* <Route exact={true} path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={Single} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </ThemeProvider>
)

export default App
