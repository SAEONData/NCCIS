'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button,Card,CardBody } from 'mdbreact'


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

class CICimpacts extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    this.props.updateNav(location.hash)
    return (
      <>
       <section class="ea-content-full">
          <div className="container-fluid mt-4">
          <div className="row d-sm-none d-md-none d-lg-none">
            <div className="col-6"><h5>Actions</h5></div>
            <div className="col-6">
              {/* <IconList></IconList> */}
            </div>
          </div>
          <h5>Impacts of Extreme Climate Events</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "cic-ghg" }}>
            <em className="fa fa-chevron-right mr-1"></em> GHG Emissions Database</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/cic-trends" }}>
            <em className="fa fa-chevron-right mr-1"></em> Trends</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-projections" }}>
            <em className="fa fa-chevron-right mr-1"></em> Projections</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/cic-impacts" }}>
            <em className="fa fa-chevron-right mr-1"></em> Impacts</Button></Col>
          </Row>
          <hr className="hr-thin" />
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
        
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

export default connect(mapStateToProps, mapDispatchToProps)(CICimpacts)