import React from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Radio } from '@mui/material'
import './../../index.css'

const RadioButton = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { answer, index, setSelectedOption, correct } = props
  return (
        <FormControlLabel className={correct} onClick={() => setSelectedOption(index)} key={index} value={answer} control={<Radio />} label={answer} />
  )
}

RadioButton.propTypes = {
  answer: PropTypes.string,
  index: PropTypes.string,
  setSelectedOption: PropTypes.void,
  correct: PropTypes.object
}

export default RadioButton
