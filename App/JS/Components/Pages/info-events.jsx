'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import environmental_affairs_logo from '../../../images/DEA/environmental_affairs_logo.png'
import sa_flag from '../../../images/Other/sa_flag.jpg'
// import doc_ccam from '../../../content/presentations/CC-Adaptation-Materials.pdf'


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

class INFOevents extends React.Component {

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
            <h3>Workshops and Training Courses</h3>
            <p>The Department of Environment, Forestry and Fisheries (DEFF) is running training workshops on the Climate Change Information System and other climate change related tools and systems developed by SAWS, SAEON and CSIR Green Book.  These tools can be used to track climate actions and inform policy and planning.  The workshops will also provide the opportunity to gather experience, data/information and knowledge needs from provincial stakeholders for shaping future development.</p>
            <p>The workshops will run from August 2019 to November 2019, with each provincial workshop scheduled for 2 consecutive days.</p> 
            <table className="ea-table">
            <tr><td className="td-title">		</td><td className="td-title">	Province	</td><td className="td-title">	Date	</td><td className="td-title">	Status	</td><td className="td-title">	Venue	</td></tr>
            <tr><td>	1	</td><td>	Northern Cape	</td><td>	6-7th August 2019	</td><td>	Confirmed	</td><td>	Savoy hotel	</td></tr>
            <tr><td>	2	</td><td>	KZN	</td><td>	20-21st August 2019	</td><td>	Confirmed	</td><td>	Durban Manor	</td></tr>
            <tr><td>	3	</td><td>	Mpumalanga	</td><td>	29-30th August 2019	</td><td>	Confirmed	</td><td>		</td></tr>
            <tr><td>	4	</td><td>	Limpopo	</td><td>	TBC	</td><td>		</td><td>		</td></tr>
            <tr><td>	5	</td><td>	Gauteng	</td><td>	TBC	</td><td>		</td><td>		</td></tr>
            <tr><td>	6	</td><td>	Western Cape	</td><td>	TBC	</td><td>		</td><td>		</td></tr>
            <tr><td>	7	</td><td>	North West	</td><td>	TBC	</td><td>		</td><td>		</td></tr>
            <tr><td>	8	</td><td>	Eastern Cape	</td><td>	4-5th September 2019	</td><td>	Confirmed	</td><td>		</td></tr>
            </table>
            <br /><hr />
            <Button type="button" className="btn btn-success btn-lg mb-4"  onClick={(event) => {event.preventDefault(); window.open("https://drive.google.com/open?id=1LxwhV2NXx8zX-ptZsAT8CwZQtFmDg9Xw&authuser=claire@saeon.ac.za&usp=drive_fs");}} >
            <em className="fa fa-file-pdf-o mr-1"></em> View invitation</Button>
            <br />
            {/* <h1 style={{ letterSpacing: '2px', color: 'rgb(46, 125, 50)'}}><b>NCCIS</b></h1>
              <h5 ><b>National Climate Change Information System</b></h5>
              <br />
              <div className="row text-center">
                <div className="pl-3">
                  <img src={environmental_affairs_logo} style={{ maxHeight: '100px'}} className="mr-3"  />
                  <img src={sa_flag} style={{ maxHeight: '100px'}} />
                </div>
              </div> */}
            
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
              {/* <h3>Presentaions</h3>
              <table className="table table-bordered table-hover table-striped dataTable">
              <thead><tr>
                <th>Document</th>
                <th>Link</th>
              </tr></thead>
              <tr>
                <td><button onClick={(event) => {event.preventDefault(); window.open(doc_ccam);}}>link</button></td>
                <td><button>link</button></td>
              </tr>
              </table>
              xxxx */}
            </div>
          </div>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(INFOevents)