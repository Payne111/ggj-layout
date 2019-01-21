import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

class R1CC extends Component {

  render() {
    let { children, cols } = this.props
    return (
      <Row gutter={24}>
        {
          typeof children === 'string' ?
            <Col span={cols[0].span}>
              {children}
            </Col> :
            children.length > 1 ? 
            children.map((child, i) => {
              let { span, antd } = cols[i]
              return (
                <Col key={i} span={span} {...antd}>
                  {child}
                </Col>
              )
            }):
              <Col span={cols[0].span} {...cols[0].antd}>
                {children}
              </Col> 
        }
      </Row>
    )
  }

}

R1CC.propTypes = {
  children: PropTypes.any.isRequired,
  cols: PropTypes.array.isRequired
}

export default R1CC