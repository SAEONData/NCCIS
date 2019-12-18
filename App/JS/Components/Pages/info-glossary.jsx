'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import environmental_affairs_logo from '../../../images/DEA/environmental_affairs_logo.png'
import sa_flag from '../../../images/Other/sa_flag.jpg'


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

class INFOglossary extends React.Component {

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
          <h5>Glossary</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-about" }}>
            <em className="fa fa-chevron-right mr-1"></em> About the CCIS</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-success btn-lg" onClick={() => { location.hash = "/info-glossary" }}>
            <em className="fa fa-chevron-right mr-1"></em> Glossary</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-documents" }}>
            <em className="fa fa-chevron-right mr-1"></em> Documents</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-events" }}>
            <em className="fa fa-chevron-right mr-1"></em> Events and News</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg ea-list-p">
          <p><b>Adaptation</b> is a means of responding to the impacts of climate change. It is “the process of adjustment to actual or expected climate and its effects. In human systems, adaptation seeks to moderate harm or exploit beneficial opportunities. In natural systems, human intervention may facilitate adjustment to expected climate and its effects” (Field et al. 2014).It aims to moderate the impacts as well as to take advantage of new opportunities or to cope with the consequences of new conditions. </p>
          <p><b>Adaptive capacity</b> refers to the varying characteristics that determine how a climate event is experienced. It refers to the ability of systems, institutions, humans, and other organisms to adjust to potential damage, to take advantage of opportunities, or to respond to consequences (IPCC, 2014).  The capacity to adapt is dependent on a region’s socio-economic and environmental situation as well as the availability of information and technology. Adaptive capacity can reflect the status of poverty, health, knowledge/education, and governance.</p>
          <p>An <b>early warning system (EWS)</b> refers to “the set of capacities needed to generate and disseminate timely and meaningful warning information to enable individuals, communities and organizations threatened by a hazard to prepare and to act appropriately and in sufficient time to reduce the possibility of harm or loss” (UNIDSR, 2007).</p>
          <p>An <b>extreme (weather or climate) event</b>  is the unusual, severe or unseasonal occurrence of a weather or climate variable at the extremes of the historically observed values; the range that has been observed in the past. </p>
          <p id="bm-cc"><b>Climate change</b> refers to a change in the average weather experienced in a particular region or location. The change may occur over periods ranging from decades to millennia. It may affect one or more seasons (e.g. summer, winter or the whole year) and involve changes in one or more aspects of the weather, e.g. rainfall, temperature or winds. Its causes may be natural (e.g. due to periodic changes in the earth’s orbit, volcanoes and solar variability) or attributable to human activities, e.g. increasing emissions of greenhouse gases such as CO2, land use change and/or emissions of aerosols. Commonly, the term ‘climate change’ often refers to changes due to anthropogenic causes.</p>
          <p><b>Climate</b> refers to the average of individual weather conditions in an area, taken over sufficiently long periods of time.</p>
          <p><b>Climate-smart disaster risk reduction (CSDRM)</b> has been borne out the need to integrate disaster risk reduction and climate change adaptation. CSDRM is considered as the initial step to adapting to climate change and variability, providing policymakers with practical measures to allocate resources to reduce current and future risks at all levels (Mitchell et al. 2010; Davis-Reddy & Vincent 2018).</p>
          <p id="bm-cv"><b>Climate variability</b> refers to variations in climate on all spatial and temporal scales beyond that of individual weather events. This variability may be caused by natural internal processes within the climate system. One of the most important (and widely known) examples of natural climate variability is the El Niño-Southern Oscillation (ENSO). Variations may also be caused by external influences which may be due to naturally-occurring phenomena (such as periodic changes in the earth’s orbit around the sun). </p>
          <p><b>A disaster</b> is a serious disruption of the functioning of a community or society due to a physical event resulting in widespread human, material, economic or environmental losses that require immediate emergency response. A disaster is a negative outcome brought about by high vulnerability (or low adaptive capacity) in the face of exposure to an often sudden event. It is for this reason that an event of similar magnitude in one place may translate into a disaster, but in another may not, depending on the capacity of the population to cope.</p>
          <p><b>Disaster risk management (DRM)</b> refers to the  “integrated multisectoral and multidisciplinary administrative, organisational and operational planning processes and capacities aimed at lessening the impacts of natural hazards and related environmental, technological and biological disasters” (Republic of South Africa 2015). Disaster risk management includes all forms of activities to avoid (prevention) or to limit (mitigation and preparedness) the adverse effects of hazards. </p>
          <p><b>Disaster risk reduction (DRR)</b> is defined as the process of “reducing disaster risks through systematic efforts to analyse and manage the causal factors of disasters, including through reduced exposure to hazards, lessened vulnerability of people and property, wise management of land and the environment, and improved preparedness for adverse events” (UNIDSR, 2007). DRR includes all forms of activities to avoid (prevention) or to limit (mitigation and preparedness) the adverse effects of hazards.</p>
          <p><b>Droughts</b> may refer to “meteorological drought (below average precipitation), hydrological drought (low river flows and water levels in rivers, lakes and groundwater), agricultural drought (low soil moisture), and environmental drought (a combination of the above)” (Stocker et al. 2013). In this report, drought refers to the extended period of unusually low precipitation that produces a shortage of water (CRED 2015).</p>
          <p><b>Exposure</b> refers to the presence of people, livelihoods, species or ecosystems, environmental functions, services, and resources, infrastructure, or economic, social, or cultural assets in places and settings that could be adversely affected (IPCC, 2014).  </p>
          <p><b>Extreme temperature</b> refers to both cold waves and heat waves (CRED 2015).</p>
          <p><b>Floods</b> refer to riverine, flash and coastal flood events and in South Africa are the result of tropical cyclones, cut-off lows, and thunderstorms which cause heavy rainfall and high runoff volumes (CRED 2015).</p>
          <p id="bm-gw"><b>Global warming</b> refers only to the overall warming of the Earth, based on average increases in temperature over the entire land and ocean surface. Climate change is more than simply an increase in global temperatures; it encompasses changes in regional climate characteristics, including temperature, humidity, rainfall, wind, and extreme weather events, which have economic and social dimensions. </p>
          <p><b>A hazard</b> refers to the physical parameters (e.g. rainfall or temperature) that may cause property damage, loss of livelihoods and services, economic disruption, or environmental damage.  A hazard can be incremental temperature or precipitation change, which unfolds gradually over a long time, or it can refer to weather-related hazards, such as droughts, floods and heat waves. </p>
          <p><b>Impacts</b>, in the context of this website, refer to the effects of climate change on natural and human systems (IPCC 2012). </p>
          <p id="bm-ipcc"><b>IPCC</b>The Intergovernmental Panel on Climate Change (IPCC) is the United Nations body for assessing the science related to climate change.</p>
          <p><b>Mitigation</b> refers to the measures taken to reduce the emission of greenhouse gases and to enhance sinks (i.e. ways of reducing) of greenhouse gases. </p>
          <p><b>Projection</b> is a statement of a possible (hopefully likely) future state of the climate system dependent on the evolution of a set of key factors over time (e.g. carbon dioxide emissions). </p>
          <p><b>Radiative forcing</b> is a measure of the energy absorbed and retained in the lower atmosphere. </p>
          <p><b>Representative Concentration Pathways</b> (RCPs) are four greenhouse gas concentration trajectories adopted by the IPCC Fifth Assessment Report and describe four possible climate futures. The RCP’s are named according to their 2100 radiative forcing level. There are four pathways - RCP2.6, RCP4.5, RCP6.0 and RCP8.5. </p>
          <p><b>Resilience</b> is defined as the capacity for a socio-ecological system to (a) absorb stresses and maintain normal functioning in the face of external stress and (b) to adapt in order to be better prepared to future impacts (Folke 2006).  </p>
          <p><b>Risk</b> refers to the likelihood of an adverse impact from an event. Risk is often represented as the probability of occurrence of hazardous events or trends multiplied by the impacts if these events or trends occur. Risk results from the interaction of vulnerability, exposure, and hazard (Field et al. 2014).</p>
          <p><b>Sensitivity</b> is the degree to which a system or species is affected, either adversely or beneficially, by climate variability or change. The effect may be direct (e.g., a change in crop yield in response to a change in the mean, range, or variability of temperature) or indirect (e.g., damages caused by an increase in the frequency of coastal flooding due to sea level rise) (Field et al. 2014).</p>
          <p><b>Storms</b> refer to tropical, extra-tropical and convective storm events as well as coastal storm surges (CRED 2015).</p>
          <p id="bm-enso">The <b>El Niño-Southern Oscillation</b> (ENSO) is a recurring natural climate phenomenon that is caused by abnormal warming in sea surface temperatures across the Equatorial Pacific is usually associated with high temperatures and below normal rainfall in the southern hemisphere. </p>
          <p><b>Vulnerability</b> is the “propensity or predisposition to be adversely affected. Vulnerability encompasses a variety of concepts and elements including sensitivity or susceptibility to harm and lack of capacity to cope and adapt” (Field et al. 2014).</p>
          <p><b>Weather</b> describes the set of meteorological phenomena we experience on a daily basis. Weather conditions might be sunny and hot, or cloudy and rainy. We expect changes in weather to occur from day to day. </p>
          <p><b>Wildfires</b> refer to any uncontrolled and non-prescribed burning of plants in a natural setting (CRED 2015). The occurrence of fires is closely linked with high temperatures and dry spells and are generally the result of deliberate or accidental actions of people (Forsyth et al. 2010).</p>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(INFOglossary)