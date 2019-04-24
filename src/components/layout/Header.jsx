// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Menu from 'antd/lib/menu'
import '@bodhi-project/antrd/lib/wonky/3.16.2/menu/style/css'

import container from '@bodhi-project/components/lib/methods/container'

// import Image from '@bodhi-project/components/lib/Image'

import Drawer from 'antd/lib/drawer'
import '@bodhi-project/antrd/lib/wonky/3.16.2/drawer/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/wonky/3.16.2/button/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/wonky/3.16.2/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

// import logo from '../../assets/logo.png'

import keygen from '../../methods/keygen'

import websiteMenu from '../../data/menu.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { SubMenu } = Menu

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '&#header': {
    borderBottom: '2px solid #285BA1',
    borderLeft: '2px solid #285BA1',
    borderRight: '2px solid #285BA1',
    boxShadow: '2px 2px #e2620b',
    borderRadius: 5,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: 20,
    paddingBottom: 20,
  },

  '& .desktop-header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '& .mobile-header': {
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },

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

  '& nav': {
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
        padding: '0 0.5rem',

        '@media(min-width: 992px)': {
          padding: '0 0.5rem',
        },

        '@media(min-width: 1092px)': {
          padding: '0 0.7rem',
        },

        '@media(min-width: 1192px)': {
          padding: '0 0.85rem',
        },

        '@media(min-width: 1292px)': {
          padding: '0 1rem',
        },

        '@media(min-width: 1400px)': {
          padding: '0 1.2rem',
        },

        '& > a': {
          color: '#285BA1',
          borderBottom: '2px solid transparent',

          '&.active': {
            color: '#e2620b',
          },
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

  '& .ant-drawer-body': {
    paddingLeft: '1rem !important',
    paddingRight: '1rem !important',
    paddingTop: '20px !important',
    paddingBottom: '20px !important',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    '& nav': {
      flexGrow: 1,
      flexBasis: 0,
    },
  },
}).toString()
const threeQuartersBlock = container({ threeQuarters: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Header */
class Header extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      current: 'home',
      visible: false,
    }

    this.logoClick = this.logoClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  /** showModal */
  showModal(e) {
    this.setState({
      visible: true,
    })
  }

  /** handleOk */
  handleOk(e) {
    this.setState({
      visible: false,
    })
  }

  /** handleCancel */
  handleCancel(e) {
    this.setState({
      visible: false,
    })
  }

  /** logoClick */
  logoClick(e) {
    this.setState({
      current: 'home',
    })
  }

  /** handleClick */
  handleClick(e) {
    this.setState({
      current: e.key,
    })
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
    const { mode, isDesktop, typeClass, location } = this.props
    const { current, visible } = this.state
    const { pathname: currentLocation } = location

    return (
      <header className={`${threeQuartersBlock} ${style}`} id="header">
        {isDesktop === true && (
          <div className="desktop-header">
            <Link to="/" title="Home">
              <h1 className="shadow" data-shadow="NVC India">
                <span>NVC India</span>
              </h1>
            </Link>
            <nav>
              <Menu
                mode="horizontal"
                onClick={this.handleClick}
                selectedKeys={[current]}
                forceSubMenuRender
              >
                {map(websiteMenu, topLevel => {
                  const { title, menu, link, mobileOnly } = topLevel
                  let returnObj = <Fragment key={keygen()} />
                  if (mobileOnly === false) {
                    if (isUndefined(link)) {
                      returnObj = (
                        <SubMenu title={<span>{title}</span>} key={keygen()}>
                          {map(menu, subMenu => {
                            const { title: subTitle, link: thisLink } = subMenu
                            return (
                              <Menu.Item key={keygen()}>
                                <Link
                                  to={thisLink}
                                  className={
                                    thisLink === currentLocation
                                      ? 'active'
                                      : 'inactive'
                                  }
                                >
                                  {subTitle}
                                </Link>
                              </Menu.Item>
                            )
                          })}
                        </SubMenu>
                      )
                    } else {
                      returnObj = (
                        <Menu.Item key={keygen()}>
                          <Link
                            to={link}
                            className={
                              link === currentLocation ? 'active' : 'inactive'
                            }
                          >
                            <span>{title}</span>
                          </Link>
                        </Menu.Item>
                      )
                    }
                  }

                  return returnObj
                })}
              </Menu>
            </nav>
          </div>
        )}
        {isDesktop === false && (
          <div className="mobile-header">
            <div>
              <Link
                to="/"
                title="Home"
                style={{
                  display: 'block',
                  border: 'unset',
                }}
              >
                <h1 className="shadow" data-shadow="NVC India">
                  <span>NVC India</span>
                </h1>
              </Link>
              <div style={{ paddingTop: 14 }}>
                <Button
                  type="primary"
                  onClick={this.showDrawer}
                  style={{ background: '#285BA1', borderColor: '#285BA1' }}
                >
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
              className={`${typeClass} ${style}`}
            >
              <nav>
                <Menu
                  mode="vertical"
                  onClick={this.handleClick}
                  selectedKeys={[current]}
                  forceSubMenuRender
                >
                  {map(websiteMenu, topLevel => {
                    const { title, menu, link } = topLevel
                    let returnObj = <Fragment key={keygen()} />
                    if (isUndefined(link)) {
                      returnObj = (
                        <SubMenu title={<span>{title}</span>} key={keygen()}>
                          {map(menu, subMenu => {
                            const { title: subTitle, link: thisLink } = subMenu
                            return (
                              <Menu.Item key={keygen()}>
                                <Link
                                  to={thisLink}
                                  className={
                                    thisLink === currentLocation
                                      ? 'active'
                                      : 'inactive'
                                  }
                                >
                                  {subTitle}
                                </Link>
                              </Menu.Item>
                            )
                          })}
                        </SubMenu>
                      )
                    } else {
                      returnObj = (
                        <Menu.Item key={keygen()}>
                          <Link
                            to={link}
                            className={
                              link === currentLocation ? 'active' : 'inactive'
                            }
                          >
                            <span>{title}</span>
                          </Link>
                        </Menu.Item>
                      )
                    }

                    return returnObj
                  })}
                </Menu>
              </nav>
            </Drawer>
          </div>
        )}
      </header>
    )
  }
}

// --------------------------------------------------------------------- Export
export default Header
