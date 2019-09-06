'use strict'

import React from 'react'
import { connect } from 'react-redux';
import { Fa, Row, Col, Button } from 'mdbreact'
import { Drawer, Collapse } from 'antd'
import { DEAGreen } from '../../config/colours.js'
import environmental_affairs_logo from '../../../images/DEA/environmental_affairs_logo.png'

import './SideNav.css'

const Panel = Collapse.Panel

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSideNav: payload => {
      dispatch({ type: "TOGGLE_SIDENAV", payload })
    }
  }
}

class SideNav extends React.Component {

  constructor(props) {
    super(props)


    this.toggleNav = this.toggleNav.bind(this)

    this.state = { navOpen: [], width: 0, height: 0, showContent: false, contentLink: "", contentTitle: "" }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggleNav(key) {
    let { navOpen } = this.state

    if (navOpen.includes(key)) {
      navOpen = navOpen.filter(x => x !== key)
    }
    else {
      navOpen.push(key)
    }

    this.setState({ navOpen })
  }

  closeModal() {
    this.setState({ showContent: false, contentLink: "" })
  }


  render() {

    let { isOpen, data } = this.props
    let { width, showContent, contentLink, contentTitle } = this.state

    const sideNavWidth = width < 325 ? "100%" : 325

    return (
      <>
        <Drawer
          placement="left"
          closable={true}
          onClose={() => this.props.toggleSideNav(false)}
          visible={isOpen}
          width={sideNavWidth}
          bodyStyle={{ paddingLeft: 0, paddingRight: 0, overflowX: 'hidden' }}
        >
<img
  onClick={() => window.open("http://www.environment.gov.za/")}
  src={environmental_affairs_logo}
  style={{
    height: 80,
    marginLeft: 5,
    cursor: "pointer"
  }}
  className="pl-3 pt-3"
  align="center"
/>
<hr className="mt-4 mb-4" />
<ul class="ea-side-nav pl-3 pr-3">
    <li>

        <div className="ea-parent">
            <span>Climate Information Centre</span>
            <ul className="ea-child">
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>GHG Emissions Database</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Trends</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Projections</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Impacts</a></li>
            </ul>
        </div>
    </li>
    <li>
        <div className="ea-parent">
            <span>Climate Resources</span>
            <ul className="ea-child">
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Technology Needs Assessment</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Climate Finance</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Technical Assistance</a></li>
            </ul>
        </div>
    </li>
    <li>
    <a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Governement Response</a>
    </li>
    <li>
        <div className="ea-parent">
            <span>Submit a climate change response project</span>
            <ul className="ea-child">
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>NCCRD (Portal link)</a></li>
            </ul>
        </div>
    </li>
    <li>
        <div className="ea-parent">
            <span>Design a climate change plan</span>
            <ul className="ea-child">
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Risk and Vulnerability Assessment</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Stakeholder Engagement</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Planning Integration</a></li>
            </ul>
        </div>
    </li>
    <li>
        <div className="ea-parent">
            <span>Evaluate a climate change plan</span>
            <ul className="ea-child">
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Adaptation | DAO</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Mitigation</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Indicators</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>SDGs</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>T&E System</a></li>
                <li><a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Other Indicators and Policy</a></li>
            </ul>
        </div>
    </li>
    <li>
    <a onClick={()=> { location.hash = "ComingSoon", this.props.toggleSideNav(false) }}>Review Report</a>
    </li>
</ul>
<hr className="mt-4" />
        </Drawer>
      </>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)