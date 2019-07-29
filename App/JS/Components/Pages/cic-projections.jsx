'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import scape from '../../../Images/Other/scape.jpg'


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

class CICprojections extends React.Component {

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
          <h5>National Climate Projections</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "cic-projections" }}>
            <em className="fa fa-chevron-right mr-1"></em> National Climate Projections</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/cic-projections-provincial" }}>
            <em className="fa fa-chevron-right mr-1"></em> Provincial Changes in Climate</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={(event) => {event.preventDefault(); window.open("https://greenbook.co.za");}}>
            <em className="fa fa-chevron-right mr-1"></em> Municipal Changes in Climate</Button></Col>
          </Row>
          <hr className="hr-thin" />
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
          <p>In South Africa, significant progress has been made in projecting and understanding climate change for the region, providing an increasingly robust basis for strategy and policy development.</p>
          <p>The latest key messages from dynamically downscaled temperature and rainfall projections from the CSIR (NRE) are described for South Africa for the short to medium term 2021 to 2050. Detailed information in temperature and rainfall futures can be found here based on statistical downscaling from CSAG and dynamical downscaling by CCAM CSIR.</p>
          <p>CSAG Climate Information Portal, <a href="http://cip.csag.uct.ac.za/webclient2/app/" target="_blank">cip.csag.uct.ac.za</a></p>
          <hr />
          <div className="row">
            <div className="col-6">
            <img className="w-100 mb-4" src={scape} />
            <p>CSIR's existing set of 50km resolution CORDEX (Coordinated Regional Downscalling Experiment) projections of future climate change.</p>
            <p>The projections used in the Green Book are for 2 of the mitigation scenarios, namely:</p>
            <p>1. RCP 8.5 - where low mitigation is implemented<br />
            2. RCP 4.5 - where high mitigation is implemented</p>
            <p>For each of these emission pathways, 6 global circulation models (GCMs) that contributed to Assessment Report Five (AR5) of the intergovernmental Panel on Climate Change (IPCC) were downscaled to a 50km resolution over the globe, as part of the CSIR's contribution to CORDEX.</p>
            <p>
            Changes in climate are based on RCP 4.5 and RCP 8.5 (see Box 1). RCP 4.5 describes a future with relatively ambitious emission reductions whereas RCP 8.5 describes a future with no reductions in emissions. Emissions in RCP 4.5 peak around 2040, then decline and in RCP 8.5 emissions continue to rise throughout the 21st century.
            </p>
            </div>
            <div className="col-6">
              <div className="border-light-radius">
                <h5>Box 1: Determining Future Climate</h5>
                <p><b>Global climate models</b>, or global circulation models (GCMs), comprise the fundamental tools used for assessing the causes of past change and to project long-term future change (2030–2060). These complex computer models represent interactions between the different components of the climate system, such as the land surface, the atmosphere and the oceans. Projected changes in climate are dependent on the future levels of greenhouse gas emissions in the atmosphere which in turn are crucially dependent on society’s behaviour and policy choices. Global climate models (GCMs) simulate climate under a range of emission scenarios each representing a plausible future. The IPCC Special Report on Emissions Scenarios (SRES) described four possible ‘story lines’ (A1, B1, A2 and B2), each assuming different paths of development for the world. In the IPCC Fifth Assessment Report (AR5), Representative Concentration Pathways (RCPs) replaced the SRES emission scenarios and were used as the basis of the climate projections presented in AR5. The RCP’s are named according to their 2100 radiative forcing level. There are four pathways - RCP2.6, RCP4.5, RCP6.0 and RCP8.5. Whilst RCPs have replaced the SRES emission scenarios in current assessments, the outputs of older SRES GCM simulations and associated downscaled models remain valid.</p>
                <p>GCM's have a very coarse resolution (200-300 km) and often cannot capture the physical processes and features of the landscape which are important determinants of local and regional climates. Downscaling techniques translate the changes in the large-scale atmospheric circulation to finer spatial scales. Two main types of downscaling methodologies may be employed, namely statistical (empirical) and dynamical downscaling.</p>
              </div>
            </div>
          </div>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICprojections)