'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact'
import { Divider } from 'antd';

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNav: payload => {
      dispatch({ type: "NAV", payload })
    }
  }
}

class ComingSoon extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateNav(location.hash)
  }

  render() {

    return (
      <Card>
        <CardBody>
          <div
            style={{ backgroundColor: 'white', border: '1px solid gainsboro', borderRadius: 10, padding: '15px 15px 5px' }}
          >
            <h5 style={{ margin: 0 }}>
              <b>Coming Soon</b>
            </h5>

            <hr style={{ marginTop: 10 }} />

            <p style={{ overflowY: 'auto', paddingRight: 15 }}>
              This page will be online in our next release. Come back to check for feature additions
            </p>
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon)