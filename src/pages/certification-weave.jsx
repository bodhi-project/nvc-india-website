// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// import isUndefined from 'lodash/isUndefined'
// import map from 'lodash/map'

import { graphql } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'

import Video from '@bodhi-project/components/lib/Video'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/wonky/3.16.2/row/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/col/style/css'

import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Certification Weave',
  nakedPageSlug: 'certification-weave',
  pageAbstract:
    'The Certification Process is a community-based process, where Candidates, Assessors, local Certified Trainers and NVC Practitioners come together to support and witness each Candidate’s journey.',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    pattern3: file(relativePath: { eq: "patterns/pattern3.png" }) {
      ...defaultImage
    }
    img00020: file(relativePath: { eq: "gallery/img00020.jpeg" }) {
      ...defaultImage
    }
    img00012: file(relativePath: { eq: "gallery/img00012.jpeg" }) {
      ...defaultImage
    }
    img00021: file(relativePath: { eq: "gallery/img00021.jpeg" }) {
      ...defaultImage
    }
    img00007: file(relativePath: { eq: "gallery/img00007.jpeg" }) {
      ...defaultImage
    }
    img00015: file(relativePath: { eq: "gallery/img00015.jpeg" }) {
      ...defaultImage
    }
    img00009: file(relativePath: { eq: "gallery/img00009.jpeg" }) {
      ...defaultImage
    }
    img00025: file(relativePath: { eq: "gallery/img00025.jpeg" }) {
      ...defaultImage
    }
    img00002: file(relativePath: { eq: "gallery/img00002.jpeg" }) {
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
        <h1>Certification Weave</h1>
        <p>
          It’s a celebration that we have several Certification Candidates in
          India, preparing themselves to become Certified NVC Trainers. The
          Certification Process is a community-based process, where Candidates,
          Assessors, local Certified Trainers and NVC Practitioners come
          together to support and witness each Candidate’s journey.
        </p>
        <p>
          For the complete process and its requirements, please see the 
          <Link to="https://www.cnvc.org/certification/process">
            Center for Nonviolent Communication’s page.
          </Link>
        </p>
        <p>
          <strong>
            Stay tuned for more information about our India Certification
            Weave...
          </strong>
        </p>
        <h2 className="mask-h3">A Certification Candidate shares…</h2>
        <div style={{ maxWidth: 600 }}>
          <Video url="https://www.youtube.com/watch?v=YoGKAJqMCBk" />
        </div>
      </div>
      <div>
        <br className="mobile-only" />
        <h2 className="mask-h3">From our events…</h2>
        <Gallery
          data={props.data}
          lookup="img"
          columns={{ min: 2, max: 2 }}
          Img={Img}
        />
      </div>
    </Division>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Img
      fluid={props.data.pattern3.childImageSharp.fluid}
      style={{
        position: 'absolute',
        bottom: -5,
        right: 0,
        width: '100%',
        height: 'auto',
        zIndex: -1,
        opacity: 0.5,
      }}
    />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
