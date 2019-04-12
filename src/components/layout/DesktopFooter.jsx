// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import container from '@bodhi-project/components/lib/methods/container'
import { Footer as SemanticFooter } from '@bodhi-project/semantic-webflow'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import FooterNav from './FooterNav'
import FooterCopyrightNotice from './FooterCopyrightNotice'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 12,
  paddingBottom: 24,
  background: '#f2f2f2',
  borderTop: '2px dotted #00006F',
}).toString()
const threeQuartersBlock = container({ threeQuarters: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopFooter */
const DesktopFooter = props => {
  return <FooterCopyrightNotice className={`${threeQuartersBlock} ${style}`} />
}

// --------------------------------------------------------------------- Export
export default DesktopFooter
