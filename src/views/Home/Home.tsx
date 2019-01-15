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
import PostCard from '../../blocks/PostCard'
import FooterCTA from '../../blocks/FooterCTA'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchAllPages } from '../../modules/ducks/pages/operations'

interface Props {
  pages: ReduxState['pages']['allPages']
  fetchPages: () => Promise<void>
}

class Home extends React.Component<Props> {
  public componentDidMount() {
    const { pages, fetchPages } = this.props
    if (!pages || pages.data.length === 0) {
      fetchPages()
    }
  }
  public render() {
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
                <EventCard
                  date={new Date('jan 21 2019')}
                  time="November 21st, 7pm"
                  description="This is an event description."
                  title="Event title here."
                />
                <EventCard
                  date={new Date('nov 21 2019')}
                  time="November 21st, 7pm"
                  description="This is an event description."
                  title="Event title here. This one has a long title"
                />
              </div>
            </div>
          </div>
        </Section>

        <TestimonialSection text="THis is an example testimonial." />

        <Gallery />

        <Section bg="white">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <PostCard
                  title="A sample blog post"
                  excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, nemo eum? Pariatur natus amet ullam id voluptate harum officiis qui."
                  img={img1}
                />
              </div>
              <div className="col-md-4" />
              <div className="col-md-4" />
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
  pages: state.pages.allPages
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPages: () => fetchAllPages()(dispatch)
})

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Home)
