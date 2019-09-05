'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import ToolsData from '../../../Data/toolsData.jsx'


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

class INFOtools extends React.Component {

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
           <ToolsData />
            </div>
          </section>
    </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(INFOtools)