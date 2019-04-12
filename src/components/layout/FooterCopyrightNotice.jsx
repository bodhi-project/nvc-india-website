// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import container from '@bodhi-project/components/lib/methods/container'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/wonky/3.16.2/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const threeQuartersBlock = container({ threeQuarters: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** FooterCopyrightNotice */
const FooterCopyrightNotice = () => (
  <Fragment>
    <p
      style={{
        textAlign: 'center',
        marginBottom: 0,
        paddingTop: 30,
        paddingBottom: 30,
      }}
      className={threeQuartersBlock}
    >
      Made with&nbsp;
      <Icon type="heart" theme="filled" style={{ color: '#ff6961' }} />
      &nbsp;by&nbsp;
      <Link to="https://www.bodhiproject.org/">Bodhi Project</Link>
      <br />
      Copyright © 2019 NVC India
    </p>
  </Fragment>
)

FooterCopyrightNotice.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default FooterCopyrightNotice
