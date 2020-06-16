import React from 'react'
import PropTypes from 'prop-types'

const icons = {
  checkmark:
    'M281.6 896c-6.552 0-13.102-2.499-18.102-7.499l-256-256c-9.997-9.997-9.997-26.206 0-36.203s26.206-9.997 36.205 0l237.898 237.898 698.699-698.698c9.997-9.997 26.206-9.997 36.203 0s9.998 26.206 0 36.205l-716.8 716.8c-5 4.998-11.55 7.498-18.102 7.498z',
  cancel:
    'M548.203 537.6l442.698-442.699c9.998-9.997 9.998-26.206 0-36.203-9.997-9.998-26.206-9.998-36.203 0l-442.698 442.699-442.699-442.698c-9.997-9.998-26.206-9.998-36.203 0s-9.998 26.206 0 36.203l442.699 442.698-442.698 442.699c-9.998 9.997-9.998 26.206 0 36.203 4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499l442.699-442.698 442.699 442.699c4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499c9.998-9.997 9.998-26.206 0-36.203l-442.698-442.698z',
  plus:
    'M947.2 512h-435.2v-435.2c0-14.138-11.462-25.6-25.6-25.6s-25.6 11.462-25.6 25.6v435.2h-435.2c-14.138 0-25.6 11.461-25.6 25.6s11.462 25.6 25.6 25.6h435.2v435.2c0 14.139 11.462 25.6 25.6 25.6s25.6-11.461 25.6-25.6v-435.2h435.2c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6z',
  minus:
    'M947.2 563.2h-921.6c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h921.6c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z',
  chevronUp:
    'M0 768c0 6.552 2.499 13.102 7.499 18.101 9.997 9.998 26.206 9.998 36.203 0l442.698-442.698 442.699 442.698c9.997 9.998 26.206 9.998 36.203 0s9.998-26.206 0-36.203l-460.8-460.8c-9.997-9.998-26.206-9.998-36.203 0l-460.8 460.8c-5 5-7.499 11.55-7.499 18.102z',
  chevronDown:
    'M0 307.2c0-6.552 2.499-13.102 7.499-18.101 9.997-9.998 26.206-9.998 36.203 0l442.698 442.698 442.699-442.698c9.997-9.998 26.206-9.998 36.203 0s9.998 26.206 0 36.203l-460.8 460.8c-9.997 9.998-26.206 9.998-36.203 0l-460.8-460.8c-5-5-7.499-11.55-7.499-18.102z',
  chevronLeft:
    'M716.8 1024c6.552 0 13.102-2.499 18.101-7.499 9.998-9.997 9.998-26.206 0-36.203l-442.698-442.698 442.698-442.699c9.998-9.997 9.998-26.206 0-36.203s-26.206-9.998-36.203 0l-460.8 460.8c-9.998 9.997-9.998 26.206 0 36.203l460.8 460.8c5 5 11.55 7.499 18.102 7.499z',
  chevronRight:
    'M256 1024c-6.552 0-13.102-2.499-18.101-7.499-9.998-9.997-9.998-26.206 0-36.203l442.698-442.698-442.698-442.699c-9.998-9.997-9.998-26.206 0-36.203s26.206-9.998 36.203 0l460.8 460.8c9.998 9.997 9.998 26.206 0 36.203l-460.8 460.8c-5 5-11.55 7.499-18.102 7.499z',
}

const Icon = (props) => {
  return (
    <svg
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox='0 0 1024 1024'>
      <path d={icons[props.icon]}></path>
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  size: 16,
}

export default Icon
