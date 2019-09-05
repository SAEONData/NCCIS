'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import graph1 from '../../../Images/Other/graph1.png'
import dtree from '../../../Images/Other/desert-tree.jpg'


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

class CICghg extends React.Component {

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
          <h5>Tracking and Evaluation System</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "cic" }}>
            <em className="fa fa-chevron-right mr-1"></em> What causes climate change?</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "cic-ghg" }}>
            <em className="fa fa-chevron-right mr-1"></em> Tracking and Evaluation System</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/cic-trends" }}>
            <em className="fa fa-chevron-right mr-1"></em> Trends</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-projections" }}>
            <em className="fa fa-chevron-right mr-1"></em> Projections</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-vulnerability" }}>
            <em className="fa fa-chevron-right mr-1"></em> Vulnerability</Button></Col>
          </Row>
          <hr className="hr-thin" />
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
            <div className="row">

             

              <div className="col-12 text-center">
              <iframe className="m-auto" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMDEyMWEzZjYtMWNmNi00YjRiLWFhMmUtZWZhNjllMmRiYWZmIiwidCI6IjgyZmNmOTdlLWJmMGItNDVlMy1iNzIwLTRhNzIzYmJmZWY4MiIsImMiOjl9" frameborder="0" allowfullscreen="true"></iframe>
              
              
              
              </div>
            </div>
          
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICghg)