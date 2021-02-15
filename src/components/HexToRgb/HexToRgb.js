import React from 'react'
import PropTypes from 'prop-types'

function HexToRgb(props) {
  const color = props.color.match(/.{1,2}/g)

  const checkValue = (color) => {
    return color.match(/[^\dabcdefABCDEF]/gm)
  }

  if (checkValue(color[1]) || checkValue(color[2]) || checkValue(color[3])) {
    return 'Error'
  }

  const rgb = {
    r: parseInt(color[1], 16),
    g: parseInt(color[2], 16),
    b: parseInt(color[3], 16),
  }

  return (
    <div>
      rgb({rgb.r}, {rgb.g}, {rgb.b})
    </div>
  )
}

HexToRgb.propTypes = {
  color: PropTypes.string.isRequired,
}

export default HexToRgb
