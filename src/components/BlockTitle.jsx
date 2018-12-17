// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import startsWith from 'lodash/startsWith'
// import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import { Link as GatsbyLink } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  '& .title-line-wrap': {
    position: 'relative',
    width: 100,
    height: 1,
  },

  '& .title-line': {
    position: 'absolute',
    top: 'calc(50% - 1px)',
    left: '2rem',
    right: 0,
    bottom: 0,
    height: 1,
    width: 100,
    background: '#ffc200',
  },

  '& .post-title': {
    marginLeft: 'calc(100px + 4rem)',
  },
})
const componentStyle = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** BlockTitle */
const BlockTitle = ({ index, title, ...props }) => (
  <p className={componentStyle} {...props}>
    {index}.
    <span className="title-line-wrap">
      <span className="title-line" style={{ opacity: '1' }} />
    </span>
    <span className="post-title">{title}</span>
  </p>
)

BlockTitle.propTypes = {}

// --------------------------------------------------------------------- Export
export default BlockTitle
