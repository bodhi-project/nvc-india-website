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
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Events',
  nakedPageSlug: 'events',
  pageAbstract:
    'We offer learning opportunities through practice groups on Nonviolent Communication. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.',
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
              We offer learning opportunities through practice groups on
              Nonviolent Communication. We are also available for individual
              coaching and mediation, and we are happy to consult with
              community-based projects that are seeking to shift paradigms.
            </p>
            <h3 className="mask-h4">Auroville</h3>
            <p>
              Wednesdays: 4.30-6.30pm
              <br />
              Contact L’aura
            </p>
            <h3 className="mask-h4">Bangalore</h3>
            <p>
              Alternate Sundays: 9.30-11.30am
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
