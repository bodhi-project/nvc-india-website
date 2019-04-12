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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import HeaderNav from './HeaderNav'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  paddingTop: 20,
  paddingBottom: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& h1': {
    margin: '0px !important',
    whiteSpace: 'nowrap',

    '& span': {
      fontSize: '125%',
    },

    '&:after': {
      fontSize: '125%',
    },

    '& a': {
      // flexGrow: 38,
      flexBasis: 0,
    },
  },

  '& > nav': {
    // flexGrow: 62,
    flexBasis: 0,
    // width: '100%',
    transition: 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    // borderBottom: '2px dotted #00006F',

    '& a': {
      fontFamily: 'baileywick-jf-gothic, sans-serif',
    },

    // '& .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-item': {
    //   border: 'unset !important',
    //   paddingLeft: '0px !important',
    // },

    // '& .ant-menu-horizontal': {
    //   paddingTop: '24px !important',
    //   paddingBottom: '0px !important',
    // },

    '& .ant-menu': {
      background: 'transparent',
      border: 'unset',

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

      '& .ant-menu-item': {
        borderBottom: 'unset !important',

        '& > a': {
          color: '#285BA1',
          borderBottom: '2px solid transparent',
        },

        '&.ant-menu-item-active': {
          borderBottom: 'unset !important',
          '& > a': {
            color: '#e2620b',
            borderBottom: '2px solid #e2620b',
          },
        },
      },
    },
  },
}).toString()
const threeQuartersBlock = container({ threeQuarters: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopNav */
const DesktopNav = props => {
  return (
    <div id="desktop-nav" className={`${threeQuartersBlock} ${style}`}>
      <Link to="/" title="Home">
        <h1 className="shadow" data-shadow="NVC India">
          <span>NVC India</span>
        </h1>
      </Link>
      <HeaderNav mode="horizontal" />
    </div>
  )
}

// --------------------------------------------------------------------- Export
export default DesktopNav
