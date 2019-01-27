import * as React from 'react'
import Helmet from 'react-helmet'
import { FooterCTA, Footer, Navbar, Section, Card, Loader } from '../../blocks'
import H1 from '../../components/layout/H1'
import axios, { AxiosResponse } from 'axios'
import { wpApiBase } from '../../config'
import { RouteComponentProps } from 'react-router'
import { wrapTitle } from '../../utils/withSEO'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchEverything } from '../../modules/utils/fetchEverything'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getURLfromID } from '../../utils/urls'

interface Props extends RouteComponentProps<MatchParams> {
  pages: ProcessedPage[]
  news: ProcessedNews[]
  events: ProcessedEvent[]
  blogs: ProcessedNews[]
  testimonials: ProcessedTestimonial[]
  fetchAll: () => any
}

interface State {
  initialResults: WPSearchResult[]
  results: ProcessedSearchResult[]
  loadingSearchApiCall: boolean
}

interface MatchParams {
  term: string
}

interface ProcessedSearchResult {
  // this is just a combination of the 3 types ProcessedPage, ProcessedNews, ProcessedEvent
  title: string
  id: number
  slug: string
  excerpt: string
  content: string
  type: string
  link: string
  img?: string
}

class Search extends React.Component<Props, State> {
  state = {
    initialResults: [],
    results: [],
    loadingSearchApiCall: true
  }

  async componentDidMount() {
    const { pages, news, events, testimonials, blogs, fetchAll } = this.props

    if (
      // if this is a new page load, and our site data hasn't been fetched yet, go ahead and fetch it
      !pages ||
      pages.length === 0 ||
      (!news || news.length === 0) ||
      (!events || events.length === 0) ||
      (!blogs || blogs.length === 0) ||
      (!testimonials || testimonials.length === 0)
    ) {
      fetchAll()
    }

    // make the initial /search WP API call based on the :term slug in the url
    const initialResults: AxiosResponse = await axios.get(
      `${wpApiBase}/search?search=${
        this.props.match.params.term
      }&subtype=page,events,blog,news&per_page=99&_embed&context=embed`
    )

    // set this data to our state so we can access it in componentDidUpdate
    this.setState({
      initialResults: initialResults.data,
      loadingSearchApiCall: false
    })
  }

  componentDidUpdate = (props: Props, state: State) => {
    const { pages, news, events, blogs } = this.props

    if (
      !pages ||
      pages.length === 0 ||
      (!news || news.length === 0) ||
      (!events || events.length === 0) ||
      (!blogs || blogs.length === 0)
    ) {
      // do nothing - we're still fetching site data
    } else {
      if (
        this.state.results.length === 0 &&
        this.state.initialResults.length !== 0
      ) {
        // if the following hasn't been run before, and the /search API call has been returned successfully from cdm
        // map over our search results, and return the actual full items from our Redux store - matched via their IDs
        const results: any = state.initialResults.map((i: WPSearchResult) => {
          if (i.subtype === 'news') {
            const match = news.filter(
              (newsItem: ProcessedNews) => newsItem.id === i.id
            )[0]
            match.link = `/connect/news/${match.slug}`
            match.type = 'News'
            return match
          }
          if (i.subtype === 'page') {
            const match = pages.filter(
              (page: ProcessedPage) => page.id === i.id
            )[0]
            match.link = getURLfromID(pages, match.id)
            match.type = 'Page'
            return match
          }
          if (i.subtype === 'events') {
            const match = events.filter(
              (event: ProcessedEvent) => event.id === i.id
            )[0]
            match.link = `/gather/events/${match.slug}`
            match.type = 'Event'
            return match
          }
          if (i.subtype === 'blog') {
            const match = blogs.filter(
              (post: ProcessedNews) => post.id === i.id
            )[0]
            match.link = `/connect/pastor-tims-blog/${match.slug}`
            match.type = "Pastor Tim's Blog"
            return match
          }
          return null
        })

        this.setState({ results })
      }
    }
  }

  private searchRef = React.createRef<HTMLInputElement>()

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (this.searchRef.current && this.searchRef.current.value)
      this.props.history.push(
        `/search/${this.searchRef.current ? this.searchRef.current.value : ''}`
      )
  }

  render() {
    return (
      <div className="page">
        <Helmet>
          <title>{wrapTitle('Search Results')}</title>
        </Helmet>
        <Navbar />

        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <H1>Search Results</H1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-md-10">
                      <input
                        type="text"
                        name="s"
                        ref={this.searchRef}
                        placeholder="Type to search..."
                        defaultValue={this.props.match.params.term}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="col-md-2">
                      <button type="submit" className="btn btn-light btn-lg">
                        <FontAwesomeIcon icon="search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {// if the search API call hasn't returned, or if our app's redux state isn't loaded yet, show the loader
                this.state.loadingSearchApiCall ||
                this.props.pages.length === 0 ? (
                  <Loader />
                ) : // if the API call returned results, show them
                this.state.results.length > 0 ? (
                  <Card.CardGrid>
                    {this.state.results.map((i: ProcessedSearchResult) => (
                      <Card.Card
                        key={i.slug}
                        title={i.title}
                        excerpt={i.type}
                        img={i.img}
                        isLink
                        link={i.link}
                      />
                    ))}
                  </Card.CardGrid>
                ) : (
                  // else, show no results found
                  <p className="lead py-5">
                    No results found. Perhaps try a different search term?
                  </p>
                )}
              </div>
            </div>
          </div>
        </Section>

        <FooterCTA />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages.data,
  news: state.news.allNews.data,
  events: state.events.allEvents.data,
  blogs: state.blogs.allPosts.data,
  testimonials: state.testimonials.allTestimonials.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAll: () => fetchEverything(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
