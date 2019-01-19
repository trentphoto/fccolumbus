import React from 'react'
import Helmet from 'react-helmet'

import BannerCard from '../../components/BannerCard'
import TextBox from '../../components/layout/TextBox'
import Footer from '../../components/layout/Footer'
import H2center from '../../components/layout/H2center'
import H3 from '../../components/layout/H3'
import TestimonialSection from '../../components/layout/TestimonialSection'
import HomeHero from './HomeHero'

import EventCard from '../../blocks/EventCard'

import img2 from '../../img/fcc-44.jpg'
import img1 from '../../img/fcc-80.jpg'
import img3 from '../../img/fcc-63.jpg'

import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Section from '../../components/layout/Section'
import Gallery from './Gallery'
import { Card } from '../../blocks'
import FooterCTA from '../../blocks/FooterCTA'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import { fetchAllNews } from '../../modules/ducks/news/operations'
import Button from '../../components/Button'
import { fetchAllEvents } from '../../modules/ducks/events/operations'

interface Props {
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
  fetchPages: () => Promise<void>
  fetchNews: () => Promise<void>
  fetchEvents: () => Promise<void>
}

class Home extends React.Component<Props> {
  public componentDidMount() {
    const {
      pages,
      news,
      events,
      fetchPages,
      fetchNews,
      fetchEvents
    } = this.props
    if (!pages || pages.data.length === 0) {
      fetchPages()
    }
    if (!news || news.data.length === 0) {
      fetchNews()
    }
    if (!events || events.data.length === 0) {
      fetchEvents()
    }
  }
  public render() {
    const { news, events } = this.props
    return (
      <div className="home page">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <HomeHero />

        <Section bg="white">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <BannerCard
                  img={img1}
                  title="Connect"
                  subtitle="Lorem ipsum"
                  link="/connect"
                />
              </div>
              <div className="col-md-3">
                <BannerCard
                  img={img2}
                  title="Gather"
                  subtitle="Lorem ipsum"
                  link="/gather"
                />
              </div>
              <div className="col-md-3">
                <BannerCard
                  img={img3}
                  title="Grow"
                  subtitle="Lorem ipsum"
                  link="/grow"
                />
              </div>
              <div className="col-md-3">
                <BannerCard
                  img={img1}
                  title="Lead"
                  subtitle="Lorem ipsum"
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
                  className="img-fluid"
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

        <TestimonialSection text="THis is an example testimonial." />

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

        <FooterCTA />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages,
  news: state.news.allNews,
  events: state.events.allEvents
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPages: () => fetchAllPages()(dispatch),
  fetchNews: () => fetchAllNews()(dispatch),
  fetchEvents: () => fetchAllEvents()(dispatch)
})

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Home)
