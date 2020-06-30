'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card, CardBody } from 'mdbreact'
import DataSAWS from '../../../images/data/saws.jpg'
import DataCSIR from '../../../images/data/csir.jpg'
import DataCSAG from '../../../images/data/csag.jpg'
import RainfallMaps from '../galleries/gal-rainfall-maps.jsx'
import RainfallGraphs from '../galleries/gal-rainfall-graphs.jsx'
import ReportYearData from '../../../Data/2019Data.jsx'
import DataDownloadContent from './data-download-content.jsx'
import ServicesData from '../../../Data/servicesData.jsx'
import '../../Components/Iconlist/IconList.css'
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
          <Col md="auto"><Button type="button" title="The National Framework for Climate Services" className="btn btn-success btn-lg tooltip-ea" onClick={() => { location.hash = "/about-NFCS" }}>
            <em className="fa fa-chevron-right mr-1"></em> About the NFCS</Button></Col>
          <Col md="auto"><Button type="button" title="Projections, reports, extremes, seasonal and provincial averages" className="btn btn-success-active btn-lg tooltip-ea" onClick={() => { location.hash = "/climate-services" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Services</Button></Col>
          <Col md="auto"><Button type="button" title="Geographical exploration of climate extremes" className="btn btn-success btn-lg tooltip-ea" onClick={() => { location.hash = "/climate-atlas" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Atlas</Button></Col>
          <Col md="auto"><Button type="button" title="Download climate and related sector datasets" className="btn btn-success btn-lg tooltip-ea" onClick={() => { location.hash = "/data-download" }}>
            <em className="fa fa-chevron-right mr-1"></em> Download Data</Button></Col>
          </Row>
          </div>
        </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
            <div className="container-fluid">

            <div className="container-fluid ea-tabs">
            <ul className="nav nav-tabs md-tabs" id="myTabMD" role="tablist">
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link active" tab-link="tab-saws" >Products and Services:</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-c-projections" >Climate Projections</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-c-reports" >Climate Reports</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link"  onClick={() => { location.hash = "/climate-atlas" }} >Climate Extremes</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-c-mapsgraphs" >Maps and Graphs</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-c-saws" >SAWS Products and Services</a>
              </li>
            </ul>
            <div className="tab-content card pt-5" id="mymdbTabContentMD">
              <div className="tab-pane pb-4  show" id="tab-saws" >
                <h2 className="mb-5mt-3">Products and services:</h2>
                <div className="row cs-blocks">
                  <div className="col-md-3">
                    <div className="card h-100"><div className="card-body">
                      <h2>Climate Projections</h2>
                      <p className="cs-description">View future climate projections for South Africa provided by SAWS, CSAG and the CSIR.</p>
                      <Button type="button" className="btn btn-success tab-link" tab-link="tab-c-projections">
                      <em className="fa fa-line-chart mr-1"></em> View projections</Button>
                    </div></div>
                  </div>
                  <div className="col-md-3">
                    <div className="card h-100"><div className="card-body">
                      <h2>Climate Reports</h2>
                      <p className="cs-description">Annual State and Trends in Extreme Climate Indices in South Africa provided by SAWS.</p>
                      <Button type="button" className="btn btn-success tab-link" tab-link="tab-c-reports">
                      <em className="fa fa-clipboard mr-1"></em> Read reports</Button>
                    </div></div>
                  </div>
                  <div className="col-md-3">
                    <div className="card h-100"><div className="card-body">
                      <h2>Climate Extremes</h2>
                      <p className="cs-description">Geographical data on extreme climate conditions, such as coastal flooding and drought tendencies.</p>
                      <Button type="button" className="btn btn-success"  onClick={() => { location.hash = "/climate-atlas" }}>
                      <em className="fa fa-search mr-1"></em> Explore datasets</Button>
                    </div></div>
                  </div>
                  <div className="col-md-3">
                    <div className="card h-100"><div className="card-body">
                      <h2>Maps and Graphs</h2>
                      <p className="cs-description">View provincial annual rainfall and seasonal average rainfall and temperature. </p>
                      <Button type="button" className="btn btn-success tab-link" tab-link="tab-c-mapsgraphs">
                      <em className="fa fa-bar-chart mr-1"></em> View data</Button>
                    </div></div>
                  </div>
                  <div className="col-md-3">
                    <div className="card h-100 mt-4"><div className="card-body">
                      <h2>SAWS Products and Services</h2>
                      <p className="cs-description">Climate summaries, Technical papers, reports and more to inform policy, planning and decision making.</p>
                      <Button type="button" className="btn btn-success tab-link" tab-link="tab-c-saws">
                      <em className="fa fa-eye mr-1"></em> View information</Button>
                    </div></div>
                  </div>
                </div>
              
                    
              </div>

              <div className="tab-pane" id="tab-c-reports" >
                <h2 className="mt-3 mb-3">Climate Reports</h2>
                <ReportYearData />
              </div>

              <div className="tab-pane" id="tab-c-projections" >
                <h2 className="mt-3 mb-3">Climate Projections</h2>
                <div className="row">
                <div className="col-md-4">
                  <div className="dataDownTableInner">
                  <h5>Climate Projections from SAWS:</h5>
                  <img src={DataSAWS} />
                  <a href="http://www.sasdi.net/search.aspx?guid=4787c3db-12ac-3350-5d75-1b829e1b1504&control=hide&noframe=true&tab=Results" target="_blank" className="btn btn-success">Go Data <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
                <div className="col-md-4">
                <div className="dataDownTableInner">
                <h5>Climate Projections from CSAG</h5>
                <img src={DataCSAG} />
                <a href="http://www.sasdi.net/search.aspx?guid=3444145e-0213-9a66-ca49-2a20de03e1b9&control=hide&noframe=true&tab=Results" target="_blank" className="btn btn-success">Go to Data <em className="fa fa-database ml-2"></em></a>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="dataDownTableInner">
                <h5>Climate Projections from CSIR</h5>
                <img src={DataCSIR} />
                <a href="http://www.sasdi.net/search.aspx?guid=16625c5d-9112-91bc-e632-8f7408d15f3d&control=hide&noframe=true&tab=Analysis" target="_blank" className="btn btn-success">Go to Data <em className="fa fa-database ml-2"></em></a>
                </div>
              </div>
                </div>
              </div>



              <div className="tab-pane" id="tab-c-mapsgraphs" >
                <h2 className="mt-3 mb-3">Maps and Graphs</h2>
                <h3 className="mt-5 mb-3">Rainfall and Temperature:</h3>
                <RainfallMaps />

                <h3 className="mt-5 mb-3">Provincial Annual Rainfall:</h3>
                <RainfallGraphs />
              </div>

              <div className="tab-pane" id="tab-c-saws" >
                <h2 className="mt-3 mb-3">SAWS Products and Services</h2>
                <ServicesData />
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