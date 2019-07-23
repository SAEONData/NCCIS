'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import home_map_4 from '../../../Images/Maps/home/4.gif'


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

class CICtrendse extends React.Component {

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
          <h5>Observed Trends in Historical Climate</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-trends" }}>
            <em className="fa fa-chevron-right mr-1"></em> Observed Trends in Historical Climate</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/cic-trends-provincial" }}>
            <em className="fa fa-chevron-right mr-1"></em> Provincial Trends in Climate</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/cic-trends-events" }}>
            <em className="fa fa-chevron-right mr-1"></em> Extreme Weather Events and Disasters</Button></Col>
          </Row>
          <hr className="hr-thin" />
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid text-center">
          <div className="row">
            <div className="col-12">
              <p className="mb-4">South Africa is susceptible to a number of extreme weather events with the most common being floods, droughts, fires and large storms. Climate events account for the largest percentage of natural disaster deaths. </p>
              <img src={home_map_4}  className="m-auto" />
            </div>
          </div>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICtrendse)