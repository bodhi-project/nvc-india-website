// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'
import each from 'lodash/each'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import ogBanner from '../assets/ogBanner.jpg'
import twitterBanner from '../assets/twitterBanner.jpg'
import withUrl from './withUrl'
import data from '../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const twitterBannerWithUrl = withUrl(twitterBanner, data)
const ogBannerWithUrl = withUrl(ogBanner, data)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Method
// ----------------------------------------------------------------------------
/** seoHelper */
const seoHelper = pageData => {
  const twitterCover = isUndefined(pageData.cover)
    ? twitterBannerWithUrl
    : withUrl(pageData.cover, data)
  const ogCover = isUndefined(pageData.cover)
    ? ogBannerWithUrl
    : withUrl(pageData.cover, data)

  let breadcrumbData = {
    breadcrumbs: [
      { name: 'Home', url: `${data.websiteUrl}` },
      {
        name: pageData.pageTitle,
        url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      },
    ],
  }

  if (!isUndefined(pageData.breadcrumbs)) {
    breadcrumbData = { breadcrumbs: [] }
    each(pageData.breadcrumbs, (breadcrumb, index) => {
      breadcrumbData.breadcrumbs[index] = {
        name: breadcrumb.title,
        url: withUrl(breadcrumb.to, data),
      }
    })
    breadcrumbData.breadcrumbs.push({
      name: pageData.pageTitle,
      url: withUrl(pageData.nakedPageSlug, data),
    })
  }

  const returnObject = {
    pageTitle: pageData.pageTitle,
    twitterSummaryX: twitterCover,
    generalMetaData: {
      description: pageData.pageAbstract,
      keywords: data.websiteKeywords,
      image: ogCover,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
    },
    twitterSummaryCardData: {
      site: data.websiteName,
      creator: data.org.name,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: twitterCover,
      alt: pageData.pageAbstract,
    },
    openGraphSummaryData: {
      siteName: data.websiteName,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: ogCover,
    },
    webpageSchemaData: {
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      name: pageData.pageTitle,
      description: pageData.pageAbstract,
      author: data.org.name,
      publisher: data.org.name,
      image: ogCover,
    },
    breadcrumbSchemaData: breadcrumbData,
  }

  return returnObject
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default seoHelper
