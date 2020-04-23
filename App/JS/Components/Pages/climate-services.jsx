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
                <a className="nav-link active" tab-link="tab-about" >About the National Framework for Climate Services</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-saws" >Products and Services</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-c-reports" >Climate Reports</a>
              </li>
            </ul>
            <div className="tab-content card pt-5" id="mymdbTabContentMD">
              <div className="tab-pane" id="tab-saws" >
              <h2 className="mt-3 mb-3">Products and Services</h2>
              <ServicesData />
              </div>
              <div className="tab-pane show" id="tab-about" >
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
                <hr className="mt-4 mb-4" />
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="card h-100"><div className="card-body">
                    <p>The NFCS was developed by the Department of Environment, Forestry and Fisheries in partnership with the South African Weather Service (SAWS). The SAWS is responsible for the technical leadership in the implementation of the NFCS. </p>
                    <p className="text-center mt-2"><strong>The NFCS is anchored on the following GFCS pillars:</strong></p>
                    </div></div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100"><div className="card-body">
                    <h4><strong>Observations and Monitoring</strong></h4>
                    <p>The aim of this pillar is to ensure that climate observations and other data necessary to meet the needs of end users are collected, managed and disseminated and are supported by relevant metadata. The Observations and Monitoring pillar helps ensure that the climate observations necessary to meet the needs of end users are made, managed and disseminated, supported by relevant metadata.</p>
                    </div></div>
                  </div>
                  <div className="col-md-6 mb-4">
                  <div className="card h-100"><div className="card-body">
                    <h4><strong>User Interface Platform</strong></h4>
                    <p>User Interface Platform is the pillar of the Framework that provides a structured means for users, climate researchers and climate data and information providers to interact at all levels. The objective of the User Interface Platform is to promote effective decision making with respect to climate considerations by making sure that the right information, at the right time and in the right amount, is delivered, understood, and used.</p>
                    </div></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                  <div className="card h-100"><div className="card-body">
                    <h4><strong>Climate Service Information System</strong></h4>
                    <p>It is the principal mechanism through which information about climate (past, present and future) is routinely collected, stored and processed to generate products and services that inform decision-making processes, often complex, across a wide range of climate-sensitive activities and enterprises. It is the means by which research outputs and technological developments are transformed into improved operational climate information.</p>
                    </div></div>
                  </div>
                  <div className="col-md-6 mb-4">
                  <div className="card h-100"><div className="card-body">
                    <h4><strong>Research, Modelling and Prediction</strong></h4>
                    <p>The Research, Modelling and Prediction pillar fosters research towards continually improving the scientific quality of climate information, providing an evidence base for determining the impacts of climate change and variability and for evaluating the cost effectiveness of using climate information. It supports the development and improvement of tools and methods that will facilitate the transition of research to operational climate service provision and engender practical applications of climate information. </p>
                    </div></div>
                  </div>
                  <div className="col-md-12 mb-4">
                  <div className="card h-100"><div className="card-body">
                    <h4><strong>Capacity Development</strong></h4>
                    <p>The capacity development pillar will strive to enhance existing capabilities that are needed to enable manage climate risk effectively. Areas included in the capacity development pillar are governance, management, human resources development, education and training, leadership, partnership creation, science communication, service delivery, resource mobilization and infrastructure.  It is the overarching pillar since the functions undertaken in all the other four pillars (UIP, CSIS, observation and monitoring, research, modelling and prediction) depend on the available capacity. In the context of climate services, capacity development refers to the investment in people, infrastructure, practices and institutions in order to manage and assess climate related risk by providing decision relevant climate information and products.</p>
                    </div></div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-c-reports" >
                <h2 className="mt-3 mb-3">Climate Reports</h2>
                <ReportYearData />
              </div>
              
              
            </div>
          </div>

              
              
            </div>
          </section>
    </>
    
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClimateServices)