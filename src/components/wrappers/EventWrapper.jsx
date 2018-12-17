// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Page } from '@bodhi-project/semantic-webflow'
import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebpageSchema,
  BreadcrumbSchema,
  EventSchema,
} from '@bodhi-project/seo'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import Layout from '../layout/Layout'
import FacebookSharer from '../FacebookSharer'
import PreviousNext from '../PreviousNext'

import data from '../../data/website.json'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  '& section': {
    padding: 0,
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventWrapper */
const EventWrapper = ({
  pageData,
  className,
  children,
  formattedDate,
  humanDate,
  frontmatter,
  ...props
}) => {
  const {
    pageTitle: title,
    nakedPageSlug: route,
    startTimestamp,
    endTimestamp,
    author,
    pageAbstract: abstract,
    cover,
    prev,
    next,
    pageProps,
  } = pageData
  const eventSchemaData = {
    name: title,
    url: `${data.nakedWebsiteUrl}${route}`,
    description: abstract,
    startDate: moment.unix(startTimestamp).toISOString(),
    endDate: moment.unix(endTimestamp).toISOString(),
    locationName: data.orgLocation.locationName,
    locationUrl: data.orgLocation.locationUrl,
    streetAddress: data.orgLocation.streetAddress,
    addressLocality: data.orgLocation.addressLocality,
    addressRegion: data.orgLocation.addressRegion,
    postalCode: data.orgLocation.postalCode,
    addressCountry: data.orgLocation.addressCountry,
    image: cover,
    performer: {
      name: data.org.founders[0],
      image: `${data.websiteUrl}${cover}`,
      sameAs: data.orgSocialMediaProfiles,
    },
    isAccessibleForFree: true,
    offers: {
      price: 123,
      priceCurrency: 'INR',
      url: `${data.websiteUrl}${route}`,
    },
  }
  const seoData = seoHelper(pageData)
  const {
    pageTitle,
    generalMetaData,
    twitterSummaryCardData,
    openGraphSummaryData,
    webpageSchemaData,
    breadcrumbSchemaData,
  } = seoData

  return (
    <Layout pageProps={pageProps}>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
      <UpdateTitle title={pageTitle} />
      <GeneralMeta data={generalMetaData} />
      <TwitterSummaryCard data={twitterSummaryCardData} />
      <OpenGraphSummary data={openGraphSummaryData} />
      <WebpageSchema data={webpageSchemaData} />
      <BreadcrumbSchema data={breadcrumbSchemaData} />

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
      <Page className={`${pageStyles} ${className}`}>
        <article>
          <header className="margin-p">
            <Breadcrumb
              className="mask-p"
              separator="»"
              style={{ marginBottom: 0 }}
            >
              {map(pageData.breadcrumbs, ({ title: breadcrumbTitle, to }) => (
                <Breadcrumb.Item key={to}>
                  <Link to={to}>{breadcrumbTitle}</Link>
                </Breadcrumb.Item>
              ))}
              <Breadcrumb.Item>
                <Link to="#" disabled>
                  {pageData.pageTitle}
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="mask-h2">{pageData.pageTitle}</h1>
            <p>{formattedDate}</p>
            <FacebookSharer route={route} />
            <Image
              src={cover}
              rawWidth={1440}
              rawHeight={900}
              style={{
                maxWidth: '62%',
                height: 'auto',
                border: 'unset',
              }}
              className="margin-p"
              loader="gradient"
              gradientPreset="life"
            />
          </header>
          {children}
          <footer style={{ borderTop: '1px dotted #00006F' }}>
            <h1 className="mask-h4">More articles</h1>
            <PreviousNext prev={prev} next={next} />
          </footer>
        </article>
      </Page>
      <EventSchema data={eventSchemaData} />
    </Layout>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default EventWrapper
