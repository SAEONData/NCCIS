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

class AboutNFCS extends React.Component {

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
          <h5>About the National Framework for Climate Services</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "cic-ghg" }}>
            <em className="fa fa-chevron-right mr-1"></em> GHG Emissions Database</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/cic-trends" }}>
            <em className="fa fa-chevron-right mr-1"></em> Trends</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-projections" }}>
            <em className="fa fa-chevron-right mr-1"></em> Projections</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-impacts" }}>
            <em className="fa fa-chevron-right mr-1"></em> Impacts</Button></Col>
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
                <hr className="mt-4 mb-4" />

                <p>The NFCS was developed by the Department of Environment, Forestry and Fisheries in partnership with the South African Weather Service (SAWS). The SAWS is responsible for the technical leadership in the implementation of the NFCS. </p>
                <p className="text-center mt-2"><strong>The NFCS is anchored on the following GFCS pillars:</strong></p>

                <div className="row text-center nfcs-pillars">
                  <div className="col-md"><div className="card active" card-block="observations"><em className="fa fa-wpexplorer"></em>Observations and Monitoring</div></div>
                  <div className="col-md"><div className="card" card-block="interface"><em className="fa fa-tv"></em>User Interface Platform</div></div>
                  <div className="col-md"><div className="card" card-block="informations"><em className="fa fa-area-chart"></em>Climate Service Information System</div></div>
                  <div className="col-md"><div className="card" card-block="modelling"><em className="fa fa-line-chart"></em>Research, Modelling and Prediction</div></div>
                  <div className="col-md"><div className="card" card-block="capacity"><em className="fa fa-group"></em>Capacity Development</div></div>
                </div>

                    <div className="card h-100 nfcs-pillars-content">
                    
                    <div className="card-body active" id="observations">
                    <h4><strong>Observations and Monitoring</strong></h4>
                    <p>The aim of this pillar is to ensure that climate observations and other data necessary to meet the needs of end users are collected, managed and disseminated and are supported by relevant metadata. The Observations and Monitoring pillar helps ensure that the climate observations necessary to meet the needs of end users are made, managed and disseminated, supported by relevant metadata.</p>
                    </div>

                    <div className="card-body" id="interface">
                    <h4><strong>User Interface Platform</strong></h4>
                    <p>User Interface Platform is the pillar of the Framework that provides a structured means for users, climate researchers and climate data and information providers to interact at all levels. The objective of the User Interface Platform is to promote effective decision making with respect to climate considerations by making sure that the right information, at the right time and in the right amount, is delivered, understood, and used.</p>
                    </div>


                    <div className="card-body" id="informations">
                    <h4><strong>Climate Service Information System</strong></h4>
                    <p>It is the principal mechanism through which information about climate (past, present and future) is routinely collected, stored and processed to generate products and services that inform decision-making processes, often complex, across a wide range of climate-sensitive activities and enterprises. It is the means by which research outputs and technological developments are transformed into improved operational climate information.</p>
                    </div>

                    <div className="card-body" id="modelling">
                    <h4><strong>Research, Modelling and Prediction</strong></h4>
                    <p>The Research, Modelling and Prediction pillar fosters research towards continually improving the scientific quality of climate information, providing an evidence base for determining the impacts of climate change and variability and for evaluating the cost effectiveness of using climate information. It supports the development and improvement of tools and methods that will facilitate the transition of research to operational climate service provision and engender practical applications of climate information. </p>
                    </div>

                    <div className="card-body" id="capacity">
                    <h4><strong>Capacity Development</strong></h4>
                    <p>The capacity development pillar will strive to enhance existing capabilities that are needed to enable manage climate risk effectively. Areas included in the capacity development pillar are governance, management, human resources development, education and training, leadership, partnership creation, science communication, service delivery, resource mobilization and infrastructure.  It is the overarching pillar since the functions undertaken in all the other four pillars (UIP, CSIS, observation and monitoring, research, modelling and prediction) depend on the available capacity. In the context of climate services, capacity development refers to the investment in people, infrastructure, practices and institutions in order to manage and assess climate related risk by providing decision relevant climate information and products.</p>
                    </div>

                    </div>
                </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutNFCS)