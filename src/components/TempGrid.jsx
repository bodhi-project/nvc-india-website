// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
// import moment from 'moment'

import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import StackGrid from 'react-stack-grid'
import { Header, Article } from '@bodhi-project/semantic-webflow'

import keygen from '@bodhi-project/components/lib/methods/keygen'

import Card from 'antd/lib/card'
// import '@bodhi-project/antrd/lib/wonky/3.16.2/card/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const blockStyle = css({
  '& div.card': {
    border: '2px solid #285BA1',
    boxShadow: '2px 2px #e2620b',
    borderRadius: 5,
    background: '#FFFFFF',

    '& a': {
      display: 'block',
      border: 'unset !important',

      '&:hover': {
        border: 'unset !important',
      },

      '& .ant-card-body': {
        padding: '6px 9px',
      },

      '& header': {
        position: 'relative',

        '& h1': {
          marginBottom: 0,
        },

        '& p': {
          marginTop: 10,
        },

        '& .date': {
          background: '#FFFFFF',
          position: 'absolute',
          top: -38,
          left: -9,
          padding: '6px 9px',
        },
      },
    },
  },
})
const blockStyleClass = blockStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Block */
class Block extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      alreadyRendered: false,
    }

    this.grid = undefined

    this.reRender = this.reRender.bind(this)
  }

  /** reRender */
  reRender() {
    const { alreadyRendered } = this.state
    if (alreadyRendered === false) {
      this.setState({ alreadyRendered: true })
      setTimeout(() => {
        this.grid.updateLayout()
        // this.setState({ alreadyRendered: false })
      }, 100)
    }
  }

  /** standard renderer */
  render() {
    const { alreadyRendered } = this.state
    const { events, Img, Link } = this.props

    return (
      <div className={blockStyleClass}>
        <StackGrid
          columnWidth="33%"
          duration={360}
          gutterWidth={20}
          gutterHeight={42}
          monitorImagesLoaded={false}
          gridRef={grid => (this.grid = grid)}
          onLayout={alreadyRendered === false && this.reRender}
        >
          {map(events, event => {
            const { route, cover, title, abstract, formattedDate } = event

            return (
              <div className="card" key={keygen()}>
                <Link to={`/${route}`}>
                  <Card cover={<Img fluid={cover} />} bordered={false}>
                    <Article>
                      <Header>
                        <span className="date">{formattedDate}</span>
                        <h1 className="mask-h5">{title}</h1>
                        <p style={{ marginBottom: 0 }}>{abstract}</p>
                      </Header>
                    </Article>
                  </Card>
                </Link>
              </div>
            )
          })}
        </StackGrid>
      </div>
    )
  }
}

Block.propTypes = {}

Block.defaultProps = {}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Block
