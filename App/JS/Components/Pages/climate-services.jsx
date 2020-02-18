'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card, CardBody } from 'mdbreact'
import ServicesData from '../../../Data/servicesData.jsx'

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

class ClimateServices extends React.Component {

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
          <h5>Climate Services</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/climate-services" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Services</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/maps-graphs" }}>
            <em className="fa fa-chevron-right mr-1"></em> Maps and Graphs</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/data-download" }}>
            <em className="fa fa-chevron-right mr-1"></em> Download Data</Button></Col>
          </Row>
          </div>
        </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <h2>Vision</h2>
                  <p>NFCS strives to enable society to better manage the risks and opportunities arising from climate variability and change, especially for those who are most vulnerable to climate related hazards.</p>
                  <h2>Mission</h2>
                  <p>The NFCS will mainstream and enhance climate observations and monitoring information, forecasting and prediction and transform these into sector -specific products and applications that can be disseminated widely, and further develop users’ capacity to manage risks of climate variability and change at all levels. This will be done through developing and incorporating science based climate information into planning, policy and practice. To be effective, the NFCS-SA will be user driven, and will address the entire value chain for the production, processing and application of climate services through local, regional and global collaborative efforts. The NFCS-SA will serve as one of enabling tools for South Africa, in the transition towards building a climate resilient country.</p>
                </div>
                <div className="col-md-6">
                  <h2>Goals</h2>
                  <p>The NFCS has five overarching goals, namely:</p>
                  <ul>
                    <li>Reducing the vulnerability of society to climate related hazards through better provision of climate information;</li>
                    <li>Advancing the key national development goals through better provision of climate information;</li>
                    <li>Mainstreaming the use of climate information in decision-making;</li>
                    <li>Strengthening the engagement of providers and users of climate services; and</li>
                    <li>Maximising the utility of existing climate service infrastructure.</li>
                  </ul>
                </div>
              </div>
              <h2 className="mt-3 mb-3">Products and Services</h2>
              <ServicesData />
              <p className="mt-3 mb-5">The above vision, mission and goals will be achieved through unpacking the products and services (solutions) offered by the South African Weather Service (Table 1a and b) and understanding the climate and weather data that have to be digitised for public good (Table 2).    These will assist in profiling the work undertaken by SAWS under the NFCS as the basis for engagements and partnerships with other key role players. Table  1a summarises the commercial products and services while Table 1b focuses on the public good services. Please note that in certain circumstances, according to the SAWS data policy, commercial products such as data can be provided for free for e.g. students.  In Table 1 the first column (SAWS products and services to inform policy, planning and decision making) consists of 2 sections  per product, i.e. (i) Type and (ii) Features /Precaution. The second column (Data/information required to create products) provides a description of the product and also, where not clear, the data/information required to create the products. The third column (Dissemination and Communication) indicates the (i) format of the product and (ii) dissemination channel(s). The next column, i.e. “partnerships” indicates where partnerships already exist, proposed future partnerships etc. In some cases SAWS might not be fully aware of potential partnerships, so these can be further expanded on in further NFCS related forums/discussions. The same applies to the last column (Phasing plan and what else needs to be done?) as some information exist where products/services are still being improved/developed and where user requirements have not been fully considered. </p>
            </div>
          </section>
    </>
    
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClimateServices)