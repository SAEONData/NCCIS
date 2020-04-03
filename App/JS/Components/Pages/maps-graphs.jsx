'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card, CardBody,MDBLightbox  } from 'mdbreact'
import RainfallMaps from '../galleries/gal-rainfall-maps.jsx'
import RainfallGraphs from '../galleries/gal-rainfall-graphs.jsx'
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

class MapsGraphs extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    this.props.updateNav(location.hash)
    return (
      <>
       <section className="ea-content-full">
          <div className="container-fluid mt-4">
          <h5>Maps and Graphs</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/climate-services" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Services</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/climate-atlas" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Atlas</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/maps-graphs" }}>
            <em className="fa fa-chevron-right mr-1"></em> Maps and Graphs</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/data-download" }}>
            <em className="fa fa-chevron-right mr-1"></em> Download Data</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
            <h2 className="mt-5 mb-3">Rainfall and Temperature:</h2>
            <RainfallMaps />

            <h2 className="mt-5 mb-3">Provincial Annual Rainfall:</h2>
            <RainfallGraphs />
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapsGraphs)