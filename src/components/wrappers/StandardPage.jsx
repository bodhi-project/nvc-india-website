// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

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
} from '@bodhi-project/seo'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/wonky/3.16.2/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import Layout from '../layout/Layout'

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
/** StandardPage */
const StandardPage = props => {
  const { pageData, className, children } = props
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
    <Layout>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
      <UpdateTitle title={pageTitle} />
      <GeneralMeta data={generalMetaData} />
      <TwitterSummaryCard data={twitterSummaryCardData} />
      <OpenGraphSummary data={openGraphSummaryData} />
      <WebpageSchema data={webpageSchemaData} />
      <BreadcrumbSchema data={breadcrumbSchemaData} />

      {children}
    </Layout>
  )
}

StandardPage.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default StandardPage
