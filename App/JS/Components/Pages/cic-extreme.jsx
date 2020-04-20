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
          <p>South Africa is susceptible to a number of extreme weather events with the most common being floods, droughts, fires and large storms. Other disaster risks include lighting strikes, heat waves, hail damage, wind storms and sea level rise as well as possible increases in health related disasters.</p>
<p>Meteorological droughts (below average precipitation) are the most frequent disasters with 237 events being declared between 2006 and 2019. The second and third most frequent disasters are flash floods and riverine floods and the fourth agricultural drought events (low soil moisture).</p>
<p>Drought impacts stem from a combination of factors. Increasing rainfall variability is one aspect, but how this affects communities depends upon how well people, the economy and the environment can adapt.</p>
<p>Various factors may undermine people’s ability to withstand reduced water availability (a meteorological drought) and to prevent it from developing into agricultural and hydrological drought with social, economic and environmental impacts.</p>
          </div>
          </section>

          <section className="ea-content-full pt-4 pb-4 light-bg">
          <div className="container-fluid">
          {/* <h3 className="mb-4">Provincial Graphs</h3> */}
            <iframe width="100%"  border="none"  style={{ minHeight: "700px", overflowX: 'hidden' }} src="https://gis-portal.ndmc.gov.za/portal/apps/webappviewer/index.html?id=700928590ea84665b234b038eb96c210" />
          </div>
          </section>
          <section className="ea-content-full pt-4 pb-4 light-bg">
          <hr />
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-6">
              <h3 className="mb-4">Disaster Risk Management and Climate Change Adaptation</h3>
              <p>The Climate Risk and Vulnerability Handbook for Southern Africa (2nd Edition), emphasises that creating an enabling environment for both climate change adaptation and disaster risk management is critical to ensure future resilience. Both disaster risk reduction and climate change adaptation aim to mitigate climate-related risks by reducing and modifying environmental and human factors in order to support sustainable economic and social development.</p>
              <p><a href="https://www.environment.gov.za/sites/default/files/legislations/national_climatechange_response_whitepaper.pdf" target="_blank">The National Climate Change Response White Paper (NCCRP)</a> highlights disaster management as a key area of development for the country, due to the expected increase in extreme climatic events. This commitment is illustrated by the fact that the national government’s investment in disaster risk reduction and emergency response has risen from US$ 0.02 bn. to US$ 0.7 bn. between 2010 and 2015, as part of the total increase of investment in adaptation which rose from US$ 1.64 bn. to US$ 2.31 bn.</p>
              </div>
              <div className="col-6">
              <div className="light-grey-bg p-3 round-edge">
                <h3><a href="https://www.preventionweb.net/files/43291_sendaiframeworkfordrren.pdf" target="_blank">Sendai Framework for Disaster Risk Reduction 2015-2030</a></h3>
                <p>In March 2015, the Third United Nations World Conference on Disaster Risk Reduction (WCDRR) adopted the Sendai Framework for Disaster Risk Reduction 2015-2030, which was later endorsed by the UN General Assembly in its 69th session. The Sendai Framework provides the basis for a risk-informed and resilient future. The Sendai Framework specifically addresses climate change and climate action, providing measures, guiding principles and means of implementation. Sendai outcomes are a significant milestone in international cooperation for building resilience to climate-related disasters. The Sendai Framework establishes the significance of ensuring credible links on the post-2015 agenda including the sustainable development goals, financing for development, climate change and disaster risk reduction and the calls for enhanced coherence across policies, institutions, indicators, reporting and measurement systems for implementation.</p>
              </div>
              </div>
            </div>
          </div>
          </section>

    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICextreme)