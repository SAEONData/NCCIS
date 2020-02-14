'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact'
import Claire from '../../../Images/Other/claire.png'
import Tsepang from '../../../Images/Other/Tsepang.jpg'
import Leo from '../../../Images/Other/leo.jpg'


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

class Contact extends React.Component {

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
          <div className="row d-sm-none d-md-none d-lg-none">
            <div className="col-6"><h5>Actions</h5></div>
            <div className="col-6">
              {/* <IconList></IconList> */}
            </div>
          </div>
          <h5>Contact us</h5>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container">
            <h2 style={{marginBottom:50}}>Primary contacts:</h2>
          <div className="row">
            <div className="col-md-4">
              <Card>
                <CardBody>
                  <p className="text-center"><img className="pro-pic" src={Tsepang} /></p>
                  <h4>Tsepang Makholela</h4>
                  <p className="contact-p">Contact Tsepang for CCIS Project-related discussions.
                  </p><strong>tmakholela [at] environment.gov.za</strong>
                </CardBody>
              </Card>

            </div>
            <div className="col-md-4">
              <Card>
                <CardBody>
                  <p className="text-center"><img className="pro-pic" src={Claire} /></p>
                  <h4>Claire Davis-Reddy</h4>
                  <p className="contact-p">Discuss new data products and ideas with Claire, as well as stakeholder engagement.
                  </p><strong>claire [at] saeon.ac.za</strong>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <CardBody>
                  <p className="text-center"><img className="pro-pic" src={Leo} /></p>
                  <h4>Leo Chiloane</h4>
                  <p className="contact-p">Talk to Leo about data access and contributing your data, as well as data agreements between your organisation and SAEON or DEFF.
                  </p><strong>leo [at] saeon.ac.za</strong>
                </CardBody>
              </Card>
            </div>
            </div><div className="row mt-3">
            <div className="col-md-12">
              <Card>
                <CardBody>
                  <h4>Submit a Ticket</h4>
                  <p>If you encounter any technical issues, please submit a ticket to our support desk where we will keep you notified as the issue is resolved.
                  <br /><a href="https://saeon.atlassian.net/servicedesk/customer/portal/7" target="_blank" className="btn btn-primary">Submit Support Ticket</a></p>
                </CardBody>
              </Card>
            </div>
            </div>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)