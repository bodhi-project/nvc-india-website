// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import { graphql } from 'gatsby'

import isUndefined from 'lodash/isUndefined'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import findIndex from 'lodash/findIndex'
import replace from 'lodash/replace'
import endsWith from 'lodash/endsWith'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import keygen from '@bodhi-project/components/lib/methods/keygen'
import Image from '@bodhi-project/components/lib/Image'
import Img from 'gatsby-image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import HomePage from '../components/wrappers/HomePage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const pageData = {
  pageTitle: 'Homepage',
  nakedPageSlug: '',
  pageAbstract: 'Page abstract.',
}

/** toDegrees */
const toDegrees = angle => angle * (Math.PI / 180)

const menu = [
  {
    title: 'About',
    show: true,
    link: '#about',
    symbol: '/about.webp',
  },
  {
    title: 'Certified Trainers',
    show: true,
    link: '#certified-trainers',
    symbol: '/certified-trainers.webp',
  },
  {
    title: 'Certification Weave',
    show: true,
    link: '#certification-weave',
    symbol: '/certification-weave.webp',
  },
  {
    title: 'Events',
    show: true,
    link: '#events',
    symbol: '/events.webp',
  },
  {
    title: 'Contact Us',
    show: true,
    link: '#contact-us',
    symbol: '/contact-us.webp',
  },
]

const links = map(menu, 'link')

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    giraffe: file(relativePath: { eq: "giraffe.png" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .child-circle': {
    width: 100,
    height: 100,
    borderRadius: '50%',
    position: 'absolute',
    left: 187.5,
    top: 187.5,
    // transition: 'all 300ms ease-in',
    cursor: 'pointer',
    display: 'block',

    '&::after': {
      content: `attr(data-text)`,
      fontWeight: 500,
      fontSize: '20px',
      bottom: -25,
      color: '#e15700',
      width: 100,
      textAlign: 'center',
      position: 'absolute',
      fontFamily: 'futura-pt, sans-serif',
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
    const parentCircleHalfWidth = 250
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
      <HomePage pageData={pageData} {...this.props}>
        <div
          className={style}
          style={{
            background: '#fef5ee',
            // boxShadow: '0 12px 20px rgba(40,91,161,0.15)',
            position: 'relative',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              height: 700,
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'flex',
              alignItems: 'flex-end',
              paddingTop: 200,
            }}
          >
            <Img
              fluid={this.props.data.giraffe.childImageSharp.fluid}
              // title="Deepa Dogra, Principal, Cambridge International School"
              // alt="Deepa Dogra, Principal, Cambridge International School"
              style={{
                width: '25%',
                margin: 'auto',
              }}
            />
          </div>
          <div
            className="parent-carrier"
            style={{
              height: 700,
              width: '100%',
              paddingTop: 100,
              paddingBottom: 100,
            }}
          >
            <div
              className="parent-circle"
              ref="parent"
              style={{ border: '2px solid transparent' }}
            >
              <div ref="child1" />
              {map(menu, ({ show, symbol }, index) => (
                <Fragment key={keygen()}>
                  {show === true && (
                    <div
                      className={`child-circle child${index + 2}`}
                      ref={`child${index + 2}`}
                    >
                      <Image
                        src={symbol}
                        rawWidth={900}
                        rawHeight={900}
                        style={{
                          display: 'block',
                          height: '100%',
                          width: '100%',
                          background: 'transparent',
                          border: 'unset',
                        }}
                      />
                    </div>
                  )}
                </Fragment>
              ))}
              <div ref="child7" />
              <div ref="child8" />
            </div>
          </div>
        </div>
        <div
          style={{
            background: '#f5fcf5',
            // boxShadow: '0 12px 20px rgba(40,91,161,0.15)',
            position: 'relative',
            marginBottom: 30,
            height: '62vh',
          }}
        >
          <h2 className="shadow" data-shadow="About">
            About
          </h2>
        </div>
        <div
          style={{
            background: '#f5fcf5',
            // boxShadow: '0 12px 20px rgba(40,91,161,0.15)',
            position: 'relative',
            marginBottom: 30,
            height: '62vh',
          }}
        >
          <h2 className="shadow" data-shadow="Certified Trainers">
            Certified Trainers
          </h2>
        </div>
        <div
          style={{
            background: '#f5fcf5',
            // boxShadow: '0 12px 20px rgba(40,91,161,0.15)',
            position: 'relative',
            marginBottom: 30,
            height: '62vh',
          }}
        >
          <h2 className="shadow" data-shadow="Certification Weave">
            Certification Weave
          </h2>
        </div>
        <div
          style={{
            background: '#f5fcf5',
            // boxShadow: '0 12px 20px rgba(40,91,161,0.15)',
            position: 'relative',
            marginBottom: 30,
            height: '62vh',
          }}
        >
          <h2 className="shadow" data-shadow="Events">
            Events
          </h2>
        </div>
        <div
          style={{
            background: '#f5fcf5',
            // boxShadow: '0 12px 20px rgba(40,91,161,0.15)',
            position: 'relative',
            marginBottom: 30,
            height: '62vh',
          }}
        >
          <h2 className="shadow" data-shadow="Contact Us">
            Contact Us
          </h2>
        </div>
      </HomePage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
