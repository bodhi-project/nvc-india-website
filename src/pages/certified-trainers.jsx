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

import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Certified Trainers',
  nakedPageSlug: 'certified-trainers',
  pageAbstract: 'Page abstract.',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    laura: file(relativePath: { eq: "laura.png" }) {
      ...defaultImage
    }
    pattern4: file(relativePath: { eq: "patterns/pattern4.png" }) {
      ...defaultImage
    }
    img00011: file(relativePath: { eq: "gallery/img00011.jpeg" }) {
      ...defaultImage
    }
    img00019: file(relativePath: { eq: "gallery/img00019.jpeg" }) {
      ...defaultImage
    }
    img00013: file(relativePath: { eq: "gallery/img00013.jpeg" }) {
      ...defaultImage
    }
    img00004: file(relativePath: { eq: "gallery/img00004.jpeg" }) {
      ...defaultImage
    }
    img00005: file(relativePath: { eq: "gallery/img00005.jpeg" }) {
      ...defaultImage
    }
    img00006: file(relativePath: { eq: "gallery/img00006.jpeg" }) {
      ...defaultImage
    }
    img00022: file(relativePath: { eq: "gallery/img00022.jpeg" }) {
      ...defaultImage
    }
    img00023: file(relativePath: { eq: "gallery/img00023.jpeg" }) {
      ...defaultImage
    }
    img00024: file(relativePath: { eq: "gallery/img00024.jpeg" }) {
      ...defaultImage
    }
    img00010: file(relativePath: { eq: "gallery/img00010.jpeg" }) {
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
const Page = props => (
  <StandardPage className="" pageData={pageData} {...props}>
    <Division bigGolden>
      <div className="copy">
        <h1>CNVC-Certified Trainers in India</h1>
        <p>
          Alice's Adventures in Wonderland (commonly shortened to Alice in
          Wonderland) is an 1865 novel written by English author Charles
          Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a girl
          named Alice falling through a rabbit hole into a fantasy world
          populated by peculiar, anthropomorphic creatures. The tale plays with
          logic, giving the story lasting popularity with adults as well as with
          children.
        </p>
        <Division threeQuartersAlt style={{ marginBottom: 20 }}>
          <div>
            <Img fluid={props.data.laura.childImageSharp.fluid} />
          </div>
          <div>
            <h2 className="mask-h3" style={{ marginTop: -10 }}>
              L'aura Joy
            </h2>
            <p>
              L’aura Joy is a Certified Trainer in Nonviolent Communication
              (CNVC, USA), and since 2007 she has been working in the fields of
              communication, conflict resolution and justice, healing,
              decision-making and leadership.
            </p>
            <p>
              Having grown up in Auroville, an international intentional
              community in Tamil Nadu, India, L'aura is passionate about
              exploring how we can live our lives in empowered and co-creative
              ways. In addition to NVC, L'aura is also trained in Restorative
              Circles and Sociocracy, and she applies these approaches to her
              work with justice and governance in Auroville.
            </p>
            <p>
              See here for more information:
              <br />
              <Link to="https://www.joylivinglearning.org/">
                www.joylivinglearning.org
              </Link>
              <br />
              <Link to="https://www.restorativeauroville.org/">
                www.restorativeauroville.org
              </Link>
            </p>
          </div>
        </Division>
        <Division threeQuartersAlt style={{ marginBottom: 20 }}>
          <div>&nbsp;</div>
          <div>
            <h2 className="mask-h3" style={{ marginTop: -10 }}>
              Ranjitha Jeurkar
            </h2>
            <p>Coming soon…</p>
          </div>
        </Division>
        <Division threeQuartersAlt style={{ marginBottom: 20 }}>
          <div>&nbsp;</div>
          <div>
            <h2 className="mask-h3" style={{ marginTop: -10 }}>
              Stefan Gebert
            </h2>
            <p>Coming soon…</p>
          </div>
        </Division>
        <Division threeQuartersAlt style={{ marginBottom: 20 }}>
          <div>&nbsp;</div>
          <div>
            <h2 className="mask-h3" style={{ marginTop: -10 }}>
              Sudha Shankar
            </h2>
            <p>Coming soon…</p>
          </div>
        </Division>
      </div>
      <div>
        <h2 className="mask-h3">From our events…</h2>
        <Gallery
          data={props.data}
          lookup="img"
          columns={{ min: 2, max: 2 }}
          Img={Img}
        />
      </div>
    </Division>
    <br />
    <br />
    <br />
    <Img
      fluid={props.data.pattern4.childImageSharp.fluid}
      style={{
        position: 'absolute',
        bottom: -12,
        right: 0,
        width: '100%',
        height: 'auto',
        zIndex: -1,
        opacity: 0.95,
      }}
    />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
