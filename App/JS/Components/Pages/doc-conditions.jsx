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

class DOCconditions extends React.Component {

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
          <h5>Conditions of Use</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/doc-disclaimer" }}>
            <em className="fa fa-chevron-right mr-1"></em> Disclaimer</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-success btn-lg" onClick={() => { location.hash = "/doc-conditions" }}>
            <em className="fa fa-chevron-right mr-1"></em> Conditions of use</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/doc-privacy" }}>
            <em className="fa fa-chevron-right mr-1"></em> Privacy policy</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
              <h5>We subscribe to Open Access principles, but ask that you cite your sources.</h5>
              <p>Data, website content, and publications are generally made available under the <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>. Please read the license to familiarise yourself with its provisions.</p>
              <p>Some data sets or materials may carry additional restrictions, these are provided on a case-by-case basis.</p>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DOCconditions)