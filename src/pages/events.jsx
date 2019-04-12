// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
import { graphql } from 'gatsby'

// import isUndefined from 'lodash/isUndefined'
// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/wonky/3.16.2/row/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/col/style/css'

import Grid from '@bodhi-project/components/lib/gatsby-image/Grid'
import '@bodhi-project/antrd/lib/wonky/3.16.2/card/style/css'

import Gallery from '@bodhi-project/components/lib/gatsby-image/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Events',
  nakedPageSlug: '',
  pageAbstract: 'Page abstract.',
  breadcrumbs: [{ title: 'Home', to: '/' }],
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    event1: file(relativePath: { eq: "event1.jpeg" }) {
      ...defaultImage
    }
    event2: file(relativePath: { eq: "event2.jpeg" }) {
      ...defaultImage
    }
    event3: file(relativePath: { eq: "event3.jpeg" }) {
      ...defaultImage
    }
    event4: file(relativePath: { eq: "event4.jpeg" }) {
      ...defaultImage
    }
    event5: file(relativePath: { eq: "event5.jpeg" }) {
      ...defaultImage
    }
    img1: file(relativePath: { eq: "gallery/img1.jpeg" }) {
      ...defaultImage
    }
    img2: file(relativePath: { eq: "gallery/img2.jpeg" }) {
      ...defaultImage
    }
    img3: file(relativePath: { eq: "gallery/img3.jpeg" }) {
      ...defaultImage
    }
    img4: file(relativePath: { eq: "gallery/img4.jpeg" }) {
      ...defaultImage
    }
    img5: file(relativePath: { eq: "gallery/img5.jpeg" }) {
      ...defaultImage
    }
    img6: file(relativePath: { eq: "gallery/img6.jpeg" }) {
      ...defaultImage
    }
    img7: file(relativePath: { eq: "gallery/img7.jpeg" }) {
      ...defaultImage
    }
    img8: file(relativePath: { eq: "gallery/img8.jpeg" }) {
      ...defaultImage
    }
    img9: file(relativePath: { eq: "gallery/img9.jpeg" }) {
      ...defaultImage
    }
    img10: file(relativePath: { eq: "gallery/img10.jpeg" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const events = [
    {
      title: 'Event 1',
      cover: props.data.event1.childImageSharp.fluid,
      route: 'events/event-1',
      formattedDate: "23'rd April, 2019",
      abstract:
        "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
    },
    {
      title: 'Event 2',
      cover: props.data.event2.childImageSharp.fluid,
      route: 'events/event-1',
      formattedDate: "23'rd April, 2019",
      abstract:
        "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
    },
    {
      title: 'Event 3',
      cover: props.data.event3.childImageSharp.fluid,
      route: 'events/event-1',
      formattedDate: "23'rd April, 2019",
      abstract:
        "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
    },
    {
      title: 'Event 4',
      cover: props.data.event4.childImageSharp.fluid,
      route: 'events/event-1',
      formattedDate: "23'rd April, 2019",
      abstract:
        "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
    },
    {
      title: 'Event 5',
      cover: props.data.event5.childImageSharp.fluid,
      route: 'events/event-1',
      formattedDate: "23'rd April, 2019",
      abstract:
        "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll.",
    },
  ]

  const photos = [
    { data: props.data.img1.childImageSharp.fluid, width: 800, height: 600 },
    { data: props.data.img5.childImageSharp.fluid, width: 800, height: 533 },
    { data: props.data.img3.childImageSharp.fluid, width: 800, height: 400 },
    { data: props.data.img4.childImageSharp.fluid, width: 800, height: 531 },
    { data: props.data.img2.childImageSharp.fluid, width: 800, height: 900 },
    { data: props.data.img6.childImageSharp.fluid, width: 800, height: 533 },
    { data: props.data.img7.childImageSharp.fluid, width: 800, height: 536 },
    { data: props.data.img8.childImageSharp.fluid, width: 800, height: 593 },
    { data: props.data.img9.childImageSharp.fluid, width: 800, height: 500 },
    { data: props.data.img10.childImageSharp.fluid, width: 800, height: 1138 },
  ]

  return (
    <StandardPage className="" pageData={pageData}>
      <Division bigGolden>
        <div>
          <h1>Events</h1>
          <p>
            Alice's Adventures in Wonderland (commonly shortened to Alice in
            Wonderland) is an 1865 novel written by English author Charles
            Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a
            girl named Alice falling through a rabbit hole into a fantasy world
            populated by peculiar, anthropomorphic creatures. The tale plays
            with logic, giving the story lasting popularity with adults as well
            as with children.
          </p>
          <Grid events={events} Img={Img} Link={Link} />
        </div>
        <div>
          <h2>From our events…</h2>
          <Gallery photos={photos} Img={Img} />
        </div>
      </Division>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
