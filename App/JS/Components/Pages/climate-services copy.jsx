'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card, CardBody } from 'mdbreact'

import ReportYearData from '../../../Data/2019Data.jsx'
import DataDownloadContent from './data-download-content.jsx'

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
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/about-NFCS" }}>
            <em className="fa fa-chevron-right mr-1"></em> About the NFCS</Button></Col>
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
                <a className="nav-link" tab-link="tab-c-reports" >Climate Reports</a>
              </li>
            </ul>
            <div className="tab-content card pt-5" id="mymdbTabContentMD">
              <div className="tab-pane show" id="tab-saws" >
              <div className="card h-100"><div className="card-body"><h2>Our Vision</h2>
                    <p>National Framework for Climate Services (NFCS) strives to enable society to better manage the risks and opportunities arising from climate variability and change, especially for those who are most vulnerable to climate related hazards. 
                    <a href="/#/about-NFCS"> Read more about the National Framework for Climate Services</a></p>
                    </div></div>
                    <DataDownloadContent />
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