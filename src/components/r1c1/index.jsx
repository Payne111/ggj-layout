import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

class R1C1 extends Component {

  render() {
    let { children, antd, className, style } = this.props
    antd = Object.assign({}, antd, {
      className,
      style
    })
    return (
      <Row gutter={24}>
        <Col span={24} {...antd}>
          {children}
        </Col>
      </Row>
    )
  }

}

R1C1.propTypes = {
  children: PropTypes.any,
  antd: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default R1C1