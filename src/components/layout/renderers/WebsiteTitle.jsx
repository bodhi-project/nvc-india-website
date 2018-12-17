// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'
import squareLogo from '../../../assets/squareLogo.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  '& a': {
    padding: '20px 0px 20px 40px',
    height: 'auto',
    borderBottom: 'unset',
    position: 'relative',
    display: 'block',

    '& h1': {
      height: 60,
      marginBottom: 0,
      flexBasis: 'auto',
      paddingLeft: 65,
      fontWeight: 800,
      position: 'relative',
      color: '#00008b',

      '& div': {
        fontSize: '80%',
        position: 'absolute',
        top: -10,
        whiteSpace: 'nowrap',
      },
    },

    '& h2': {
      marginBottom: 0,
      flexBasis: 'auto',
      textTransform: 'lowercase',
      fontWeight: 500,
      lineHeight: '22px',
      fontStyle: 'italic',
      position: 'absolute',
      left: 105,
      top: 52,
      color: '#00008b',

      '& div': {
        whiteSpace: 'nowrap',
        fontSize: '75%',
      },
    },

    '&:hover': {
      borderBottom: 'unset',
    },
  },
})

const style = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** WebsiteTitle */
const WebsiteTitle = ({ headerTitle }) => (
  <header className={style}>
    <Link to="/">
      <h1
        style={{
          background: `url(${squareLogo}) 0% 0% / 60px 60px no-repeat`,
        }}
      >
        <div>NVC India</div>
      </h1>
      <h2>
        <div>
          {isUndefined(headerTitle)
            ? 'official nvc community in india'
            : `⇝ ${headerTitle}`}
        </div>
      </h2>
    </Link>
  </header>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default WebsiteTitle
