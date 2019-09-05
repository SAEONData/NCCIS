'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import environmental_affairs_logo from '../../../../images/DEA/environmental_affairs_logo.png'
import sa_flag from '../../../../images/Other/sa_flag.jpg'
import doc_nc1 from '../../../../content/presentations/Climate_Change_Adaptation_Local_Government_Climate_Change_Support_Programme_LGCCSP__Let_s_Respond_Toolkit.pdf'
import doc_nc2 from '../../../../content/presentations/Climate_Change_An_Impact-based_Sever_Weather_Warning_System.pdf'
import doc_nc3 from '../../../../content/presentations/Climate_Service-Observation_Climate_Data_Climate_Information_and_Climate_Data_Analysis_and_Research.pdf'
import doc_nc4 from '../../../../content/presentations/GREENBOOK__National_Climate_Change_Information_Systems_Training_Workshop_Northern_Cape.pdf'
import doc_nc5 from '../../../../content/presentations/Integrated_Decision_Support_Tools_by_SAEON.pdf'
import doc_nc6 from '../../../../content/presentations/Let_s_Respond_Toolkit__Climate_Change_Adaptation_Materials.pdf'
import doc_nc7 from '../../../../content/presentations/National_Climate_Change_Information_System__Integrating_Data_and_Decision-Support.pdf'
import doc_nc8 from '../../../../content/presentations/National_Climate_Change_Information_System_Training_Workshop__Northern_Cape_SAWS_-_Research_and_Development.pdf'
import doc_nc9 from '../../../../content/presentations/Tracking_and_Evaluation_Portal.pdf'


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

class eventnc6aug2019 extends React.Component {

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
          <h5>Events and News</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-about" }}>
            <em className="fa fa-chevron-right mr-1"></em> About the CCIS</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/info-glossary" }}>
            <em className="fa fa-chevron-right mr-1"></em> Glossary</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-documents" }}>
            <em className="fa fa-chevron-right mr-1"></em> Documents</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/info-events" }}>
            <em className="fa fa-chevron-right mr-1"></em> Events and News</Button></Col>
          </Row>

          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h3>Northern Cape</h3>
              <h5>6-7th August 2019</h5>
              <p><b>Venue:</b> Savoy hotel</p>
              <table className="table table-bordered table-hover table-striped dataTable mt-3">
              <thead><tr>
                <th>Document</th>
                <th>Link</th>
              </tr></thead>

              <tr><td>Climate Change Adaptation: Local Government Climate Change Support Programme (LGCCSP) / Let's Respond Toolkit</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc1);}}>view</button></td></tr>
              <tr><td>Climate Change: An Impact-based Sever Weather Warning System</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc2);}}>view</button></td></tr>
              <tr><td>Climate Service - Observation, Climate Data, Climate Information and Climate Data Analysis and Research</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc3);}}>view</button></td></tr>
              <tr><td>GREENBOOK: National Climate Change Information Systems Training Workshop Northern Cape</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc4);}}>view</button></td></tr>
              <tr><td>Integrated Decision Support Tools by SAEON</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc5);}}>view</button></td></tr>
              <tr><td>Let's Respond Toolkit: Climate Change Adaptation Materials</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc6);}}>view</button></td></tr>
              <tr><td>National Climate Change Information System  Integrating Data and Decision-Support</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc7);}}>view</button></td></tr>
              <tr><td>National Climate Change Information System Training Workshop  Northern Cape SAWS - Research and Development</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc8);}}>view</button></td></tr>
              <tr><td>Tracking and Evaluation Portal</td><td><button onClick={(event) => {event.preventDefault(); window.open(doc_nc9);}}>view</button></td></tr>

              </table>
            
            </div>
            <div className="col-6 text-center">
            <h1 style={{ letterSpacing: '2px', color: 'rgb(46, 125, 50)'}}><b>NCCIS</b></h1>
              <h5 ><b>National Climate Change Information System</b></h5>
              <br />
              <div className="row">
                <div className="m-auto">
                  <img src={environmental_affairs_logo} style={{ maxHeight: '100px'}} className="mr-3"  />
                  <img src={sa_flag} style={{ maxHeight: '100px'}} />
                </div>
              </div>
            </div>
          </div>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(eventnc6aug2019)