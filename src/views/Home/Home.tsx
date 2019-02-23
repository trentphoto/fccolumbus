import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

import H2center from '../../components/layout/H2center'
import H3 from '../../components/layout/H3'

import {
  Button,
  Card,
  BannerCard,
  EventCard,
  Footer,
  FooterCTA,
  Section,
  TextBox
} from '../../blocks'

import HomeHero from './HomeHero'
import Gallery from './Gallery'

import img1 from '../../img/fcc-80.jpg'
import img2 from '../../img/fcc-44.jpg'
import img3 from '../../img/fcc-63.jpg'
import imgT from '../../img/fcc-89.jpg'

import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchEverything } from '../../modules/utils/fetchEverything'
import withSEO from '../../utils/withSEO'

interface Props {
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
  blogs: ReduxState['blogs']['allPosts']
  testimonials: ReduxState['testimonials']['allTestimonials']
  vols: ReduxState['vols']['allVols']
  fetchAll: () => any
}

class Home extends React.Component<Props> {
  public componentDidMount() {
    const { pages, news, events, testimonials, blogs, fetchAll } = this.props
    if (
      !pages ||
      pages.data.length === 0 ||
      (!news || news.data.length === 0) ||
      (!events || events.data.length === 0) ||
      (!blogs || blogs.data.length === 0) ||
      (!testimonials || testimonials.data.length === 0)
    ) {
      fetchAll()
    }
  }
  public render() {
    const { news, events, testimonials, vols } = this.props
    const randT =
      testimonials.data[Math.floor(Math.random() * testimonials.data.length)]

    return (
      <div className="home page">
        <HomeHero />

        <Section bg="white">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <BannerCard
                  img={img1}
                  title="Connect"
                  subtitle="Meet Our Community"
                  link="/connect"
                />
              </div>
              <div className="col-md-3">
                <BannerCard
                  img={img2}
                  title="Gather"
                  subtitle="Join us for an event"
                  link="/gather"
                />
              </div>
              <div className="col-md-3">
                <BannerCard
                  img={img3}
                  title="Grow"
                  subtitle="In faith and relationships"
                  link="/grow"
                />
              </div>
              <div className="col-md-3">
                <BannerCard
                  img={img1}
                  title="Lead"
                  subtitle="Join our mission"
                  link="/lead"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section bg="lightgray">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={img2}
                  alt="First Church Columbus UCC"
                  className="img-fluid TextBox-img"
                />
              </div>
              <div className="col-md-6">
                <TextBox>
                  <H3>About First Church</H3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt itaque alias quia, asperiores veniam exercitationem
                    doloribus. Earum, voluptates! Maiores, facere!
                  </p>
                </TextBox>
              </div>
            </div>
          </div>
        </Section>

        <Section bg="lightgray">
          <div className="container">
            <div className="row">
              <div className="col">
                <H2center>Upcoming Events</H2center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {events.data.map(i => (
                  <EventCard
                    key={i.id}
                    date={new Date(i.date)}
                    time={i.time}
                    description={i.excerpt}
                    title={i.title}
                    slug={i.slug}
                  />
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <Button isLink to="/gather/events">
                  View All
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section padding="10rem 0" bgImg={imgT} className="Testimonials">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                {randT && randT.img && (
                  <img
                    src={randT.img}
                    alt="First Church Stories"
                    className="img-fluid rounded rounded-circle"
                  />
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: randT ? randT.content : ''
                  }}
                  className="text"
                />
                <p
                  dangerouslySetInnerHTML={{ __html: randT ? randT.title : '' }}
                />
              </div>
            </div>
          </div>
        </Section>

        <Gallery />

        <Section bg="white">
          <div className="container">
            <div className="row">
              <div className="col">
                <H2center>Latest News</H2center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {news &&
                    news.data
                      .filter((i, ind) => ind < 3)
                      .map((i: ProcessedNews) => (
                        <Card.Card
                          key={i.title}
                          isLink
                          link={`/connect/news/${i.slug}`}
                          title={i.title}
                          excerpt={i.excerpt}
                          img={i.img}
                        />
                      ))}
                </Card.CardGrid>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <Button isLink to="/connect/news">
                  View More News
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section bg="red">
          <div className="container">
            <div className="row">
              <div className="col">
                <H2center>Latest Vol Opportunities</H2center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {vols &&
                    vols.data.map((i: ProcessedVol) => (
                      <Card.Card
                        key={i.title}
                        isLink
                        link={`/serve/news/${i.slug}`}
                        title={i.title}
                        excerpt={i.excerpt}
                        img={i.img}
                      />
                    ))}
                </Card.CardGrid>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <Button isLink to="/connect/news">
                  View More News
                </Button>
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
  pages: state.pages.allPages,
  news: state.news.allNews,
  events: state.events.allEvents,
  blogs: state.blogs.allPosts,
  vols: state.vols.allVols,
  testimonials: state.testimonials.allTestimonials
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAll: () => fetchEverything(dispatch)
})

const connectWrapper = connect(
  mapStateToProps,
  MapDispatchToProps
)(Home)

export default withSEO(connectWrapper, { title: 'Home' })
