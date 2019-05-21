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

import Calendar from 'antd/lib/calendar'
import '@bodhi-project/antrd/lib/wonky/3.16.2/calendar/style/css'

// import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Events',
  nakedPageSlug: 'events',
  pageAbstract:
    'In addition to NVC training events, we offer practice groups across the country. Join us to deepen your learning.',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    pattern2: file(relativePath: { eq: "patterns/pattern2.png" }) {
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
const Page = props => {
  return (
    <StandardPage className="" pageData={pageData} {...props}>
      <div style={{ position: 'relative', width: '100%' }}>
        <Img
          fluid={props.data.pattern2.childImageSharp.fluid}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 500,
            height: 'auto',
            zIndex: -1,
            opacity: 0.45,
          }}
        />
        <Division bigGolden style={{ zIndex: 100 }}>
          <div className="copy">
            <h1>Events</h1>
            <Calendar />
          </div>
          <div>
            <h2 className="mask-h3">Practice Groups</h2>
            <p>
              In addition to NVC training events, we offer practice groups
              across the country. Join us to deepen your learning.
            </p>
            <h3 className="mask-h4">Auroville</h3>
            <p>
              Wednesdays: 4.30-6.30pm
              <br />
              Contact L’aura:&nbsp;
              <Link to="mailto:joylivinglearning@gmail.com">
                joylivinglearning@gmail.com
              </Link>
            </p>
            <h3 className="mask-h4">Bangalore</h3>
            <p>
              Sundays (alternate): 9.30-11.30am
              <br />
              Contact Ranjitha
            </p>
            <h3 className="mask-h4">Delhi</h3>
            <p>
              Fridays: 6.30-8.30pm
              <br />
              Contact Sudha
            </p>
          </div>
        </Division>
      </div>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
