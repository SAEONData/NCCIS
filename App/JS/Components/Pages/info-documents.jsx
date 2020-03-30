'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import DatatablePage from '../../../Data/reportData.jsx'
import TrackingData from '../../../Data/trackingData.jsx'
import PolicyLData from '../../../Data/policyData.jsx'
import GuidelinesData from '../../../Data/guidelinesData.jsx'
import SpatialData from '../../../Data/spatialData.jsx'
import ToolsData from '../../../Data/toolsData.jsx'
import InternationalData from '../../../Data/internationalData.jsx'
import ProvincialData from '../../../Data/provincialData.jsx'

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

class INFOabout extends React.Component {

  constructor(props) {
    super(props);
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
          <h5>Documents</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-about" }}>
            <em className="fa fa-chevron-right mr-1"></em> About the CCIS</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/info-glossary" }}>
            <em className="fa fa-chevron-right mr-1"></em> Glossary</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/info-documents" }}>
            <em className="fa fa-chevron-right mr-1"></em> Documents</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-events" }}>
            <em className="fa fa-chevron-right mr-1"></em> Events and News</Button></Col>
          </Row>
         </div>
         </section>

         <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
           <div className="container-fluid ea-tabs">
            <ul className="nav nav-tabs md-tabs" id="myTabMD" role="tablist">
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link active" tab-link="tab-reports" >Reports</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-tracking" >Tracking and Evaluation</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-policy" >Policy and Legislation</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-guidelines" >Guidelines</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-spatial" >Spatial Planning</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-tools" >Tools</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-international" >International</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-provincial" >Provincial</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" href="http://www.letsrespondtoolkit.org/climate-change-resources/downloads" target="_blank" >LTAS</a>
              </li>
            </ul>
            <div className="tab-content card pt-5" id="mymdbTabContentMD">
              <div className="tab-pane show" id="tab-reports" >
                <DatatablePage />
              </div>
              <div className="tab-pane" id="tab-tracking">
                <TrackingData />
              </div>
              <div className="tab-pane" id="tab-policy" >
                <PolicyLData />
              </div>
              <div className="tab-pane" id="tab-guidelines">
                <GuidelinesData />
              </div>
              <div className="tab-pane" id="tab-spatial" >
                <SpatialData />
              </div>
              <div className="tab-pane" id="tab-tools">
                <ToolsData />
              </div>
              <div className="tab-pane" id="tab-international">
                <InternationalData />
              </div>
              <div className="tab-pane" id="tab-provincial">
                <ProvincialData />
              </div>
            </div>
          </div>
          </section>
    </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(INFOabout)