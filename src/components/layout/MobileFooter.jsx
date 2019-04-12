// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

import Container from '@bodhi-project/components/lib/Container'
import { Footer as SemanticFooter } from '@bodhi-project/semantic-webflow'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import FooterNav from './FooterNav'
import FooterCopyrightNotice from './FooterCopyrightNotice'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 12,
  paddingBottom: 24,
  background: '#f2f2f2',
  borderTop: '2px dotted #00006F',
})
const desktopStyle = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopFooter */
const DesktopFooter = props => {
  return (
    <div id="desktop-nav">
      <SemanticFooter>
        <Container bleed block className={desktopStyle}>
          <p className="mask-h1">More Information</p>
          <FooterNav />
          <FooterCopyrightNotice />
        </Container>
      </SemanticFooter>
    </div>
  )
}

// --------------------------------------------------------------------- Export
export default DesktopFooter
