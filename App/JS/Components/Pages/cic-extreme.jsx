'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import CarouselExtreme from './Home/Carousel-extreme.jsx'
import LightboxPage from './../galleries/gal-disasters.jsx'


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

class CICextreme extends React.Component {

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
          <div className="row d-sm-none d-md-none d-lg-none">
            <div className="col-6"><h5>Actions</h5></div>
            <div className="col-6">
              {/* <IconList></IconList> */}
            </div>
          </div>
          <h5>Extreme Weather Events and Disasters</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-trends" }}>
            <em className="fa fa-chevron-right mr-1"></em> National Trends in Climate</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/cic-trends-provincial" }}>
            <em className="fa fa-chevron-right mr-1"></em> Provincial Trends in Climate</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/cic-trends-events" }}>
            <em className="fa fa-chevron-right mr-1"></em> Extreme Weather Events and Disasters</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-2 light-bg">
          <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <p>At the global scale, the frequency, extent and severity of natural disasters have increased notably over the last several years and economic losses from weather- and climate-related disasters have also increased (<a href="https://www.ipcc.ch/site/assets/uploads/2018/03/SREX_Full_Report-1.pdf" target="_blank" >Intergovernmental Panel on Climate Change Report</a>).</p>
              <p className="light-grey-bg p-3 round-edge">Climate-related disasters have come to dominate the disaster risk landscape accounting for upwards of <b>80% of reported disasters worldwide</b> (Centre for Research on the Epidemiology of Disasters - <a href="https://www.cred.be/" target="_blank">https://www.cred.be/</a>).</p>
            </div>
            <div className="col-6">
              <p>Climate change is expected to increase the frequency, intensity, spatial extent, duration, and timing of many extreme weather-related events, which without reductions in vulnerability will increase the risk of disasters.</p>
              <p>More frequent and intense events combined with a growing and urbanising population and increasing value in urban and built infrastructure imply greater exposure to such events. The expected increase in weather-related disasters as a result of climate change are expected to negatively impact food production and water supply, infrastructure, settlements, and human well-being. </p>
            </div>
          </div>
          </div>
          </section>

          <section className="ea-content-full pt-4 pb-4 bg-light">
          <div className="container-fluid">
            <CarouselExtreme />
          </div>
          </section>

          <section className="ea-content-full pt-4 pb-4 light-bg">
          <div className="container-fluid">
            <LightboxPage />
          </div>
          </section>

    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICextreme)