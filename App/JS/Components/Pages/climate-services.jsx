'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card, CardBody } from 'mdbreact'
import ServicesData from '../../../Data/servicesData.jsx'
import ReportYearData from '../../../Data/2019Data.jsx'

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
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/climate-atlas" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Atlas</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/maps-graphs" }}>
            <em className="fa fa-chevron-right mr-1"></em> Maps and Graphs</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/data-download" }}>
            <em className="fa fa-chevron-right mr-1"></em> Download Data</Button></Col>
          </Row>
          </div>
        </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
            <div className="container-fluid">

            <div className="container-fluid ea-tabs">
            <ul className="nav nav-tabs md-tabs" id="myTabMD" role="tablist">
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link active" tab-link="tab-saws" >Products and Services</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-2019" >2019 Climate Reports</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-about" >About the National Framework for Climate Services</a>
              </li>
            </ul>
            <div className="tab-content card pt-5" id="mymdbTabContentMD">
              <div className="tab-pane show" id="tab-saws" >
              <h2 className="mt-3 mb-3">Products and Services</h2>
              <ServicesData />
              </div>
              <div className="tab-pane" id="tab-about" >
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
              </div>
              <h2 className="mt-3 mb-3">2019 Climate Reports</h2>
              <ReportYearData />
              </div>
              <div className="tab-pane show" id="tab-2019" >
              
            </div>
          </div>

              
              
            </div>
          </section>
    </>
    
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClimateServices)