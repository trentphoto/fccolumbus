// defaults
import * as React from 'react'
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { Home, NotFound, Lvl2Page, Search } from './views'
import { ThemeProvider, createGlobalStyle } from './styled-components'
import { SearchTakeover, MenuTakeover } from './blocks'

import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { pageIntro, pageOutro } from './utils/animations'

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
  faTimes,
  faCalendar,
  faClock
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
  faTimes,
  faCalendar,
  faClock
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
  },
  zindex: {
    navbar: 300,
    slideOut: 400,
    searchTakeover: 500,
    menuTakeover: 600
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
  @keyframes loader {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    } 
  }
`

interface Props extends RouteComponentProps {
  menuOpen: boolean
  searchOpen: boolean
}

const App = ({ menuOpen, searchOpen, location }: Props) => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyles />
      {menuOpen && <MenuTakeover />}
      {searchOpen && <SearchTakeover />}
      <div className="transition-wrapper">
        <TransitionGroup>
          <CSSTransition
            timeout={0}
            classNames="fade"
            appear={true}
            key={location.pathname}
            onEnter={node => pageIntro(node, location.pathname)}
            onExit={(node: HTMLElement) => pageOutro(node)}
          >
            <Switch location={location}>
              <Route exact={true} path="/" component={Home} />
              <Route path="/about" component={Lvl2Page} />
              <Route path="/connect" component={Lvl2Page} />
              <Route path="/gather" component={Lvl2Page} />
              <Route path="/grow" component={Lvl2Page} />
              <Route path="/serve" component={Lvl2Page} />
              <Route path="/lead" component={Lvl2Page} />
              <Route path="/give" component={Lvl2Page} />
              <Route path="/search/:term" component={Search} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  </ThemeProvider>
)

const mapStateToProps = (state: any) => ({
  menuOpen: state.layout.menuOpen,
  searchOpen: state.layout.searchOpen
})

export default withRouter(connect(mapStateToProps)(App))
