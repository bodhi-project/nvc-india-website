// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
import { graphql } from 'gatsby'

// import isUndefined from 'lodash/isUndefined'
// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/wonky/3.16.2/row/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/col/style/css'

import GoogleContactForm from '@bodhi-project/components/lib/forms/GoogleContactForm'
import '@bodhi-project/antrd/lib/wonky/3.16.2/form/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/input/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/button/style/css'

import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Contact Us',
  nakedPageSlug: 'contact-us',
  pageAbstract: 'Please give us 3-5 days to respond.',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    pattern1: file(relativePath: { eq: "patterns/pattern1.png" }) {
      ...defaultImage
    }
    img00017: file(relativePath: { eq: "gallery/img00017.jpeg" }) {
      ...defaultImage
    }
    img00018: file(relativePath: { eq: "gallery/img00018.jpeg" }) {
      ...defaultImage
    }
    img00027: file(relativePath: { eq: "gallery/img00027.jpeg" }) {
      ...defaultImage
    }
    img00028: file(relativePath: { eq: "gallery/img00028.jpeg" }) {
      ...defaultImage
    }
    img00029: file(relativePath: { eq: "gallery/img00029.jpeg" }) {
      ...defaultImage
    }
    img00031: file(relativePath: { eq: "gallery/img00031.jpeg" }) {
      ...defaultImage
    }
    img00032: file(relativePath: { eq: "gallery/img00032.jpeg" }) {
      ...defaultImage
    }
    img00033: file(relativePath: { eq: "gallery/img00033.jpeg" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <StandardPage className="" pageData={pageData} {...props}>
    <Division bigGolden>
      <div className="copy">
        <h1>Contact Us</h1>
        <GoogleContactForm postUrl="https://script.google.com/macros/s/AKfycbxpYSUkW6Dc8gNuWU7o3Pln_bCcp6OsHcQnLgzUWjZoiOo8tEJt/exec" />
      </div>
      <div>
        <div style={{ position: 'relative', width: '100%' }}>
          <Img
            fluid={props.data.pattern1.childImageSharp.fluid}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%',
              height: 'auto',
              zIndex: -1,
              opacity: 0.25,
            }}
          />
          <div style={{ zIndex: 100 }}>
            <h2 className="mask-h3">Trainers' Contacts</h2>
            <br />
            <p>
              <strong>
                <u style={{ color: '#e2620b' }}>L’aura Joy</u>
              </strong>
              <br />
              <Link to="mailto:joylivinglearning@gmail.com">
                joylivinglearning@gmail.com
              </Link>
              <br />
              <Link to="https://www.joylivinglearning.org">
                www.joylivinglearning.org
              </Link>
              <br />
              <Link to="https://www.restorativeauroville.org">
                www.restorativeauroville.org
              </Link>
              <br />
              &nbsp;
            </p>
            <p>
              <strong>
                <u style={{ color: '#e2620b' }}>Ranjitha Jeurkar</u>
              </strong>
              <br />
              Coming soon…
              <br />
              &nbsp;
            </p>
            <p>
              <strong>
                <u style={{ color: '#e2620b' }}>Stefan Gebert</u>
              </strong>
              <br />
              Coming soon…
              <br />
              &nbsp;
            </p>
            <p>
              <strong>
                <u style={{ color: '#e2620b' }}>Sudha Shankar</u>
              </strong>
              <br />
              Coming soon…
              <br />
              &nbsp;
            </p>
          </div>
        </div>
      </div>
    </Division>
    <h2 className="mask-h3">From our events…</h2>
    <Gallery
      data={props.data}
      lookup="img"
      columns={{ min: 2, max: 4 }}
      Img={Img}
    />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
