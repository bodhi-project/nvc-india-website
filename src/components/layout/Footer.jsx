// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// import map from 'lodash/map'

import map from 'lodash/map'
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/wonky/3.16.2/icon/style/css'

import container from '@bodhi-project/components/lib/methods/container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import quotes from '../../data/quotes.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

/** returns a random number between min (inclusive) and max (exclusive) */
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}

/** returns a random int between min (inclusive) and max (exclusive) */
const getRandomArbitraryInt = (min, max) => {
  return Math.round(getRandomArbitrary(min, max))
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  borderTop: '2px solid #285BA1',
  borderLeft: '2px solid #285BA1',
  borderRight: '2px solid #285BA1',
  boxShadow: '2px 2px #e2620b',
  borderRadius: 5,
  paddingLeft: '1rem',

  paddingRight: '1rem',
  '& p.mandate': {
    textAlign: 'center',
    color: '#285BA1',
    textShadow: '0.03em 0.03em 0 #e2620b',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: '0px !important',
    marginBottom: '0px !important',
  },

  '& p.quote': {
    textAlign: 'center',
    marginTop: '0px !important',
    marginBottom: '0px !important',
    paddingBottom: 20,
  },

  '& p.copyright': {
    textAlign: 'center',
    marginTop: '0px !important',
    marginBottom: '0px !important',
    paddingBottom: 20,
    lineHeight: 1,

    '& span': {
      fontSize: '90%',
    },
  },
}).toString()
const threeQuartersBlock = container({ threeQuarters: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Footer */
const Footer = props => {
  const random = getRandomArbitraryInt(0, quotes.length - 1)
  const quoteObj = quotes[random]
  let quote = ''
  let author = ''
  if (!isUndefined(quoteObj)) {
    ;({ quote, author } = quoteObj)
  }

  return (
    <footer className={`${threeQuartersBlock} ${style}`}>
      <p className="mandate copy mask-h4">
        <span>…spreading NVC across the subcontinent and beyond…</span>
      </p>
      <p className="quote copy">
        {isString(quote) && (
          <Fragment>
            <i>"{quote}"</i>
          </Fragment>
        )}
        {isArray(quote) && (
          <Fragment>
            <i>
              "
              {map(quote, (quotelet, index) => (
                <Fragment key={index}>
                  {index !== 0 && <br />}
                  {quotelet}
                </Fragment>
              ))}
              "
            </i>
          </Fragment>
        )}
        <br />~ {author}
      </p>
      <p className="copyright copy">
        <span>
          Made with&nbsp;
          <Icon type="heart" theme="filled" style={{ color: '#ff6961' }} />
          &nbsp;by&nbsp;
          <Link to="https://www.bodhiproject.org/">Bodhi Project</Link>
          <br style={{ marginTop: -10 }} />
          Copyright © 2019 NVC-India
        </span>
      </p>
    </footer>
  )
}

// --------------------------------------------------------------------- Export
export default Footer
