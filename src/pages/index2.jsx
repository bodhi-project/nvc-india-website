// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import { graphql } from 'gatsby'

import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import MediaQuery from 'react-responsive'

import keygen from '@bodhi-project/components/lib/methods/keygen'
import Img from 'gatsby-image'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/wonky/3.16.2/row/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/col/style/css'

import Grid from '@bodhi-project/components/lib/gatsby/Grid'
import '@bodhi-project/antrd/lib/wonky/3.16.2/card/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import HomePage from '../components/wrappers/HomePage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Official NVC Trainers Community in India',
  nakedPageSlug: '',
  pageAbstract:
    'Spreading NVC across the subcontinent and beyond – Our NVC community in India is a thriving one, and it’s incredible to see how we’ve grown and how NVC has touched so many hundreds of people over the past several years.',
}

/** toDegrees */
const toDegrees = angle => angle * (Math.PI / 180)

const menu = [
  {
    title: 'Contact',
    link: '/contact-us',
    symbol: 'contactUs',
  },
  {
    title: 'Certification Weave',
    link: '/certification-weave',
    symbol: 'certificationWeave',
  },
  {
    title: 'Events',
    link: '/events',
    symbol: 'events',
  },
  {
    title: 'Certified Trainers',
    link: '/certified-trainers',
    symbol: 'certifiedTrainers',
  },
  {
    title: 'About',
    link: '/about',
    symbol: 'about',
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    banner: file(relativePath: { eq: "banner.png" }) {
      ...defaultImage
    }
    mobileBanner: file(relativePath: { eq: "banner-mobile.png" }) {
      ...defaultImage
    }
    certifiedTrainers: file(relativePath: { eq: "certified-trainers.png" }) {
      ...defaultImage
    }
    about: file(relativePath: { eq: "about.png" }) {
      ...defaultImage
    }
    contactUs: file(relativePath: { eq: "contact-us.png" }) {
      ...defaultImage
    }
    certificationWeave: file(relativePath: { eq: "certification-weave.png" }) {
      ...defaultImage
    }
    events: file(relativePath: { eq: "events.png" }) {
      ...defaultImage
    }
    mobileAbout: file(relativePath: { eq: "mobile/about.png" }) {
      ...defaultImage
    }
    mobileCertificationWeave: file(
      relativePath: { eq: "mobile/certification-weave.png" }
    ) {
      ...defaultImage
    }
    mobileCertifiedTrainers: file(
      relativePath: { eq: "mobile/certified-trainers.png" }
    ) {
      ...defaultImage
    }
    mobileContact: file(relativePath: { eq: "mobile/contact.png" }) {
      ...defaultImage
    }
    mobileEvents: file(relativePath: { eq: "mobile/events.png" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& h1': {
    '& span': {
      fontSize: '170%',
    },
  },

  '& h2': {
    '& span': {
      fontSize: '90%',
    },
  },

  '& .parent-carrier': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 100,
    position: 'absolute',
  },

  '& .parent-circle': {
    width: 720,
    height: 720,
    borderRadius: '50%',
    position: 'relative',
    // border: '2px solid red',
  },

  '& .child-circle': {
    width: 180,
    height: 180,
    borderRadius: '50%',
    position: 'absolute',
    left: 270,
    transition: 'all 300ms ease-in',
    cursor: 'pointer',
    display: 'block',

    '@media(min-height: 800px)': {
      top: 270,
    },

    '@media(max-height: 800px)': {
      top: 320,
    },

    '&::after': {
      content: `attr(data-text)`,
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: 2.2,
      color: '#e15700',
      width: 180,
      textAlign: 'center',
      position: 'absolute',
      fontFamily: 'baileywick-jf-gothic, sans-serif',
    },

    '&.small': {
      width: 90,
      height: 90,
      left: 220,
      top: 200,

      '&::after': {
        width: 90,
      },
    },
  },

  '& .trainers': {
    '& .card': {
      border: '2px solid #285BA1',
      boxShadow: 'unset !important',
    },

    '& .ant-card-body': {
      padding: '0.3rem !important',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 *
 */
class Page extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.expand = this.expand.bind(this)
  }

  /** after mount */
  componentDidMount() {
    this.expand()
    setTimeout(() => {
      this.expand()
    }, 100)
  }

  /** on mount */
  componentDidUpdate() {
    this.expand()
    setTimeout(() => {
      this.expand()
    }, 100)
  }

  /**
   * [showModal description]
   * @return {[type]} [description]
   */
  expand() {
    // //Number of services
    const noOfServices = 8
    //   //Half width of parent
    const parentCircleHalfWidth = 300
    //   //Add some padding from parent circle
    const Hyp = parentCircleHalfWidth - 0
    //   //360 degrees / the number of services
    const angle = Math.round(360 / noOfServices)

    for (let i = 1; i <= noOfServices; i++) {
      const currentAngle = i * angle
      // calculate the positioning of the child circle around the parent circle
      const circlePosXOpp = Math.round(Math.sin(toDegrees(currentAngle)) * Hyp)
      const circlePosYAdj = Math.round(Math.cos(toDegrees(currentAngle)) * Hyp)
      const currentChild = this.refs[`child${i}`]
      currentChild.style.transform = `translate(${circlePosXOpp}px, ${circlePosYAdj}px)`
    }
  }

  /** standard renderer */
  render() {
    return (
      <HomePage pageData={pageData} {...this.props} className={style}>
        <div
          style={{
            background: '#fef5ee',
            boxShadow: '1px 1px 4px #FFD0A9',
            position: 'relative',
            marginBottom: 20,
            zIndex: -1,
          }}
        >
          <Img
            fluid={this.props.data.banner.childImageSharp.fluid}
            style={{
              position: 'absolute',
              height: '100vh',
              width: '100%',
              top: 0,
              left: 0,
              zIndex: 10,
            }}
            className="desktop-only"
          />
          <Img
            fluid={this.props.data.mobileBanner.childImageSharp.fluid}
            style={{
              position: 'absolute',
              height: '100vh',
              width: '100%',
              top: 0,
              left: 0,
              zIndex: 10,
            }}
            className="mobile-only"
          />
          <div
            style={{
              zIndex: 90,
              position: 'absolute',
              height: '100vh',
              width: '100%',
              top: 0,
              left: 0,
              background: 'transparent',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingBottom: '12vh',
            }}
          >
            <div>
              <h1 style={{ marginBottom: 4, marginTop: -10 }}>
                <span>NVC-India</span>
              </h1>
              <h2
                style={{
                  marginBottom: 0,
                  color: '#c84e00',
                }}
              >
                <span>Certified NVC Trainers in India</span>
              </h2>
            </div>
          </div>
          <div className="desktop-only" style={{ zIndex: 100 }}>
            <div className="parent-carrier">
              <div className="parent-circle" ref="parent">
                <div ref="child1" />
                {map(
                  menu,
                  ({ symbol, title, link, size = 'default' }, index) => (
                    <div
                      className={`child-circle ${size} child${index + 2}`}
                      ref={`child${index + 2}`}
                      data-text={title}
                    >
                      <Link to={link} key={keygen()}>
                        <Img
                          fluid={this.props.data[symbol].childImageSharp.fluid}
                        />
                      </Link>
                    </div>
                  )
                )}
                <div ref="child7" />
                <div ref="child8" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mobile-only"
          style={{ zIndex: 100, width: '40%', margin: 'auto' }}
        >
          <Link to="/about">
            <Img fluid={this.props.data.mobileAbout.childImageSharp.fluid} />
          </Link>
          <Link to="/certified-trainers">
            <Img
              fluid={
                this.props.data.mobileCertifiedTrainers.childImageSharp.fluid
              }
            />
          </Link>
          <Link to="/events">
            <Img fluid={this.props.data.mobileEvents.childImageSharp.fluid} />
          </Link>
          <Link to="/certification-weave">
            <Img
              fluid={
                this.props.data.mobileCertificationWeave.childImageSharp.fluid
              }
            />
          </Link>
          <Link to="/contact-us">
            <Img fluid={this.props.data.mobileContact.childImageSharp.fluid} />
          </Link>
        </div>
      </HomePage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
