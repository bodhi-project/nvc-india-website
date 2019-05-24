// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import { graphql } from 'gatsby'
import moment from 'moment'
import 'moment/locale/en-gb'

import isUndefined from 'lodash/isUndefined'
// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'

import typefn from '@bodhi-project/typography/lib/methods/type'

import Image from '@bodhi-project/components/lib/Image'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/wonky/3.16.2/row/style/css'
import '@bodhi-project/antrd/lib/wonky/3.16.2/col/style/css'

import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import ContainerDimensions from 'react-container-dimensions'

import Popover from 'antd/lib/popover'
import '@bodhi-project/antrd/lib/wonky/3.16.2/popover/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Events',
  nakedPageSlug: 'events',
  pageAbstract:
    'In addition to NVC training events, we offer practice groups across the country. Join us to deepen your learning.',
}

const typeClass = typefn({
  kit: 'pom2jme',
  options: {
    range: [12, 22],
    paragraphSpacingFactor: 1.2,
    headingParagraphGapSpacingFactor: 0.95,
    indentParagraphs: false,
  },
})

const localizer = BigCalendar.momentLocalizer(moment)

const eventsData = [
  {
    id: 0,
    title: 'Connection as Life Energy – NVC Level 1 (Auroville)',
    allDay: true,
    start: new Date(2019, 7, 3),
    end: new Date(2019, 7, 5),
    resource: {
      abstract:
        'A path of Nonviolence offers both a deeply-rooted consciousness of oneness, as well as very practical tools to live this more and more in our daily lives.',
      link:
        'https://www.joylivinglearning.org/events/featured/2019/aug/connection-as-life-energy',
    },
  },
  {
    id: 1,
    title: 'Connection as Life Energy – NVC Level 1 (Auroville)',
    allDay: true,
    start: new Date(2019, 8, 21),
    end: new Date(2019, 8, 23),
    resource: {
      abstract:
        'A path of Nonviolence offers both a deeply-rooted consciousness of oneness, as well as very practical tools to live this more and more in our daily lives.',
      link:
        'https://www.joylivinglearning.org/events/featured/2019/sept/connection-as-life-energy',
    },
  },
  {
    id: 2,
    title: 'Connection as Life Energy – NVC Level 1 (Auroville)',
    allDay: true,
    start: new Date(2019, 10, 2),
    end: new Date(2019, 10, 4),
    resource: {
      abstract:
        'A path of Nonviolence offers both a deeply-rooted consciousness of oneness, as well as very practical tools to live this more and more in our daily lives.',
      link:
        'https://www.joylivinglearning.org/events/featured/2019/nov/connection-as-life-energy',
    },
  },
  {
    id: 3,
    title: 'International Intensive Training',
    allDay: true,
    start: new Date(2020, 0, 17),
    end: new Date(2020, 0, 26),
    resource: {
      abstract:
        'Announcing an upcoming IIT in India. More details coming soon…',
      link:
        'https://www.facebook.com/photo.php?fbid=10219614493577953&set=gm.3317628828262876&type=3&theater&ifg=1',
    },
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    pattern2: file(relativePath: { eq: "patterns/pattern2.png" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .rbc-event-content': {
    pointerEvents: 'none',
  },

  '&.popup': {
    maxWidth: 250,
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  /**
   * [description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  const goTo = event => {
    if (!isUndefined(window)) {
      const tab = window.open(event.resource.link, '_blank')
      tab.focus()
    }
  }

  const components = {
    event: data => {
      return (
        <div
          className={style}
          style={{
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          className="mask-p"
        >
          <Popover
            content={
              <div className={`${typeClass} ${style} popup`}>
                <p
                  style={{
                    marginBottom: 0,
                    padding: '0.5rem 1rem 0.5rem 1rem',
                  }}
                >
                  <span style={{ fontSize: '75%' }}>
                    <strong>{data.title}</strong>
                    <br />
                    {data.event.resource.abstract}
                    <br />
                    <i style={{ color: '#285BA1' }}>
                      Click for more information…
                    </i>
                  </span>
                </p>
              </div>
            }
            title={false}
          >
            <span style={{ fontSize: '90%' }}>{data.title}</span>
          </Popover>
        </div>
      )
    },
  }

  return (
    <StandardPage className="" pageData={pageData} {...props}>
      <div style={{ position: 'relative', width: '100%' }}>
        <Img
          fluid={props.data.pattern2.childImageSharp.fluid}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 500,
            height: 'auto',
            zIndex: -1,
            opacity: 0.45,
          }}
        />
        <Division bigGolden style={{ zIndex: 100 }}>
          <div className="copy">
            <h1>Events</h1>
            <ContainerDimensions>
              {({ width }) => {
                const height = Math.round(width * 0.75)
                return (
                  <div
                    style={{
                      height,
                      width,
                    }}
                  >
                    <BigCalendar
                      localizer={localizer}
                      events={eventsData}
                      startAccessor="start"
                      endAccessor="end"
                      onSelectEvent={event => goTo(event)}
                      views={['month']}
                      components={components}
                      tooltipAccessor={null}
                    />
                  </div>
                )
              }}
            </ContainerDimensions>
          </div>
          <div>
            <h2 className="mask-h3">Practice Groups</h2>
            <p>
              In addition to NVC training events, we offer practice groups
              across the country. Join us to deepen your learning.
            </p>
            <h3 className="mask-h4">Auroville</h3>
            <p>
              Wednesdays: 4.30-6.30pm
              <br />
              Contact L’aura:&nbsp;
              <Link to="mailto:joylivinglearning@gmail.com">
                joylivinglearning@gmail.com
              </Link>
            </p>
            <h3 className="mask-h4">Bangalore</h3>
            <p>
              Sundays (alternate): 9.30-11.30am
              <br />
              Contact Ranjitha
            </p>
            <h3 className="mask-h4">Delhi</h3>
            <p>
              Fridays: 6.30-8.30pm
              <br />
              Contact Sudha
            </p>
          </div>
        </Division>
      </div>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
