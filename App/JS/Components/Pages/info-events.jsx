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
       <section className="ea-content-full">
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
            <div className="col-4">
            <h3>Workshops and Training Courses</h3>
            <p>The Department of Environment, Forestry and Fisheries (DEFF) is running training workshops on the Climate Change Information System and other climate change related tools and systems developed by SAWS, SAEON and CSIR Green Book.  These tools can be used to track climate actions and inform policy and planning.  The workshops will also provide the opportunity to gather experience, data/information and knowledge needs from provincial stakeholders for shaping future development.</p>
            <p>The workshops will run from August 2019 to November 2019, with each provincial workshop scheduled for 2 consecutive days.</p> 
            <br />
            <Button type="button" className="btn btn-success btn-lg mb-4"  onClick={(event) => {event.preventDefault(); window.open("https://drive.google.com/open?id=1LxwhV2NXx8zX-ptZsAT8CwZQtFmDg9Xw&authuser=claire@saeon.ac.za&usp=drive_fs");}} >
            <em className="fa fa-file-pdf-o mr-1"></em> View invitation</Button>
            {/* <hr /><br />
            <h1 style={{ letterSpacing: '2px', color: 'rgb(46, 125, 50)'}}><b>NCCIS</b></h1>
              <h5 ><b>National Climate Change Information System</b></h5>
              <br />
              <div className="row">
                <div className="ml-3">
                  <img src={environmental_affairs_logo} style={{ maxHeight: '100px'}} className="mr-3"  />
                  <img src={sa_flag} style={{ maxHeight: '100px'}} />
                </div>
              </div> */}
            </div>
            <div className="col-8">
            <table className="ea-table dataTable">
            <tr><td className="td-title">	Province	</td><td className="td-title">	Date	</td><td className="td-title">	Title	</td><td className="td-title">	Publisher	</td><td className="td-title">	Documents	</td></tr>
            <tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation on the Climate Tracking and Evaluation Portal</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1CeKhMes7ylAb0NyD-ByoQrp20fKaIH5k">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation on the National Climate Change Information System</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1HQDzgVB7qYA_erv_Xg1tLRXdgAXTKqzt">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation from the National Climate Change Information System Training Workshop: Northern Cape</td><td>South African Weather Service</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=16AT3C-XBe9iCeiEzJdvcxZfv9ubBLUcJ">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation on Climate Change Adaptation Materials</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1VADubVqA8AnBLwnQUkFX0Goc9nCg_1TW">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation on Integrated Decision Support Tools by SAEON</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1mwvamLMFqkhs1oodp_jrh8roqFaEet8n">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation on Greenbook: National Climate Change Information Systems Training Workshop Northern Cape</td><td>Council for Scientific and Industrial Research</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1GtUt6-e0d_PsK-1wyAwmB58zs7BXauV5">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation on Climate Service</td><td>South African Weather Service</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1108VihxslFdU2dw5qxbrGQz_cP_otPt4">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation on Climate Change: an Impact-based Severe Weather Warning System</td><td>South African Weather Service</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1tOsBngE2e7wzBmuDiSVEGP5KZbJrd3o0">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Presentation on Climate Change Adaptation Local Government Climate Change Support Programme / Let's Respond Toolkit</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1T56BLR_zEDn-JDUbaFwtqoTBQcPHEatv">Link</a></td></tr>
<tr><td>Northern Cape</td><td>2019-08-06</td><td>Northern Cape Province Climate Change Reponse</td><td>Norther Cape Department of Environment and Nature Conservation, Northern Cape Province, Private Bag x6102, Kimberley 8301</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=19o75f9DOuuAWNZCH4q9QCOm1EIE9qZZm">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Presentation on the Tracking and Evaluation Portal</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1FHESHadYmr7thMjoJXSt1No0GLpj7KiN">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Presentation on SAWS Research and Development</td><td>South African Weather Service</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1jyD0E3isS95t_vWcMuxE-TVd_9vny6F0">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Presentation on SAWS Impact-based Severe Weather Warning System</td><td>South African Weather Service</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1KQmMxP6KFHul04spYut4qF66P3MbJLXe">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Presentation on SAWS Climate Services Department</td><td>South African Weather Service</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1XiG_ALIvli5bzUNxss7v2ZB59F7EN3RB">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Presentation on the Integrated Decision Support Tools</td><td>South African Environmental Observation Network</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=16VbInFyOZYVosHRxCP_3b9OHpZFkyPbj">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Presentation on Climate Change Policy, Planning-Implementation and Reporting (Province of KwaZulu Natal, South Africa))</td><td>KwaZulu-Natal Department of Economic Development, Tourism and Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1fnwaXFQIUZFFA2HaCivDEaY6ukwG3AoY">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Training presentation on the National Climate Change Information System</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1EzmHNoKvag23qVp38ReFHa4ZUpDArHLC">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Video guide on the Green Book</td><td>Council for Scientific and Industrial Research</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1baq6319hfacaA3NgEOXUeM3gjyF5-DYw">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>Presentation on Climate Change Adaptation Materials</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1xney8NdRmrnmdwTmaqRDd8CecrDNaTyZ">Link</a></td></tr>
<tr><td>KZN</td><td>2019-08-20</td><td>KZN NCCIS Training Workshop presentation on Climate Change Adaptation Local Government Climate Change Support Programme / Let's Respond Toolkit</td><td>Department of Environmental Affairs</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1CN_l486fM5PBedxzldls2CwQtw4Po4Z-">Link</a></td></tr>
<tr><td>Eastern Cape </td><td>2019-09-04</td><td>SAWS - Research and Development</td><td>South African Weather Service, Eco Glades block 1b, Eco Park, cnr Olievenhoutbosch and Ribbon Grass Streets, Centurion, South Africa</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1GtLsd5L0kmKU1UCH2-U98igFDezIrROz">Link</a></td></tr>
<tr><td>Eastern Cape </td><td>2019-09-04</td><td>Climate Services Department (SAWS)</td><td>South African Weather Service, Eco Glades block 1b, Eco Park, cnr Olievenhoutbosch and Ribbon Grass Streets, Centurion, South Africa</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=17-QjnPdybkiKAmFaAQqvqx4ZbxzsdtUp">Link</a></td></tr>
<tr><td>Eastern Cape </td><td>2019-09-04</td><td>National Climate Change Information System</td><td>South African Environmental Observation Network (SAEON), PO Box 2600, Pretoria, 0001, South Africa</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1KLNtczV3SPAJL9Oog1oW-RCb6n0Yp0Kw">Link</a></td></tr>
<tr><td>Eastern Cape </td><td>2019-09-04</td><td>Climate Change - An Impact-based Severe Weather Warning System (SAWS)</td><td>South African Weather Service, Eco Glades block 1b, Eco Park, cnr Olievenhoutbosch and Ribbon Grass Streets, Centurion, South Africa</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=13jGn98Pg1cnFrx_ZZdacVjJvvGXFuLSA">Link</a></td></tr>
<tr><td>Eastern Cape </td><td>2019-09-04</td><td>GreenBook - Adapting Settlements for the Future</td><td>Council for Scientific and Industrial Research, Meiring Naudé Road, Brummeria, Pretoria, South Africa</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1DHJX1kVEnjRoW1XOEjy0xhjOUIfcTJJH">Link</a></td></tr>
<tr><td>Eastern Cape </td><td>2019-09-04</td><td>Eastern Cape Province - Overview of Climate Change Response</td><td>Eastern Cape Department of Economic Development, Environmental Affairs and Tourism, Private Bag X0054, Bhisho, 5605, South Africa</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=14QN9wx1c8i5Q0yUyA92wQ3si885mAo1U">Link</a></td></tr>
<tr><td>Eastern Cape </td><td>2019-09-05</td><td>SAEON Integrated Decision Support Tools</td><td>South African Environmental Observation Network (SAEON), PO Box 2600, Pretoria, 0001, South Africa</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1PXSJf9he0hr9iD9KErWSuYq9ijEyMTEd">Link</a></td></tr>
<tr><td>Eastern Cape </td><td>2019-09-05</td><td>Climate Change Adaptation - Local Government Climate Change Support Programme (LGCCSP), Lets Respond Toolkit</td><td>Department of Environment Affairs, Corner Steve Biko (previously Beatrix Street) and Soutpansberg Road, Environment House, 473 Steve Biko, Arcadia, Pretoria, 0083, South Africa;</td><td><a target="_blank" className="dataLink" href="https://drive.google.com/open?id=1nR7_9-e9_kBUE5nJMP1tApr0aOVJzKCa">Link</a></td></tr>
            </table>
            </div>
          </div>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(INFOevents)