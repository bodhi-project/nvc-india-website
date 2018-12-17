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
import InteractiveImages from '@bodhi-project/components/lib/InteractiveImages'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import '@bodhi-project/antrd/lib/se-concern-lwes-type/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/se-concern-lwes-type/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import events from '../../assets/events.jpg'
import training from '../../assets/training.jpg'
import network from '../../assets/network.jpg'
import community from '../../assets/community.jpg'
import more from '../../assets/more.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const photos = [
  {
    src: community,
    width: 900,
    height: 1200,
    heading: 'Community',
    text: 'Some text.',
  },
  {
    src: network,
    width: 900,
    height: 1200,
    heading: 'Network',
    text: 'Some text.',
  },
  {
    src: training,
    width: 900,
    height: 1200,
    heading: 'Training',
    text: 'Some text.',
  },
  {
    src: events,
    width: 900,
    height: 1200,
    heading: 'Events',
    text: 'Some text.',
  },
  {
    src: more,
    width: 900,
    height: 1200,
    heading: 'More',
    text: 'Some text.',
  },
]

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
    <Division bigGolden>
      <div>
        <h1 className="mask-h3">NVC India</h1>
        <p>
          Alice's Adventures in Wonderland (commonly shortened to Alice in
          Wonderland) is an 1865 novel written by English author Charles
          Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a girl
          named Alice falling through a rabbit hole into a fantasy world
          populated by peculiar, anthropomorphic creatures. The tale plays with
          logic, giving the story lasting popularity with adults as well as with
          children.
        </p>
        <p>
          It is considered to be one of the best examples of the literary
          nonsense genre. Its narrative course, structure, characters, and
          imagery have been enormously influential in both popular culture and
          literature, especially in the fantasy genre.
        </p>
        <div className="margin-p">
          <InteractiveImages photos={photos} columns={5} />
        </div>
      </div>
      <div>
        <h2 className="mask-h4">About Us</h2>
        <p>
          Chapter 1 – Alice, a girl of seven years, is feeling bored and drowsy
          while sitting on the riverbank with her elder sister. She then notices
          a talking, clothed White Rabbit with a pocket watch run past. She
          follows it down a rabbit hole when suddenly she falls a long way to a
          curious hall with many locked doors of all sizes. She finds a small
          key to a door too small for her to fit through, but through it she
          sees an attractive garden. She then discovers a bottle on a table
          labelled "DRINK ME," the contents of which cause her to shrink too
          small to reach the key which she has left on the table. She eats a
          cake with "EAT ME" written on it in currants as the chapter closes.
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
