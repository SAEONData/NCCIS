'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import CollapsePage from './cic-projections-prov-a.jsx'
import SouthAfricaMap from '../../../Images/Maps/southafrica.jsx'


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

class CICprojectionsp extends React.Component {

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
          <h5>Climate Change Projections</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-projections" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Projections</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success-active btn-lg" onClick={() => { location.hash = "/cic-projections-provincial" }}>
            <em className="fa fa-chevron-right mr-1"></em> Provincial Changes in Climate</Button></Col>
          </Row>
          <hr className="hr-thin" />
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
              <SouthAfricaMap />
              </div>
              <div className="col-8">
              <CollapsePage />
              </div>
            </div>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICprojectionsp)