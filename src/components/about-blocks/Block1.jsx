// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import randomstring from 'randomstring'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'
import extend from 'lodash/extend'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import { Link as GatsbyLink } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Division from '@bodhi-project/components/lib/Division'
import InfoBox from '@bodhi-project/components/lib/InfoBox'
import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import '@bodhi-project/antrd/lib/se-concern-lwes-type/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/se-concern-lwes-type/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
let photos = [
  {
    src:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&h=960&q=60',
    width: 600,
    height: 960,
    heading: "L'aura Joy",
    text: 'Some text.',
    info: () => (
      <div>
        <h4>L'aura Joy</h4>
        <p>
          I was born and raised in Auroville, and life has lead me to work with
          nonviolence, peace and justice. I went to university to become a high
          school teacher and proceeded to teach for 6 years (3 in Canada, 3 in
          Auroville). But I somehow didn’t find this work as fulfilling as I had
          expected, so I quit, not knowing what was coming next. In 2007, I
          serendipitously ended up in a Nonviolent Communication workshop, and
          this was the beginning of a new passion and career.
        </p>
      </div>
    ),
  },
  {
    src:
      'https://images.unsplash.com/photo-1529218164294-0d21b06ea831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&h=960&q=60',
    width: 600,
    height: 960,
    heading: 'Person 1',
    text: 'Some text.',
    info: () => (
      <div>
        <h4>Person 2</h4>
        <p>
          A little while later, a friend told me about Dominic Barter’s work
          (hyperlink: www.restorativecircles.org) and that “he was bringing
          Nonviolent Communication to prisons.” Although I had no formal
          connection to the world of crime and justice, I was immediately
          inspired and decided to attend a Restorative Circles training with
          Dominic in Atlanta, USA in October 2010. What I discovered was a whole
          new paradigm, and an absolutely transformative perspective into
          conflict and community.
        </p>
        <p>
          Given my NVC background and having grown up and lived most of my life
          in community, engaging with Restorative Circles felt like a natural
          next step – immersing myself and applying these principles into a
          dynamic, living system. I couldn’t have found a more meaningful way to
          give back to Auroville.
        </p>
      </div>
    ),
  },
  {
    src:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&h=960&q=60',
    width: 600,
    height: 960,
    heading: 'Person 1',
    text: 'Some text.',
    info: () => (
      <div>
        <h4>Person 3</h4>
        <p>
          Given my NVC background and having grown up and lived most of my life
          in community, engaging with Restorative Circles felt like a natural
          next step – immersing myself and applying these principles into a
          dynamic, living system. I couldn’t have found a more meaningful way to
          give back to Auroville.
        </p>
      </div>
    ),
  },
  {
    src:
      'https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&h=960&q=60',
    width: 600,
    height: 960,
    heading: 'Person 1',
    text: 'Some text.',
    info: () => (
      <div>
        <h4>Person 4</h4>
        <p>
          I was born and raised in Auroville, and life has lead me to work with
          nonviolence, peace and justice. I went to university to become a high
          school teacher and proceeded to teach for 6 years (3 in Canada, 3 in
          Auroville). But I somehow didn’t find this work as fulfilling as I had
          expected, so I quit, not knowing what was coming next. In 2007, I
          serendipitously ended up in a Nonviolent Communication workshop, and
          this was the beginning of a new passion and career.
        </p>
        <p>
          Given my NVC background and having grown up and lived most of my life
          in community, engaging with Restorative Circles felt like a natural
          next step – immersing myself and applying these principles into a
          dynamic, living system. I couldn’t have found a more meaningful way to
          give back to Auroville.
        </p>
      </div>
    ),
  },
]

/** Returns a random number between min (inclusive) and max (exclusive) */
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min
/** [description] */
const random = () => Math.round(getRandomArbitrary(1, 100))
/** [description] */
const randomString = () => randomstring.generate()

photos = map(photos, element =>
  extend({}, element, { index: `${randomString()}-${random()}` })
)

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
        <h1 className="mask-h3">About</h1>
        <p>
          Alice's Adventures in Wonderland (commonly shortened to Alice in
          Wonderland) is an 1865 novel written by English author Charles
          Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a girl
          named Alice falling through a rabbit hole into a fantasy world
          populated by peculiar, anthropomorphic creatures. The tale plays with
          logic, giving the story lasting popularity with adults as well as with
          children.
        </p>
        <h2 className="mask-h4">Team</h2>
        <InfoBox photos={photos} withDivision={false} columns={4} />
      </div>
      <div>
        <h2 className="mask-h4">
          Experiences with training in restorative circles and conflict
          resolution
        </h2>
        <Video url="https://www.youtube.com/watch?v=jy9C8tyCxkg" />
      </div>
    </Division>
  </div>
)

Block2.propTypes = {}

// --------------------------------------------------------------------- Export
export default Block2
