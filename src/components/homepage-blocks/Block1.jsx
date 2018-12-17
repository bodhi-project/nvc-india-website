// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import AnimateOnChange from 'react-animate-on-change'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Carousel from 'antd/lib/carousel'
import '@bodhi-project/antrd/lib/se-concern-lwes-type/3.10.0/carousel/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import LeadSlide from './LeadSlide'
import Slide from './Slide'

import banner from '../../assets/banner.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const headings = ['NVC Community', 'Network', 'Community']

const texts = [
  'In chapter 1, "Down the Rabbit-Hole", in the midst of shrinking, Alice waxes philosophic concerning what final size she will end up as, perhaps "going out altogether, like a candle"; this pondering reflects the concept of a limit.',
  'In chapter 2, "The Pool of Tears", Alice tries to perform multiplication but produces some odd results: "Let me see: four times five is twelve, and four times six is thirteen, and four times seven is—oh dear! I shall never get to twenty at that rate!"',
  'In chapter 7, "A Mad Tea-Party", Dormouse give examples in which semantic value of a sentence A is not the same as converse of A (ex. "Why, you might just as well say that "I see what I eat" is the same thing as "I eat what I see!")',
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  position: 'relative',

  '& .slick-dots': {
    right: '80px !important',
  },

  '& .ant-carousel .slick-dots li button': {
    width: '40px !important',
    height: '40px !important',
    marginBottom: '12px !important',
    borderRadius: '50% !important',
  },
})
const componentStyle = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Block1 */
class Block1 extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
    }

    this.update = this.update.bind(this)
  }

  /** update */
  update(current) {
    this.setState({
      current,
    })
  }

  /** standard renderer */
  render() {
    const { current } = this.state
    const slideNumber = current + 1

    return (
      <div className={componentStyle}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            top: '6.25vh',
            left: 0,
            zIndex: 999,
          }}
        >
          <h1 style={{ textAlign: 'center', marginBottom: 0 }}>
            NVC Community
          </h1>
          <h2
            style={{
              marginBottom: 0,
              textAlign: 'center',
              fontWeight: 900,
              fontStyle: 'italic',
            }}
          >
            blah blah blah…
          </h2>
        </div>
        <div
          style={{ position: 'absolute', bottom: 440, left: -40, zIndex: 1000 }}
        >
          <p style={{ transform: 'rotate(-90deg)', margin: 0 }}>
            <AnimateOnChange
              baseClassName=" "
              animationClassName="animated faster fadeInUpBig"
              animate={slideNumber !== current}
            >
              {slideNumber}
            </AnimateOnChange>
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <strong>3</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ letterSpacing: '-3px', fontSize: '80%' }}>
              –––––––––––––––
            </span>
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            left: 40,
            zIndex: 1000,
            maxWidth: 380,
          }}
        >
          <p style={{ marginBottom: 0 }}>
            <AnimateOnChange
              baseClassName=" "
              animationClassName="animated faster fadeInUpBig"
              animate={slideNumber !== current}
            >
              <strong>{headings[current]}</strong> – {texts[current]}
            </AnimateOnChange>
          </p>
        </div>
        <Carousel
          autoplay={false}
          dots
          fade
          vertical
          infinite
          afterChange={this.update}
        >
          <LeadSlide image={banner} />
          <Slide image={banner} />
          <Slide image={banner} />
        </Carousel>
        <div
          style={{ position: 'absolute', bottom: 80, right: 40, zIndex: 1000 }}
        >
          <p style={{ marginBottom: 0 }}>
            <strong>Follow us</strong>
            &nbsp;–&nbsp;
            <Link to="https://twitter.com/nimasmaster">Facebook</Link>
          </p>
        </div>
      </div>
    )
  }
}

Block1.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default Block1
