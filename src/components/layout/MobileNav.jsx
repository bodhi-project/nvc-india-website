// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

import Image from '@bodhi-project/components/lib/Image'

import Drawer from 'antd/lib/drawer'
import '@bodhi-project/antrd/lib/wonky/3.16.2/drawer/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/wonky/3.16.2/button/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/wonky/3.16.2/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import HeaderNav from './HeaderNav'

import Link from '../Link'

import logo from '../../assets/logo.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  borderBottom: '2px dotted #00006F',
})
const style = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** MobileNav */
class MobileNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }

    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  /** onClose */
  onClose() {
    this.setState({
      visible: false,
    })
  }

  /** showDrawer */
  showDrawer() {
    this.setState({
      visible: true,
    })
  }

  /** standard renderer */
  render() {
    const { visible } = this.state
    return (
      <div id="mobile-nav" className={style}>
        <div
          style={{
            display: 'flex',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{
              display: 'block',
              border: 'unset',
            }}
          >
            <Image
              src={logo}
              rawWidth={900}
              rawHeight={900}
              style={{
                display: 'block',
                height: 60,
                width: 60,
              }}
              loader="gradient"
              alt="NVC India"
            />
          </Link>
          <div style={{ paddingTop: 14 }}>
            <Button type="primary" onClick={this.showDrawer}>
              <Icon type="menu-fold" theme="outlined" />
            </Button>
          </div>
        </div>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
          style={{
            padding: 0,
          }}
        >
          <HeaderNav mode="inline" />
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Drawer>
      </div>
    )
  }
}

MobileNav.propTypes = {}

// --------------------------------------------------------------------- Export
export default MobileNav
