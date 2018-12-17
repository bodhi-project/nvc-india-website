// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import HeaderNav from '../renderers/HeaderNav'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  width: '100%',
  transition: 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  paddingRight: 40,

  '& .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-item': {
    border: 'unset !important',
    padding: '20px 0px !important',
    lineHeight: '60px !important',
    marginBottom: '0px !important',
    fontWeight: '600 !important',
    marginLeft: 30,

    '& a': {
      color: '#00008b !important',
    },
  },

  '& .ant-menu-horizontal': {
    padding: '0px !important',
    lineHeight: 'unset !important',
    background: '#ffd6d3 !important',
  },

  '& .ant-menu': {
    '&:before,:after': {
      display: 'none',
    },

    '& li:nth-child(2)': {
      marginLeft: 0,
      paddingLeft: 0,

      '& .ant-menu-submenu-title': {
        marginRight: 0,
        paddingRight: 0,
      },
    },

    '& li:nth-last-child(2)': {
      marginRight: 0,
      paddingRight: 0,

      '& .ant-menu-submenu-title': {
        marginRight: 0,
        paddingRight: 0,
      },
    },
  },
})
const style = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopNav */
const DesktopNav = props => {
  return (
    <div id="desktop-nav" className={style}>
      <HeaderNav mode="horizontal" />
    </div>
  )
}

// --------------------------------------------------------------------- Export
export default DesktopNav
