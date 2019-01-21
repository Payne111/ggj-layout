import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

class R1CN extends Component {

  render() {
    let { children, antd, className, style } = this.props
    antd = Object.assign({}, antd, {
      className,
      style
    })
    const len = children.length
    return (
      <Row gutter={24}>
        {
          typeof children === 'string' ?
          children:
          len > 1 ?
          children.map((child, i) => (
            <Col key={i} span={child.props.col || parseInt(24 / len)} {...antd}>
              {child}
            </Col>
          )):
          children
        }
      </Row>
    )
  }

}

R1CN.propTypes = {
  children: PropTypes.any.isRequired,
  antd: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default R1CN
