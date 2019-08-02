'use strict'

import { Button, Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fa, Navbar as MDBNavbar, NavbarNav, NavbarToggler, NavItem, NavLink } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';
import { DEAGreen } from "../../config/colours.js";
import { ssoBaseURL, ccrdSiteBaseURL, ndaoSiteBaseURL } from '../../../js/config/serviceURLs.js';
import DASL from '../pages/Tools/DASL.jsx';
import NDMC from '../pages/Tools/NDMC.jsx';
import LRT from '../pages/Tools/LRT.jsx';
import NCCRD from '../pages/Tools/NCCRD.jsx';
import NWIS from '../pages/Tools/NWIS.jsx';
import SARVA from '../pages/Tools/SARVA.jsx';
import { data as NavData } from '../../../data/sideNavData';
import IconList from '../Iconlist/index.jsx'
import EASearch from '../search/search.jsx';



const _gf = require('../../globalFunctions')

const mapStateToProps = (state, props) => {
  let user = state.oidc.user
  let { general: { showSideNav } } = state
  let { navigation: { locationHash } } = state
  return { user, locationHash, showSideNav }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSideNav: payload => {
      dispatch({ type: "TOGGLE_SIDENAV", payload })
    }
  }
}

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      collapse: false,
      isWideEnough: false,
      listsDropOpen: false,
      showDASL: false,
      showLRT: false,
      showNCCRD: false,
      showNWIS: false,
      showSARVA: false,
      showNDMC: false
    }

    this.onClick = this.onClick.bind(this)
    this.listsDropToggle = this.listsDropToggle.bind(this)
  }

  // componentDidUpdate(){
  //   let { user } = this.props
  //   if(user){
  //     console.log("USER", user)
  //   }
  // }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  listsDropToggle() {
    this.setState({
      listsDropOpen: !this.state.listsDropOpen
    });
  }

  render() {

    let { locationHash, user, showSideNav, toggleSideNav } = this.props
    let { showDASL, showLRT, showNCCRD, showNWIS, showSARVA, showNDMC } = this.state

    return (
      <>
        <MDBNavbar
          size="sm"
          color="white"
          light
          expand="md"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 15px 10px -15px",
            borderTop: "1px solid rgba(0, 0, 0, 0.3)",
            paddingTop: 2,
            paddingBottom: 2,
            zIndex: 3
          }}
        >

          {!this.state.isWideEnough && <NavbarToggler style={{ backgroundColor: DEAGreen }} onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>

            {/* LEFT */}
            <NavbarNav left>

              {
                NavData.enabled &&
                <Button size="sm" color="grey" onClick={() => { toggleSideNav(!showSideNav) }}
                  style={{ width: "45px", marginLeft: "0px", marginRight: "15px", paddingLeft: "18px" }}>
                  <Fa icon="bars" />
                </Button>
              }
              <NavItem>
                <Button size="sm" onClick={() => { location.hash = "/" }}
                  style={{ 
                    width: "45px", marginLeft: "0px", marginRight: "0px", paddingLeft: "18px", float: "left",
                    color: "#000",
                    boxShadow: "none",
                    fontSize: "20px",
                    padding: "0"
                    }}>
                  <Fa icon="home" />
                </Button>
              </NavItem>
              <NavItem>
                
                <Dropdown>
                  <DropdownToggle nav caret>
                    <b>Climate Information Centre</b>
                  </DropdownToggle>
                  <DropdownMenu>
                  <DropdownItem onClick={() => { location.hash = "cic" }}>
                    What causes climate change?
                    </DropdownItem>
                    <hr style={{ marginTop: "0px"}} />
                    <DropdownItem onClick={() => { location.hash = "cic-ghg" }}>
                    GHG Emissions Database
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "cic-trends" }}>
                      Trends
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "cic-projections" }}>
                      Projections
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "cic-vulnerability" }}>
                      Vulnerability
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "cic-extreme" }}>
                      Extreme Weather Events and Disasters
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <b>Financing Climate Change</b>
                  </DropdownToggle>
                  <DropdownMenu>

                    <DropdownItem onClick={() => { window.open(ndaoSiteBaseURL, "_blank") }}>
                      National Desired Adaptation Outcomes
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => { window.open(ccrdSiteBaseURL, "_blank") /*this.setState({ showNCCRD: true })*/ }}>
                      National Climate Change Response Database
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => { location.hash = "ComingSoon" /*window.open("", "_blank")*/ }}>
                      Tracking and Evaluation System
                    </DropdownItem>
                    <DropdownItem divider />

                    <DropdownItem onClick={() => { location.hash = "ComingSoon" }}>
                    Technology Needs Assessment
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "ComingSoon" }}>
                    Financing
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "ComingSoon" }}>
                    Technical Assistance
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              {/* Resources */}
              <NavItem>
              <NavLink to="/cic-ghg">
                <b>Tracking &#38; Evaluation Portal</b>
              </NavLink>
              </NavItem>
              
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <b>Resources</b>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => { location.hash = "/info-glossary" }}>
                    Glossary
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "/info-documents" }}>
                    Documents
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              {/* Tools */}
              <NavItem>
                <NavLink to="/info-tools">
                <b>Tools</b>
                </NavLink>
              </NavItem>

            </NavbarNav>
            {/* RIGHT */}
            <NavbarNav right>
              <NavItem>
                <EASearch />
              </NavItem>
              <NavItem>
                <NavLink to="/about">
                <b>About</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <IconList></IconList>
              </NavItem>
              {/* Username */}
              {(user && !user.expired) &&
                <NavItem style={{ marginRight: "15px" }}>
                  <NavLink to="#" disabled>
                    <b style={{ color: DEAGreen }}>
                      {"Hello, " + user.profile.email}
                    </b>
                  </NavLink>
                </NavItem>
              }

              {/* Contact */}
              {/* <NavItem style={{ marginRight: "15px", borderBottom: (locationHash === "#/contact" ? "4px solid dimgrey" : "0px solid white") }}>
                <NavLink disabled to="contact" style={{ color: "grey" }}><b>Contact</b></NavLink>
              </NavItem> */}

              {/* Login / Logout */}
              {/* <NavItem style={{ marginRight: "15px" }}>
                {(!user || user.expired) &&
                  <NavLink to="/login"><b>Login</b></NavLink>
                }
                {(user && !user.expired) &&
                  <NavLink to="/logout"><b>Logout</b></NavLink>
                }
              </NavItem> */}

              {/* Register */}
              {/* {(!user || user.expired) &&
                <NavItem>
                  <a key="lnkRegister" className="nav-link" href={ssoBaseURL + "Account/Register"} target="_blank">
                    <b>Register</b>
                  </a>
                </NavItem>
              } */}

            </NavbarNav>

          </Collapse>

          {showDASL && <DASL closeCallback={() => { this.setState({ showDASL: false }) }} />}
          {showLRT && <LRT closeCallback={() => { this.setState({ showLRT: false }) }} />}

          {
            showNCCRD &&
            <NCCRD
              query={`?navbar=hidden&daoid=hidden&readonly=true&popin=hidden`}
              closeCallback={() => { this.setState({ showNCCRD: false }) }}
            />
          }

          {showNWIS && <NWIS closeCallback={() => { this.setState({ showNWIS: false }) }} />}
          {showSARVA && <SARVA closeCallback={() => { this.setState({ showSARVA: false }) }} />}
          {showNDMC && <NDMC closeCallback={() => { this.setState({ showNDMC: false }) }} />}

        </MDBNavbar >

      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)