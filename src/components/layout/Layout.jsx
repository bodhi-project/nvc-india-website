// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Type } from '@bodhi-project/typography'
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from '@bodhi-project/seo'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Container from '@bodhi-project/components/lib/Container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../../styles/index.less'
import '../../styles/animate.min.css'
import indexImage from '../../assets/launch.jpg'
import data from '../../data/website.json'
import menu from '../../data/menu.json'

import WebsiteTitle from './renderers/WebsiteTitle'

import DesktopNav from './desktop/DesktopNav'
import DesktopFooter from './desktop/DesktopFooter'

import MobileNav from './mobile/MobileNav'
import MobileFooter from './mobile/MobileFooter'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
}

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: moment(data.org.foundingDate).format(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  background: 'rgb(255, 236, 211, 0.32)',

  '& #appWrapper': {
    // background: "#f2f2f2",
  },

  '& #contentWrapper': {
    // paddingTop: '24px',

    '& #content': {
      // paddingBottom: '4em',
      minHeight: '100vh',
    },
  },

  '& #menuWrapper': {
    zIndex: 1000,
  },

  '@media(min-width: 992px)': {
    '& .mobile-only': {
      display: 'none',
    },
  },

  '@media(max-width: 992px)': {
    '& .desktop-only': {
      display: 'none',
    },
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Layout */
class Layout extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /** after mount */
  componentDidMount() {
    if (!isUndefined(document)) {
      const htmlElement = document.documentElement
      if (htmlElement.classList.contains('lk-loading')) {
        htmlElement.classList.toggle('lk-loading')
      }
      if (!htmlElement.classList.contains('lk-active')) {
        htmlElement.classList.toggle('lk-active')
      }
    }
  }

  /** on mount */
  componentDidUpdate() {
    if (!isUndefined(window)) {
      const element = document.getElementById('contentWrapper')
      element.scrollTop = 0
    }
  }

  /** standard renderer */
  render() {
    const { children, pageProps = {}, headerTitle = undefined } = this.props

    return (
      <Type
        kit="ltb1ekq"
        style={{ minHeight: '100vh' }}
        className={pageStyles}
        options={{
          // range: [12, 22], // Min and Max font-sizes
          // paragraphSpacingFactor: 1.2, // Greater for tighter paragraph-paragraph spacing
          headingParagraphGapSpacingFactor: 0, // Greater for tighter header-paragraph spacing
          indentParagraphs: false,
        }}
      >
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta data={{ titleTemplate: '%s | NVC India' }} />
        <UpdateTitle title="Official NVC Community in India" />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />

        <Container giant block id="menuWrapper" className="desktop-only">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '#ffd6d3',
            }}
          >
            <div style={{ flexGrow: 1, flexBasis: 0 }}>
              <WebsiteTitle headerTitle={headerTitle} />
            </div>
            <div style={{ flexGrow: 0, flexBasis: 0 }}>
              <DesktopNav menu={menu} {...this.props} />
            </div>
          </div>
        </Container>
        <aside className="mobile-only">
          <MobileNav />
        </aside>
        <div id="contentWrapper">
          <Container giant block id="content">
            {children}
            <div className="desktop-only">
              <DesktopFooter />
            </div>
          </Container>

          <div className="mobile-only">
            <MobileFooter />
          </div>
        </div>
      </Type>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
