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

import FacebookGroup from '@bodhi-project/components/lib/facebook/FacebookGroup'

import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'About',
  nakedPageSlug: 'about',
  pageAbstract:
    'Our NVC community in India is a thriving one, and it’s incredible to see how we’ve grown and how NVC has touched so many hundreds of people over the past several years.',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    nvcTreeOfLife: file(relativePath: { eq: "nvc-tree-of-life.jpg" }) {
      ...defaultImage
    }
    pattern5: file(relativePath: { eq: "patterns/pattern5.png" }) {
      ...defaultImage
    }
    img00001: file(relativePath: { eq: "gallery/img00001.jpeg" }) {
      ...defaultImage
    }
    img00026: file(relativePath: { eq: "gallery/img00026.jpeg" }) {
      ...defaultImage
    }
    img00003: file(relativePath: { eq: "gallery/img00003.jpeg" }) {
      ...defaultImage
    }
    img00014: file(relativePath: { eq: "gallery/img00014.jpeg" }) {
      ...defaultImage
    }
    img00008: file(relativePath: { eq: "gallery/img00008.jpeg" }) {
      ...defaultImage
    }
    img00016: file(relativePath: { eq: "gallery/img00016.jpeg" }) {
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
  return (
    <StandardPage className="" pageData={pageData} {...props}>
      <Division bigGolden>
        <div className="copy">
          <h1>About</h1>
          <p>
            Our NVC community in India is a thriving one, and it’s incredible to
            see how we’ve grown and how NVC has touched so many hundreds of
            people over the past several years.
          </p>
          <p>
            It all started with Marshall Rosenberg coming to India in 2004 for
            an International Intensive Training (IIT) in Bangalore, and then
            again in 2006 for another IIT in Pune. And then from 2010 onwards,
            we’ve had annual International Conventions, plus many other events
            with trainers and participants from all over the world.
          </p>
          <p>
            To know more about what’s happening in India, check out&nbsp;
            <Link to="https://www.facebook.com/groups/nvc.india/">
              our community Facebook Group.
            </Link>
          </p>
          <h2 className="mask-h3">Nonviolent Communication</h2>
          <p>
            Nonviolent Communication (NVC) contains nothing new. It is based on
            historical principles of nonviolence – the natural state of
            compassion when no violence is present in the heart. NVC reminds us
            what we already instinctively know about how good it feels to
            authentically connect to another human being.
          </p>
          <p>
            With NVC we learn to hear our own deeper needs and those of others.
            Through its emphasis on deep listening to ourselves as well as
            others, NVC helps us discover the depth of our own compassion. This
            language reveals the awareness that all human beings are only trying
            to honor universal values and needs, every minute, every day.
          </p>
          <p>
            NVC can be seen as both a spiritual practice that helps us see our
            common humanity, using our power in a way that honors everyone’s
            needs, and a concrete set of skills which help us create
            life-serving families and communities.
          </p>
          <p>The form is simple, yet powerfully transformative.</p>
          <Img
            fluid={props.data.nvcTreeOfLife.childImageSharp.fluid}
            className="mask-p"
            style={{ maxWidth: 400 }}
          />
          <p>
            Through the practice of NVC, we can learn to clarify what we are
            observing, what emotions we are feeling, what values we want to live
            by, and what we want to ask of ourselves and others. We will no
            longer need to use the language of blame, judgment or domination. We
            can experience the deep pleasure of contributing to each other’s
            well being.
          </p>
          <p>
            NVC creates a path for healing and reconciliation in its many
            applications, ranging from intimate relationships, work settings,
            health care, social services, police, prison staff and inmates, to
            governments, schools and social change organizations.
          </p>
          <p style={{ marginBottom: 40 }}>
            [Source:&nbsp;
            <Link to="http://www.cnvc.org/">Marshall Rosenberg and CNVC</Link>]
          </p>
        </div>
        <div>
          <h2 className="mask-h3">NVC-India on Facebook…</h2>
          <FacebookGroup />
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
      <br />
      <br />
      <Img
        fluid={props.data.pattern5.childImageSharp.fluid}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          height: 'auto',
          zIndex: -1,
          opacity: 0.95,
        }}
      />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
