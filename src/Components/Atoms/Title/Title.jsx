import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string.isRequired
}

function Title ({ text }) {
  return (
    <h1 className='font-light text-black'>
      { text }
    </h1>
  )
}

Title.propTypes = propTypes
export default Title
