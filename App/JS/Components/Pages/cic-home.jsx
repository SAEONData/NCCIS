'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import graph1 from '../../../Images/Other/graph1.png'
import dtree from '../../../Images/Other/desert-tree.jpg'


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

class CICghg extends React.Component {

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
          <h5>Climate Information Centre</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "cic" }}>
            <em className="fa fa-chevron-right mr-1"></em> What causes climate change?</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "cic-provincial" }}>
            <em className="fa fa-chevron-right mr-1"></em> Provincial Climate Description</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/cic-trends" }}>
            <em className="fa fa-chevron-right mr-1"></em> Trends</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-projections" }}>
            <em className="fa fa-chevron-right mr-1"></em> Projections</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-vulnerability" }}>
            <em className="fa fa-chevron-right mr-1"></em> Vulnerability</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
            <div className="row">

              {/* <div className="col-4">
              <div className="border-light-radius">
              <h5>South Africa’s Greenhouse Gas Inventory for period 2000-2012</h5><br/>
              <img src={graph1}/>
              <h5 className="mt-4">Climate Change Policy</h5><br />
              <ol>
              <li>The United Nations Framework Convention on Climate Change </li>
              <li>The Paris Agreement </li>
              <li>South Africa’s Nationally Determined Contributions, </li>
              <li>The National Climate Change Response White Paper </li>
              <li>The National Development Plan </li>
              <li>Long Term Mitigation Scenarios, and the </li>
              <li>Long Term Adaptation Scenarios</li>
              </ol>
              </div>
              </div> */}
              <div className="col-6">
              <h5 className="mt-4 mb-3">What causes climate change?</h5>
              <p>Anthropogenic emissions of greenhouse gases (the main cause of anthropogenic climate change) have increased steadily since the industrial revolution.</p>
                <p>The rate of emissions, however, have been steadily increasing over time, and computer models of the earth's climate system (including both natural and human causes) are unable to simulate recent warming unless they include anthropogenic emissions of greenhouse gases. Computer models of the earth’s climate which include only natural forcings (e.g. solar variability due to both internal and orbital variations, volcanic activity etc.) simulate a cooling of the earth after 1960, which is at odds with the observed warming.</p>
                <p>This has led the Intergovernmental Panel on Climate Change (<span onClick={(event) => {event.preventDefault(); window.open("#/info-glossary/#bm-ipcc");}} class="text-link">IPCC</span>) to conclude recently that most of the warming of the last 50 years is attributable to human activities.</p>
                <img src={dtree} />
              </div>
              <div className="col-6 pt-4 mt-3">
              <p className="mt-4"><b onClick={(event) => {event.preventDefault(); window.open("#/info-glossary/#bm-cc");}} class="text-link">Climate change</b> refers to a change in the average weather experienced in a particular region or location. The change may occur over periods ranging from decades to millennia. It may affect one or more seasons (e.g. summer, winter or the whole year) and involves changes in one or more aspects of the weather e.g. rainfall, temperature or winds. Its causes may be natural (e.g. due to periodic changes in the earth’s orbit, volcanoes and solar variability) or attributable to human (anthropogenic) activities e.g. increasing emissions of greenhouse gases such as CO2, land use change and/or emissions of aerosols. ‘Climate change’ often refers to changes due only to anthropogenic causes.</p>
              <p><b onClick={(event) => {event.preventDefault(); window.open("#/info-glossary/#bm-gw");}} class="text-link">Global warming</b> refers only to the overall warming of the Earth, based on average increases in temperature over the entire land and ocean surface. Climate change is more than simply an increase in global temperatures; it encompasses changes in regional climate characteristics, including temperature, humidity, rainfall, wind, and extreme weather events, which have economic and social dimensions.</p>
              <p><b onClick={(event) => {event.preventDefault(); window.open("#/info-glossary/#bm-cv");}} class="text-link">Climate variability</b> refers to variations in climate on all spatial and temporal scales beyond that of individual weather events. This variability may be caused by natural internal processes within the climate system. One of the most important (and widely known) examples of natural climate variability is the <span onClick={(event) => {event.preventDefault(); window.open("#/info-glossary/#bm-enso");}} class="text-link">El Niño-Southern Oscillation (ENSO)</span>. Variations may also be caused by external influences which may be due to naturally-occurring phenomena (such as periodic changes in the earth’s orbit around the sun).</p>
              </div>
            </div>
          
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICghg)