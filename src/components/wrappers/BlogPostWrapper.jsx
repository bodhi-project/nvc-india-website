// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

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
  BlogPostSchema,
} from '@bodhi-project/seo'

import Image from '@bodhi-project/components/lib/Image'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/wonky/3.16.2/breadcrumb/style/css'

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
/** BlogPostWrapper */
const BlogPostWrapper = ({ pageData, className, children, ...props }) => {
  const {
    pageTitle: title,
    nakedPageSlug: route,
    publishedTimestamp,
    // category,
    author,
    pageAbstract: abstract,
    cover,
    prev,
    next,
  } = pageData
  const blogPageSchemaData = {
    headline: title,
    image: cover,
    url: `${data.nakedWebsiteUrl}${route}`,
    datePublished: moment.unix(publishedTimestamp).toISOString(),
    dateModified: moment.unix(publishedTimestamp).toISOString(),
    description: abstract,
    publisher: data.org.name,
    publisherLogo: {
      url: `${data.org.url}${data.org.logo}`,
      height: 900,
      width: 900,
    },
    author,
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
    <Layout>
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
            <p>
              {author}
              &nbsp;&nbsp;○&nbsp;&nbsp;
              {moment.unix(publishedTimestamp).format('ddd, MMMM D, YYYY')}
            </p>
            <p>
              <i>{abstract}</i>
            </p>
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
      <BlogPostSchema data={blogPageSchemaData} />
    </Layout>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default BlogPostWrapper
