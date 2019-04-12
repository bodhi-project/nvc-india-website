// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'
import { graphql } from 'gatsby'

import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Typekit from 'react-typekit'
import typefn from '@bodhi-project/typography/lib/methods/type'

import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from '@bodhi-project/seo'
import container from '@bodhi-project/components/lib/methods/container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../../styles/index.less'
import indexImage from '../../assets/launch.jpg'
import data from '../../data/website.json'
import menu from '../../data/menu.json'
import logo from '../../assets/logo.png'

import WebsiteTitle from './WebsiteTitle'
import DesktopNav from './DesktopNav'
import DesktopFooter from './DesktopFooter'
import MobileNav from './MobileNav'
import MobileFooter from './MobileFooter'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
export const defaultImage = graphql`
  fragment defaultImage on File {
    childImageSharp {
      fluid(
        maxWidth: 2400
        quality: 80
        srcSetBreakpoints: [200, 400, 600, 800, 1000, 1200, 1600, 2000, 2400]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

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
  '&#layout': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',

    '& header': {
      flexGrow: 0,
      flexBasis: 0,

      '& > div': {
        borderBottom: '2px solid #285BA1',
        borderLeft: '2px solid #285BA1',
        borderRight: '2px solid #285BA1',
        boxShadow: '2px 2px #e2620b',
        borderRadius: 5,
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },

    '& footer': {
      flexGrow: 0,
      flexBasis: 0,

      '& > p': {
        borderTop: '2px solid #285BA1',
        borderLeft: '2px solid #285BA1',
        borderRight: '2px solid #285BA1',
        boxShadow: '2px 2px #e2620b',
        borderRadius: 5,
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },

    '& main': {
      paddingTop: '1rem',
      paddingBottom: '1rem',
      flexGrow: 1,
      flexBasis: 0,
    },
  },

  '& a': {
    color: '#285BA1',
    // borderBottom: '2px solid transparent',
    transition: 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',

    '&:hover,:active,:focus': {
      color: '#e2620b',
      // borderBottom: '2px solid #e2620b',
    },
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

  '& .shadow': {
    color: '#285BA1',
    textShadow: '0.03em 0.03em 0 #fff',
    position: 'relative',
    transition: 'all 0.3s ease-out',

    '&:hover': {
      color: '#e2620b',
      textShadow: '0.04em 0.04em 0 #fff',

      '&:after': {
        top: '0.08em',
        left: '0.08em',
        backgroundImage:
          'linear-gradient(45deg, transparent 25%, #285BA1 45%, #285BA1 55%, transparent 2%)',
      },
    },

    '&:after': {
      transition: 'all 0.5s ease-out',
      width: '100%',
      height: '100%',
      content: `attr(data-shadow)`,
      position: 'absolute',
      top: '0.06em',
      left: '0.06em',
      fontSize: '125%',
      zIndex: -1,
      textShadow: 'none',
      backgroundImage:
        'linear-gradient(45deg, transparent 25%, #e2620b 45%, #e2620b 55%, transparent 2%)',
      backgroundSize: '0.06em 0.06em',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
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

    const typeClass = typefn({
      kit: 'pom2jme',
      options: {
        range: [12, 22],
        paragraphSpacingFactor: 1.2,
        headingParagraphGapSpacingFactor: 0.95,
        indentParagraphs: false,
      },
    })

    this.state = {
      typeClass,
    }
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
      const element = document.getElementById('content')
      element.scrollTop = 0
    }
  }

  /** standard renderer */
  render() {
    const { children } = this.props
    const { typeClass } = this.state
    const threeQuartersBlock = container({ threeQuarters: true, block: true })

    return (
      <div className={`${typeClass} ${pageStyles}`} id="layout" style={{}}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta data={{ titleTemplate: '%s | Web Starter' }} />
        <UpdateTitle title="Loading..." />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <header>
          <DesktopNav menu={menu} {...this.props} />
          {/* <MobileNav /> */}
        </header>
        <main id="content" role="main" className={threeQuartersBlock}>
          {children}
        </main>
        <footer>
          <DesktopFooter />
          {/* <MobileFooter /> */}
        </footer>
        <Typekit kitId="pom2jme" />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
