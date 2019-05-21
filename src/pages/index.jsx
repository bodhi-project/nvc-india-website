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
    giraffe: file(relativePath: { eq: "giraffe.png" }) {
      ...defaultImage
    }
    background: file(relativePath: { eq: "background.jpg" }) {
      ...defaultImage
    }
    banner: file(relativePath: { eq: "banner.png" }) {
      ...defaultImage
    }
    event1: file(relativePath: { eq: "event1.jpeg" }) {
      ...defaultImage
    }
    event2: file(relativePath: { eq: "event2.jpeg" }) {
      ...defaultImage
    }
    event3: file(relativePath: { eq: "event3.jpeg" }) {
      ...defaultImage
    }
    portrait: file(relativePath: { eq: "portrait.jpeg" }) {
      ...defaultImage
    }
    blob1: file(relativePath: { eq: "blob1.jpg" }) {
      ...defaultImage
    }
    blob2: file(relativePath: { eq: "blob2.jpg" }) {
      ...defaultImage
    }
    blob3: file(relativePath: { eq: "blob3.jpg" }) {
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
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .parent-carrier': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    paddingTop: 75,
    zIndex: 100,
    position: 'absolute',
  },

  '& .parent-circle': {
    width: 550,
    height: 550,
    borderRadius: '50%',
    position: 'relative',
  },

  '& .child-circle': {
    width: 110,
    height: 110,
    borderRadius: '50%',
    position: 'absolute',
    left: 220,
    top: 200,
    // transition: 'all 300ms ease-in',
    cursor: 'pointer',
    display: 'block',

    '&::after': {
      content: `attr(data-text)`,
      fontWeight: 500,
      fontSize: '14px',
      color: '#e15700',
      width: 110,
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
    console.log('mount')
    this.expand()
  }

  /** on mount */
  componentDidUpdate() {
    console.log('update')
    this.expand()
  }

  /**
   * [showModal description]
   * @return {[type]} [description]
   */
  expand() {
    // //Number of services
    const noOfServices = 8
    //   //Half width of parent
    const parentCircleHalfWidth = 220
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
    const events = [
      {
        title: 'Event 1',
        cover: this.props.data.event1.childImageSharp.fluid,
        route: 'events/event-1',
        formattedDate: "23'rd April, 2019",
        abstract:
          "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
      },
      {
        title: 'Event 2',
        cover: this.props.data.event2.childImageSharp.fluid,
        route: 'events/event-1',
        formattedDate: "23'rd April, 2019",
        abstract:
          "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
      },
      {
        title: 'Event 3',
        cover: this.props.data.event3.childImageSharp.fluid,
        route: 'events/event-1',
        formattedDate: "23'rd April, 2019",
        abstract:
          "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
      },
    ]

    const trainers = [
      {
        title: "L'aura Joy",
        cover: this.props.data.portrait.childImageSharp.fluid,
      },
      {
        title: 'Sudha Something',
        cover: this.props.data.portrait.childImageSharp.fluid,
      },
      {
        title: 'Sudha Something',
        cover: this.props.data.portrait.childImageSharp.fluid,
      },
      {
        title: 'Sudha Something',
        cover: this.props.data.portrait.childImageSharp.fluid,
      },
    ]

    const blobs = [
      {
        title: 'Something',
        cover: this.props.data.blob1.childImageSharp.fluid,
      },
      {
        title: 'Something',
        cover: this.props.data.blob2.childImageSharp.fluid,
      },
      {
        title: 'Something',
        cover: this.props.data.blob3.childImageSharp.fluid,
      },
    ]

    return (
      <HomePage pageData={pageData} {...this.props} className={style}>
        <div
          style={{
            background: '#fef5ee',
            boxShadow: '1px 1px 4px #FFD0A9',
            position: 'relative',
            marginBottom: 20,
          }}
          className="desktop-only"
        >
          <Img fluid={this.props.data.banner.childImageSharp.fluid} />
          <div className="parent-carrier">
            <div
              className="parent-circle"
              ref="parent"
              style={{ border: '2px solid transparent' }}
            >
              <div ref="child1" />
              {map(menu, ({ symbol, title, link, size = 'default' }, index) => (
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
              ))}
              <div ref="child7" />
              <div ref="child8" />
            </div>
          </div>
        </div>
        <div
          style={{
            background: '#f5fcf5',
            boxShadow: '1px 1px 4px #baeaba',
            position: 'relative',
            marginBottom: 30,
            padding: '2rem',
            minHeight: '33vh',
          }}
        >
          <h2 className="shadow" data-shadow="About" id="about">
            About
          </h2>
          <p className="copy">
            Alice's Adventures in Wonderland (commonly shortened to Alice in
            Wonderland) is an 1865 novel written by English author Charles
            Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a
            girl named Alice falling through a rabbit hole into a fantasy world
            populated by peculiar, anthropomorphic creatures. The tale plays
            with logic, giving the story lasting popularity with adults as well
            as with children.
          </p>
        </div>

        <Division golden>
          <div
            style={{
              background: '#FFF2E6',
              boxShadow: '1px 1px 4px #FFD0A9',
              position: 'relative',
              marginBottom: 30,
              padding: '2rem',
            }}
          >
            <h2
              className="shadow"
              data-shadow="Certified Trainers"
              id="certified-trainers"
            >
              Certified Trainers
            </h2>
            <div className="mask-p trainers">
              <Grid
                events={trainers}
                Img={Img}
                Link={Link}
                columnWidth="25%"
                gutterWidth={4}
                gutterHeight={4}
              />
            </div>
            <p className="copy" style={{ marginBottom: 0 }}>
              Alice's Adventures in Wonderland (commonly shortened to Alice in
              Wonderland) is an 1865 novel written by English author Charles
              Lutwidge Dodgson under the pseudonym Lewis Carroll.
              <br />
              <Link to="/certified-trainers">Read more ⇝</Link>
            </p>
          </div>
          <div
            style={{
              background: '#FFF2E6',
              boxShadow: '1px 1px 4px #FFD0A9',
              position: 'relative',
              marginBottom: 30,
              padding: '2rem',
            }}
          >
            <h2
              className="shadow"
              data-shadow="Certification Weave"
              id="certification-weave"
            >
              Certification Weave
            </h2>
            <p className="copy" style={{ marginBottom: 0 }}>
              Alice's Adventures in Wonderland (commonly shortened to Alice in
              Wonderland) is an 1865 novel written by English author Charles
              Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a
              girl named Alice falling through a rabbit hole into a fantasy
              world populated by peculiar, anthropomorphic creatures. The tale
              plays with logic, giving the story lasting popularity with adults
              as well as with children.
              <br />
              <Link to="/certification-weave">Read more ⇝</Link>
            </p>
          </div>
        </Division>

        <div
          style={{
            background: '#f5fcf5',
            boxShadow: '1px 1px 4px #baeaba',
            position: 'relative',
            marginBottom: 30,
            padding: '2rem',
          }}
        >
          <h2 className="shadow" data-shadow="Events" id="events">
            Events
          </h2>
          <p className="copy">
            Alice's Adventures in Wonderland (commonly shortened to Alice in
            Wonderland) is an 1865 novel written by English author Charles
            Lutwidge Dodgson under the pseudonym Lewis Carroll.&nbsp;
            <Link to="/events">See all events ⇝</Link>
          </p>
          <Grid events={events} Img={Img} Link={Link} />
        </div>
      </HomePage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
