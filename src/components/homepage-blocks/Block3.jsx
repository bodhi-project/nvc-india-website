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
import Division from '@bodhi-project/components/lib/Division'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import '@bodhi-project/antrd/lib/se-concern-lwes-type/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/se-concern-lwes-type/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  background: 'rgb(255, 236, 211, 0.6)',

  '@media(min-width: 992px)': {
    minHeight: '32vh',
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Block2 */
const Block2 = () => (
  <div className={pageStyles} id="Clients">
    <h2 className="mask-h3">Get Involved Today…</h2>
    <Division byThree>
      <div>
        <h3 className="mask-h4">Learn</h3>
        <p>
          Alice and the rest of Wonderland continue to inspire or influence many
          other works of art to this day, sometimes indirectly via the 1951
          Disney movie, for example.
        </p>
        <p>
          <Link to="/about">Learn more ⇝</Link>
        </p>
      </div>
      <div>
        <h3 className="mask-h4">Connect</h3>
        <p>
          The book is commonly referred to by the abbreviated title Alice in
          Wonderland, which has been popularised by the numerous stage, film and
          television adaptations of the story produced over the years.
        </p>
        <p>
          <Link to="/about">Learn more ⇝</Link>
        </p>
      </div>
      <div>
        <h3 className="mask-h4">Contact</h3>
        <p>
          The book Alice in Wonderland failed to be named in an 1888 poll of the
          most popular children's stories. It received poor reviews with
          reviewers giving more credit to Tenniel's illustrations than to
          Carroll's story.
        </p>
        <p>
          <Link to="/about">Learn more ⇝</Link>
        </p>
      </div>
    </Division>
  </div>
)

Block2.propTypes = {}

// --------------------------------------------------------------------- Export
export default Block2
