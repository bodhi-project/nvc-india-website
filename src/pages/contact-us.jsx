// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// import isUndefined from 'lodash/isUndefined'
// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/wonky/3.16.2/row/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/col/style/css'

import GoogleContactForm from '@bodhi-project/components/lib/forms/GoogleContactForm'
import '@bodhi-project/antrd/lib/wonky/3.16.2/form/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/input/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Contact Us',
  nakedPageSlug: '',
  pageAbstract: 'Page abstract.',
  breadcrumbs: [{ title: 'Home', to: '/' }],
}

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
        <h1>Contact Us</h1>
        <p>
          Alice's Adventures in Wonderland (commonly shortened to Alice in
          Wonderland) is an 1865 novel written by English author Charles
          Lutwidge Dodgson under the pseudonym Lewis Carroll. It tells of a girl
          named Alice falling through a rabbit hole into a fantasy world
          populated by peculiar, anthropomorphic creatures. The tale plays with
          logic, giving the story lasting popularity with adults as well as with
          children.
        </p>
        <br />
        <GoogleContactForm postUrl="https://script.google.com/macros/s/AKfycbxpYSUkW6Dc8gNuWU7o3Pln_bCcp6OsHcQnLgzUWjZoiOo8tEJt/exec" />
      </div>
      <div>2</div>
    </Division>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
