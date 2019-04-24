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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Certified Trainers',
  nakedPageSlug: '',
  pageAbstract: 'Page abstract.',
  breadcrumbs: [{ title: 'Home', to: '/' }],
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    portrait: file(relativePath: { eq: "portrait.jpeg" }) {
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
      <div>
        <h1>Certified Trainers</h1>
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
            <Img
              fluid={props.data.portrait.childImageSharp.fluid}
              // title="Deepa Dogra, Principal, Cambridge International School"
              // alt="Deepa Dogra, Principal, Cambridge International School"
            />
          </div>
          <div>
            <h2>L'aura Joy</h2>
            <p>
              Alice's Adventures in Wonderland (commonly shortened to Alice in
              Wonderland) is an 1865 novel written by English author Charles
              Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a
              girl named Alice falling through a rabbit hole into a fantasy
              world populated by peculiar, anthropomorphic creatures. The tale
              plays with logic, giving the story lasting popularity with adults
              as well as with children.
            </p>
          </div>
        </Division>
        <Division threeQuartersAlt style={{ marginBottom: 20 }}>
          <div>
            <Img
              fluid={props.data.portrait.childImageSharp.fluid}
              // title="Deepa Dogra, Principal, Cambridge International School"
              // alt="Deepa Dogra, Principal, Cambridge International School"
            />
          </div>
          <div>
            <h2>Sudha Something</h2>
            <p>
              Alice's Adventures in Wonderland (commonly shortened to Alice in
              Wonderland) is an 1865 novel written by English author Charles
              Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a
              girl named Alice falling through a rabbit hole into a fantasy
              world populated by peculiar, anthropomorphic creatures. The tale
              plays with logic, giving the story lasting popularity with adults
              as well as with children.
            </p>
          </div>
        </Division>
        <Division threeQuartersAlt style={{ marginBottom: 20 }}>
          <div>
            <Img
              fluid={props.data.portrait.childImageSharp.fluid}
              // title="Deepa Dogra, Principal, Cambridge International School"
              // alt="Deepa Dogra, Principal, Cambridge International School"
            />
          </div>
          <div>
            <h2>Ranjitha Something</h2>
            <p>
              Alice's Adventures in Wonderland (commonly shortened to Alice in
              Wonderland) is an 1865 novel written by English author Charles
              Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a
              girl named Alice falling through a rabbit hole into a fantasy
              world populated by peculiar, anthropomorphic creatures. The tale
              plays with logic, giving the story lasting popularity with adults
              as well as with children.
            </p>
          </div>
        </Division>
        <Division threeQuartersAlt style={{ marginBottom: 20 }}>
          <div>
            <Img
              fluid={props.data.portrait.childImageSharp.fluid}
              // title="Deepa Dogra, Principal, Cambridge International School"
              // alt="Deepa Dogra, Principal, Cambridge International School"
            />
          </div>
          <div>
            <h2>Somebody Else</h2>
            <p>
              Alice's Adventures in Wonderland (commonly shortened to Alice in
              Wonderland) is an 1865 novel written by English author Charles
              Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a
              girl named Alice falling through a rabbit hole into a fantasy
              world populated by peculiar, anthropomorphic creatures. The tale
              plays with logic, giving the story lasting popularity with adults
              as well as with children.
            </p>
          </div>
        </Division>
      </div>
      <div>2</div>
    </Division>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
