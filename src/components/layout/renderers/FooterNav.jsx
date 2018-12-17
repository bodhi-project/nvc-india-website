// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

import keygen from '../../../methods/keygen'

import footerMenu from '../../../data/footerMenu.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const gridWidth = Math.floor(24 / footerMenu.length)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** FooterNav */
const FooterNav = () => {
  return (
    <Row
      gutter={{ xs: 12, sm: 18, md: 24, xl: 36 }}
      type="flex"
      justify="space-between"
    >
      {map(footerMenu, block => {
        const { title, menu } = block

        return (
          <Col sm={24} md={24} xl={gridWidth} key={keygen()}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <p>{title}</p>
              <div className="mask-p">
                {map(menu, menuItem => {
                  const { title: menuItemTitle, link } = menuItem
                  return (
                    <li key={keygen()}>
                      <Link to={link}>{menuItemTitle}</Link>
                    </li>
                  )
                })}
              </div>
            </ul>
          </Col>
        )
      })}
    </Row>
  )
}

FooterNav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default FooterNav
