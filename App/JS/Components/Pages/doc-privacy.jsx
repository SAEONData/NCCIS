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

class DOCprivacy extends React.Component {

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
          <h5>Disclaimer</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/doc-disclaimer" }}>
            <em className="fa fa-chevron-right mr-1"></em> Disclaimer</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/doc-conditions" }}>
            <em className="fa fa-chevron-right mr-1"></em> Conditions of use</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/doc-privacy" }}>
            <em className="fa fa-chevron-right mr-1"></em> Privacy policy</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
              <h5>Draft, OECD-compliant Privacy Statement</h5>
              <p>Draft Privacy Statement for SAEON-NRF</p>
              <p>Statement No 58898 </p>
              <p>Information about our Organisation and Web site </p>
              <p>Modern information and communication technologies play a fundamental role in the activities of an organisation like SAEON-NRF . We are based in South Africa </p>
              <p>Our principal activities are:</p>
              <ul>
                <li>Scientific Data</li>
                <li>Curation</li>
                <li>Environmental</li>
                <li>Monitoring and Reearch</li>
              </ul>
              <p className="mt-3"><b>Our privacy policy covers SAEON-NRF and its Web sites:</b></p>
              <table className="table-plain">
                <tr>
                <td>Organisation Name:</td>
                <td>SAEON-NRF</td>
                </tr>
                <tr>
                <td>Address:</td>
                <td>Persequor Park</td>
                </tr>
                <tr>
                <td>City, Zip:</td>
                <td>Pretoria , 0001</td>
                </tr>
                <tr>
                <td>Country:</td>
                <td>South Africa</td>
                </tr>
                <tr>
                <td>Controller:</td>
                <td>Wim Hugo</td>
                </tr>
                <tr>
                <td>Web Sites(s):</td>
                <td>www.saeon.ac.za<br />			
                    data.saeon.ac.za<br />				
                    *.saeon.ac.za domain</td>
                </tr>
              </table>
              <p className="mt-3"><b>Our privacy policy also covers our subsidiaries and their respective Web sites:</b></p>
              <table className="table-plain">
              <tr><td>Subsidiary Name:</td><td>DST-sponsored data dissemination sites</td></tr>
              <tr><td>Address:</td><td>Persequor Park</td></tr>
              <tr><td>City, Zip:</td><td>Pretoria , 0001</td></tr>
              <tr><td>Country:</td><td>South Africa</td></tr>
              <tr><td>Controller:</td><td>Wim Hugo</td></tr>
              <tr><td>Principal activity(ies):</td><td>Scientific Data Provision</td></tr>
              <tr><td>Web Sites(s):</td><td>"*.dirisa.org domain<br />
              data.saeoss.org<br />
              data.saeoss.gov.za"</td></tr>
              </table>
              <br />
              <table className="table-plain">
              <tr><td>Subsidiary Name:</td><td>ICSU-sponsored data dissemination sites</td></tr>
              <tr><td>Address:</td><td>Persequor Park</td></tr>
              <tr><td>City, Zip:</td><td>Pretoria , 0001</td></tr>
              <tr><td>Country:</td><td>South Africa</td></tr>
              <tr><td>Controller:</td><td>Wim Hugo</td></tr>
              <tr><td>Principal activity(ies):</td><td>Scientific Data Provision</td></tr>
              <tr><td>Web Sites(s) :</td><td>"wdcbhh.dirisa.org<br />
              ndcsea.dirisa.org"</td></tr>
              </table>
              <p className="mt-3"><b>Providing Visitors with Anonymous Access </b></p>
              <p>You can access our Web sites home page and browse our sites without disclosing your personal data.</p>
              <p className="mt-3"><b>The services and links of our Web sites</b></p>
              <p>Our Web sites enable you to communicate with other visitors or to post information to be accessed by others. When you do so, other visitors may collect your data. </p>
              <p>Our Web sites include links to third party Web service providers.</p>
              <p className="mt-3"><b>Automatic Collection of Information</b></p>
              <p>We automatically log personal data by means such as programming or we link information automatically logged by such means with personal data about specific individuals. We do so for the following purposes:</p>
              <ul>
                <li>Technical administration of the Web site</li>
                <li>Research and development</li>
                <li>Customer administration</li>
                <li>De-personalised metrics to data providers</li>
              </ul>
              <p>We use cookies to store session data but we do not link non-personal information stored in cookies with personal data about specific individuals.</p>
              <p className="mt-3"><b>Data Collection and Purpose Specification</b></p>
              <p>We collect the personal data that you may volunteer while using our services during registration. </p>
              <p className="mt-3"><b>xxxx</b></p>
              <p>We do not collect information about our visitors from other sources, such as public records or bodies, or private organisations. </p>
              <p><a href="http://app01.saeon.ac.za/PLATFORM_3/SAEON/Platform_Privacy_Statement_files/sheet001.htm#Table5_2" target="_blank">To access the table of personal data collected and purposes for which they are used, please click here </a></p>
              <p>We do not collect or use personal data for any purpose other than that indicated in the table below. </p>
              <p>If we wish to use your personal data for a new purpose, we will offer you the means to consent to this new purpose: by indicating in a box at the point on the site where personal data is collected </p>
              <p className="mt-3"><b>Children's Privacy </b></p>
              <p>We do not knowingly collect personal data from children.</p>
              <p>We do not take specific steps to protect the privacy of children who disclose their personal data to us. </p>
              <p>We do not provide information about our personal data practices in relation to children on our home page, or at those sites on our Web site where we collect personal data. </p>
              <p className="mt-3"><b>Disclosure and Visitor Choice</b></p>
              <p>We do not disclose your personal data to our subsidiaries or other organisations. We compile depersonalised, aggregate statistics for improvement of our services and as feedback to data providers.</p>
              <p className="mt-3"><b>Confidentiality / Security</b></p>
              <p>We do not give visitors to our Web site the option of using a secure transmission method to send us their personal data.</p>
              <p>We have implemented security policies, rules and technical measures to protect the personal data that we have under our control from:</p>
              <ul>
                <li>unauthorised access</li>
                <li>improper use or disclosure</li>
                <li>unauthorised modification</li>
                <li>unlawful destruction or accidental loss</li>
              </ul>
              <p>All our employees and data processors, who have access to, and are associated with the processing of personal data, are obliged to respect the confidentiality of our visitors' personal data. </p>
              <p>We ensure that your personal data will not be disclosed to State institutions and authorities except if required by law or other regulation. </p>
              <p className="mt-3"><b>Access to the personal data we may hold about you </b></p>
              <p>You can ask us, by sending an email ( wim@saeon.ac.za ) whether we are keeping personal data about you.</p>
              <p>We will provide you with a readable copy of the personal data which we keep about you, through e-mail. - although we may before require proof of your identity -. We will provide the information without any charge.</p>
              <p>We allow you to challenge the data that we hold about you and, where appropriate, you may have the data</p>
              <ul>
                <li>erased</li>
                <li>rectified or amended</li>
                <li>completed</li>
              </ul>
              <p>We do not reserve the right to refuse to provide you with a copy of your personal data.</p>
              <p className="mt-3"><b>Privacy Compliance </b></p>
              <p>There are no national laws or self-regulatory schemes applicable to our web site or organisation.</p>
              <p>It is compliant with the following global or regional regulatory, or self-regulatory instrument: OECD</p>
              <p>In order to demonstrate that our privacy policy accords with the above privacy instrument, we are:</p>
              
              <table className="table-plain mt-3">
                <tr>
                <td colSpan="2">voluntarily committed to a Self Assessment procedure</td>
                </tr>
                <tr>
                <td>Name or designation of the privacy policy person or service</td>
                <td>OECD</td>
                </tr>
                <tr>
                <td>URL</td>
                <td>http://www2.oecd.org/pwv3/pws10.asp</td>
                </tr>
              </table>
              <p>Privacy Support<br />If you have an enquiry or concern about our privacy policy, please contact:</p>
              <table class="table-plain mt-3">
                <tr>
                <td colSpan="2">Contact 1</td>
                </tr>
                <tr>
                <td>Name/designation</td>
                <td>Chief Data and Information Officer</td>
                </tr>
                <tr>
                <td>Email address :</td>
                <td>wim@saeon.ac.za</td>
                </tr>
              </table>
              <p>We do not recommend another means by which visitors' concerns may be addressed. </p>
              <p className="mt-3"><b>TABLE of personal data collected and purposes for which they are used </b></p>
            <table className="ea-table">
              <tr><td><a target="_parent">Primary personal data/Business information</a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>x</td>
                <td>volunteered by each visitor</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>collected from public records or bodies</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>collected from private organisations</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td rowspan="2">Primary personal data</td>
                <td rowspan="2"><a target="_parent">Technical administration of the Web site</a></td>
                <td rowspan="2"><a target="_parent">Research &amp;development</a></td>
                <td rowspan="2"><a target="_parent">Customer Administration</a></td>
                <td rowspan="2"><a target="_parent">Marketing</a></td>
                <td rowspan="2"><a target="_parent">Trading in personal data</a></td>
              </tr><tr></tr><tr><td>Name</td>
                <td>x<span></span></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Gender</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Address</td>
                <td>x<span></span></td>
                <td>x<span></span></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>E-mail address</td>
                <td>x<span></span></td>
                <td>-</td>
                <td>x<span></span></td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Phone/Fax number</td>
                <td>x<span></span></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>other (describe)</td>
                <td rowspan="2">x<span></span></td>
                <td rowspan="2">x<span></span></td>
                <td rowspan="2">-</td>
                <td rowspan="2">-</td>
                <td rowspan="2">-</td>
              </tr><tr><td>Research Domain</td>
              </tr><tr><td rowspan="2">Business Information</td>
                <td rowspan="2"><a target="_parent">Technical administration of the Web site</a></td>
                <td rowspan="2"><a target="_parent">Research &amp; development</a></td>
                <td rowspan="2"><a target="_parent">Customer Administration</a></td>
                <td rowspan="2"><a target="_parent">Marketing</a></td>
                <td rowspan="2"><a target="_parent">Trading in personal data</a></td>
              </tr><tr></tr><tr><td>Employer/organisation</td>
                <td>x<span></span></td>
                <td>x<span></span></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Job title</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Address</td>
                <td>-</td>
                <td>x<span></span></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>E-mail address</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Phone/Fax number</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>other (describe)</td>
                <td rowspan="2">x<span></span></td>
                <td rowspan="2">x<span></span></td>
                <td rowspan="2">-</td>
                <td rowspan="2">-</td>
                <td rowspan="2">-</td>
              </tr><tr><td>Organisation Type</td>
              </tr><tr><td colspan="2">Other personal details and profiling data</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>x</td>
                <td>volunteered by each visitor</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>collected from public records or bodies</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>collected from private organisations</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td></td>
                <td><a target="_parent">Technical administration of the Web site</a></td>
                <td><a target="_parent">Research &amp; development</a></td>
                <td><a target="_parent">Customer Administration</a></td>
                <td><a target="_parent">Marketing</a></td>
                <td><a target="_parent">Trading in personal data</a></td>
              </tr><tr><td><a target="_parent">Personal details</a></td>
                <td>x<span></span></td>
                <td>x<span></span></td>
                <td>x<span></span></td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">Physical description</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">Family characteristics</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">Education and skills</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">Life style or personal tastes</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">Financial resources</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>other (describe)</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Identifiers</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>x</td>
                <td>volunteered by each visitor</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>collected from public records or bodies</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>collected from private organisations</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td></td>
                <td><a target="_parent">Technical administration of the Web site</a></td>
                <td><a target="_parent">Research &amp; development</a></td>
                <td><a target="_parent">Customer Administration</a></td>
                <td><a target="_parent">Marketing</a></td>
                <td><a target="_parent">Trading in personal data</a></td>
              </tr><tr><td><a target="_parent">On-line identifiers</a></td>
                <td>x<span></span></td>
                <td>x<span></span></td>
                <td>x<span></span></td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">Financial identifiers</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">identifiers assigned by Public bodies</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">Biometrics identifiers</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>other (describe)</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td><a target="_parent">Specific Data</a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>volunteered by each visitor</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>collected from public records or bodies</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td>-</td>
                <td>collected from private organisations</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr><tr><td></td>
                <td><a target="_parent">Technical administration of the Web site</a></td>
                <td><a target="_parent">Research &amp; development</a></td>
                <td><a target="_parent">Customer Administration</a></td>
                <td><a target="_parent">Marketing</a></td>
                <td><a target="_parent">Trading in personal data</a></td>
              </tr><tr><td>Racial or ethnic origin</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Political opinions</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Religious or philosophical beliefs</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Trade union membership</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Health/Medical data</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Sex life</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>Police/Justice data such as civil/criminal actions brought by or against the visitor</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr><tr><td>other (describe)</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </table>
              <p className="mt-3"><b>Section 7: Disclosure and Visitor Choice</b></p>
              <p>We will not disclose you data to anyone outside SAEON without asking your consent first.</p>
              <p className="mt-3"><b>Section 9: Access to the personal data we may hold about you</b></p>
              <p>If you need to determine what personal data we hold for your account, please file a request under 'Support'.</p>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DOCprivacy)