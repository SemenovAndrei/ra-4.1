import React, { useState } from 'react'
import './Converter.css'
import HexToRgb from '../HexToRgb/HexToRgb'

function Converter(props) {
  const [color, setColor] = useState('# ')
  const [colorBody, setColorBody] = useState('#ffffff')

  const body = document.getElementsByTagName('body')[0]
  body.style.backgroundColor = colorBody

  const handleSubmit = (evt) => {
    evt.preventDefault()

    console.log(color)
  }

  const handleChange = ({ target }) => {
    if (target.value.length === 8) {
      setColorBody(`#${target.value.substring(2)}`)
    }

    if (target.value.length > 8) {
      return
    }

    setColor(`# ${target.value.substring(2)}`)
  }

  return (
    <div className="Converter">
      <form className="Converter-form" onSubmit={handleSubmit}>
        <input
          id="colorHEX"
          type="text"
          name="colorHEX"
          value={color}
          onChange={handleChange}
          className="Converter-form-field"
          autoFocus
        />
      </form>
      <div className="Converter-output">
        {color.length > 7 && <HexToRgb color={color} />}
      </div>
    </div>
  )
}

export default Converter
