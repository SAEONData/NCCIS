'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import scape from '../../../Images/Other/scape.jpg'
import imgkeymessages2 from '../../../Images/Other/key-messages2.gif'
import CarouselClimateChange from '../../Components/Pages/Home/Carousel-climate-change.jsx'



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
          <div className="row mb-3">
            <div className="col-12">
              <p>In South Africa, significant progress has been made in projecting and understanding climate change for the region, providing an increasingly robust basis for strategy and policy development. The content presented here based on the information in Chapter 3 (Engelbrecht et al. 2018) of <a href="https://unfccc.int/sites/default/files/resource/South%20African%20TNC%20Report%20%20to%20the%20UNFCCC_31%20Aug.pdf" target="_blank">South Africa's Third National Communication to the UNFCCC</a> and draws on recent subsets of future climate projections for the country:</p>
              <ul>
                <li>Dynamically downscaled temperature and rainfall projections from the CSIR (NRE); and</li>
                <li>Statistically downscaled models from CSAG available from the <a href="cip.csag.uct.ac.za" target="_blank">Climate Information Portal</a></li>
              </ul>
              <p>Changes in climate are based on the latest set of Representative Concentration Pathways (RCPs); RCP 4.5 and RCP 8.5. RCP 4.5 describes a future with relatively ambitious emission reductions whereas RCP 8.5 describes a future with no reductions in emissions. Emissions in RCP 4.5 peak around 2040, then decline and in RCP 8.5 emissions continue to rise throughout the 21st century.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h5 className="mb-4">Key messages from Regional Climate Projections</h5>
              <div className="text-center w-100"><img src={imgkeymessages2} /></div>
            </div>
            <div className="col-6 d-flex align-items-center">
              <div className="p-3 bg-primary mt-4 round-edge">
                <p><b>South Africa is expected to experience:</b></p>
                <ul>
                <li className="mb-2">Increase in mean, maximum and minimum temperatures.</li>
                <li className="mb-2">Increase in very hot days – above 35 °C and the frequency of heat wave events.</li>
                <li className="mb-2">Drier conditions in the future, with regional variation. </li>
                <li className="mb-2">Slight increases in rainfall towards the north-eastern region. </li>
                <li className="mb-2">A strong drying signal over the southwestern region, which could result in reductions in rainfall of more than 40 mm per year. </li>
                <li className="mb-2">Increase in the frequency of extreme rainfall events (20 mm of rain falling within 24 hours) over eastern parts during the summer months.</li>
                <li className="mb-2">Sea level rise and an increase in the frequency and intensity of sea storms, accompanied by increases in wave heights</li>
                <li>Increase in the number of high fire danger days over north-eastern region and along the Cape south coast and the south-western Cape.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <hr />
          <div className="row">
            <div className="col-6">
            <div className="border-light-radius">
                <h5>Box 1: Determining Future Climate</h5>
                <p><b>Global climate models</b>, or global circulation models (GCMs), comprise the fundamental tools used for assessing the causes of past change and to project long-term future change (2030–2060). These complex computer models represent interactions between the different components of the climate system, such as the land surface, the atmosphere and the oceans. Projected changes in climate are dependent on the future levels of greenhouse gas emissions in the atmosphere which in turn are crucially dependent on society’s behaviour and policy choices. Global climate models (GCMs) simulate climate under a range of emission scenarios each representing a plausible future. The IPCC Special Report on Emissions Scenarios (SRES) described four possible ‘story lines’ (A1, B1, A2 and B2), each assuming different paths of development for the world. In the IPCC Fifth Assessment Report (AR5), Representative Concentration Pathways (RCPs) replaced the SRES emission scenarios and were used as the basis of the climate projections presented in AR5. The RCP’s are named according to their 2100 radiative forcing level. There are four pathways - RCP2.6, RCP4.5, RCP6.0 and RCP8.5. Whilst RCPs have replaced the SRES emission scenarios in current assessments, the outputs of older SRES GCM simulations and associated downscaled models remain valid.</p>
                <p>GCM's have a very coarse resolution (200-300 km) and often cannot capture the physical processes and features of the landscape which are important determinants of local and regional climates. Downscaling techniques translate the changes in the large-scale atmospheric circulation to finer spatial scales. Two main types of downscaling methodologies may be employed, namely statistical (empirical) and dynamical downscaling.</p>
              </div>
            </div>
            <div className="col-6">
              <div className="border-light-radius">
                <h5>Box 2: Climate change projections in vulnerability assessments</h5>
                <p>Choosing the single ‘best’ GCM or downscaled projection for a vulnerability assessment is problematic as future scenarios are all linked to the representation of physical and dynamical processes within that specific model. By using one model this may create the impression of a narrowly determined future, which may not fully span the range of potential future change.</p>
                <p>The most suitable approach to be taken is to use the largest number of climate change projections as possible and that future change is expressed either as a narrative of potential future changes expressed as future scenarios (e.g. wetter and hotter) or as a summary statistic (e.g. percentiles) of the distribution of projected changes, with some measure or recognition of the spread of possible future climates also provided.</p>
                <p>The degree of certainty in a finding, such as change in rainfall, is based on the consistency of evidence such as data, mechanistic understanding, models, theory and expert judgement and agreement between the different models</p>
              </div>
            </div>
          </div>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
          <h5 className="mb-3">Climate Change Maps</h5>
          <p>Projected change in temperature and rainfall over South Africa obtained from a set of dynamical downscalings conducted by the CSIR - NRE. The change in each variable (see Box 2) is expressed as an anomaly, the difference between the average climate over a period of the last several decades (1971-2000), and the projected climate (short to medium term 2021 to 2050). The change is based on the median (50th percentile) of the ensemble  of six dynamically downscaled GCMs. Changes in climate are based on RCP 4.5 and RCP 8.5. </p>
          <CarouselClimateChange />
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICprojections)