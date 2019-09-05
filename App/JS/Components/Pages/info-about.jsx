'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import environmental_affairs_logo from '../../../images/DEA/environmental_affairs_logo.png'
import sa_flag from '../../../images/Other/sa_flag.jpg'


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
          <h5>About the CCIS</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/info-about" }}>
            <em className="fa fa-chevron-right mr-1"></em> About the CCIS</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/info-glossary" }}>
            <em className="fa fa-chevron-right mr-1"></em> Glossary</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-documents" }}>
            <em className="fa fa-chevron-right mr-1"></em> Documents</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/info-events" }}>
            <em className="fa fa-chevron-right mr-1"></em> Events and News</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
          <div className="row">
            <div className="col-6">
            <p>The National Climate Change Information System (CCIS) is part of the national effort to track South Africa’s overall transition to a low carbon and climate resilient economy as required by the National Development Plan (Vision 2030) and the National Climate Change Response Policy (2011) as well as the South Africa’s Nationally Determined Contributions (NDC 2015) to the United Nations Framework Convention on Climate Change (UNFCCC). Climate change transparency is at the heart of the Paris Agreement and as such South Africa, along with other countries will need to enhance reporting on climate actions and their effects.</p>
            <p>The system monitors and evaluates climate change drivers, events, links to national objectives, targets and strategies in respect of climate change mitigation and adaptation monitoring and assessment of actions taken by stakeholders.</p>
            </div>
            <div className="col-6 text-center">
            
              <h1 style={{ letterSpacing: '2px', color: 'rgb(46, 125, 50)'}}><b>NCCIS</b></h1>
              <h5 ><b>National Climate Change Information System</b></h5>
              <br />
              <div className="row text-center">
                <div className="m-auto">
                  <img src={environmental_affairs_logo} style={{ maxHeight: '100px'}} className="mr-3"  />
                  <img src={sa_flag} style={{ maxHeight: '100px'}} />
                </div>
              </div>
            </div>
          </div>
          {/* <iframe width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMDEyMWEzZjYtMWNmNi00YjRiLWFhMmUtZWZhNjllMmRiYWZmIiwidCI6IjgyZmNmOTdlLWJmMGItNDVlMy1iNzIwLTRhNzIzYmJmZWY4MiIsImMiOjl9" frameborder="0" allowfullscreen="true"></iframe> */}
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(INFOabout)