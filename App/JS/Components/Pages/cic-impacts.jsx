'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'


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
            <p>Determining future climate</p>
            <p>Global climate models, or global circulation models (GCMs), comprise the fundamental tools used for assessing the causes of past change and to project long-term future change (2030–2060). These complex computer models represent interactions between the different components of the climate system, such as the land surface, the atmosphere and the oceans. Projected changes in climate are dependent on the future levels of greenhouse gas emissions in the atmosphere which in turn are crucially dependent on society’s behaviour and policy choices. Global climate models (GCMs) simulate climate under a range of emission scenarios each representing a plausible future. The IPCC Special Report on Emissions Scenarios (SRES) described four possible ‘story lines’ (A1, B1, A2 and B2), each assuming different paths of development for the world. In the IPCC Fifth Assessment Report (AR5), Representative Concentration Pathways (RCPs) replaced the SRES emission scenarios and were used as the basis of the climate projections presented in AR5. The RCP’s are named according to their 2100 radiative forcing level. There are four pathways - RCP2.6, RCP4.5, RCP6.0 and RCP8.5. Whilst RCPs have replaced the SRES emission scenarios in current assessments, the outputs of older SRES GCM simulations and associated downscaled models remain valid.</p>
            <p>GCM's have a very coarse resolution (200-300 km) and often cannot capture the physical processes and features of the landscape which are important determinants of local and regional climates. Downscaling techniques translate the changes in the large-scale atmospheric circulation to finer spatial scales.</p>
            <p>Two main types of downscaling methodologies may be employed, namely statistical (empirical) and dynamical downscaling</p>
          
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICimpacts)