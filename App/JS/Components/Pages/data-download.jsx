'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button} from 'mdbreact'
import DataDownloadContent from './data-download-content.jsx'
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

class DataDownload extends React.Component {

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
          <h5>Download Data</h5>
          <Row>
          <Col md="auto"><Button type="button" title="The National Framework for Climate Services" className="btn btn-success btn-lg tooltip-ea" onClick={() => { location.hash = "/about-NFCS" }}>
            <em className="fa fa-chevron-right mr-1"></em> About the NFCS</Button></Col>
          <Col md="auto"><Button type="button" title="Projections, reports, extremes, seasonal and provincial averages" className="btn btn-success btn-lg tooltip-ea" onClick={() => { location.hash = "/climate-services" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Services</Button></Col>
          <Col md="auto"><Button type="button" title="Geographical exploration of climate extremes" className="btn btn-success btn-lg tooltip-ea" onClick={() => { location.hash = "/climate-atlas" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Atlas</Button></Col>
          <Col md="auto"><Button type="button" title="Download climate and related sector datasets" className="btn btn-success-active btn-lg tooltip-ea" onClick={() => { location.hash = "/data-download" }}>
            <em className="fa fa-chevron-right mr-1"></em> Download Data</Button></Col>
          </Row>
          </div>
          </section>
          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
            <div className="container">
              <DataDownloadContent />
            </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDownload)