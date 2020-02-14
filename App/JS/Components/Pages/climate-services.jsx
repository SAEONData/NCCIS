'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card, CardBody } from 'mdbreact'

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

class ClimateServices extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    this.props.updateNav(location.hash)
    return (
      <>
       <section className="ea-content-full">
          <div className="container-fluid mt-4">
          <h5>Climate Services</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/climate-services" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Services</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/maps-graphs" }}>
            <em className="fa fa-chevron-right mr-1"></em> Maps and Graphs</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/data-download" }}>
            <em className="fa fa-chevron-right mr-1"></em> Download Data</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container">
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
          </div>
          </section>
    </>
    
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClimateServices)