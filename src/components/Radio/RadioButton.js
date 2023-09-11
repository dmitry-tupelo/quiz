import React from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Radio } from '@mui/material'

const RadioButton = (props) => {
  const { answer, index, setSelectedOption } = props
  return (
        <FormControlLabel onClick={() => setSelectedOption(index)} key={index} value={answer} control={<Radio />} label={answer} />
  )
}

RadioButton.propTypes = {
  answer: PropTypes.string,
  index: PropTypes.string,
  setSelectedOption: PropTypes.void
}

export default RadioButton
