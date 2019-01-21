import React, { Component } from 'react'
import PropTypes from 'prop-types'
import R1C1 from '../r1c1'

class Groove extends Component {

  render() {
    return (
      <R1C1 style={{ marginBottom: 20 }}></R1C1>
    )
  }
}

Groove.propTypes = {
  children: PropTypes.any
}

export default Groove