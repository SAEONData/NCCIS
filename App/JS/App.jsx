//Styles - Ant.Design (has to be loaded before MDB so that MDB can replace all applicable styles)
import 'antd/lib/style/index.css'

//Styles - MDB
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

//Components
import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import Login from './components/authentication/Login.jsx';
import Logout from './components/authentication/Logout.jsx';
import Navbar from './components/navigation/Navbar.jsx';
import Footer from './components/navigation/Footer.jsx';
import CallbackPage from '../js/components/authentication/callback.jsx';
import LoadingPanel from './components/input/LoadingPanel.jsx';
import Header from './components/navigation/Header.jsx';
// import AME from './components/pages/Adaptation/MonitoringEvaluation/AME.jsx';
import SideNav from './components/navigation/SideNav.jsx';
import ComingSoon from './Components/Pages/ComingSoonAE.jsx'; //Created my own temp component
import CICtrends from './Components/Pages/cic-trends.jsx';
import CICtrendsp from './Components/Pages/cic-trends-prov.jsx';
import CICtrendscc from './Components/Pages/cic-trends-current.jsx';
import CICextreme from './Components/Pages/cic-extreme.jsx';
import CICghg from './Components/Pages/cic-ghg.jsx';
import CIChome from './Components/Pages/cic-home.jsx';
import CICvulnerability from './Components/Pages/cic-vulnerability.jsx';
import CICprojections from './Components/Pages/cic-projections.jsx';
import CICprojectionsp from './Components/Pages/cic-projections-prov.jsx';
import CICpcd from './Components/Pages/cic-provincial-cd.jsx';
import INFOabout from './Components/Pages/info-about.jsx';
import INFOglossary from './Components/Pages/info-glossary.jsx';
import INFOdocuments from './Components/Pages/info-documents.jsx';
import INFOevents from './Components/Pages/info-events.jsx';
import INFOtools from './Components/Pages/info-tools.jsx';
import DOCprivacy from './Components/Pages/doc-privacy.jsx';
import DOCdisclaimer from './Components/Pages/doc-disclaimer.jsx';
import DOCconditions from './Components/Pages/doc-conditions.jsx';
import userManager from './components/authentication/userManager';
import '../css/custom.css';
import './custom';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-145174772-1');

//Data
const Oidc = require("oidc-client")
import { data as NavData } from '../data/sideNavData'
const _gf = require('./globalFunctions')

const mapStateToProps = (state, props) => {
  let { general: { loading, showSideNav } } = state
  return { loading, showSideNav }
}

//Enable OIDC Logging
Oidc.Log.logger = console
Oidc.Log.level = Oidc.Log.INFO

class App extends React.Component {

  constructor(props) {
    super(props);

    this.saveCurrentURL = this.saveCurrentURL.bind(this)

    let showNavbar = true
    if (location.toString().includes("navbar=hidden")) {
      showNavbar = false
    }

    this.state = {
      navbar: showNavbar,
      currentURL: ""
    }
  }

  async componentDidMount() {
    this.saveCurrentURL()
    window.onhashchange = this.saveCurrentURL

    try {
      await userManager.signinSilent()
    }
    catch (ex) {
      console.warn("Sign-in-silent failed!", ex)
    }
  }

  ignoreURL() {

    let ignore = false

    const ignoreURLs = [
      "#/login",
      "#/logout",
      "#/callback"
    ]

    ignoreURLs.forEach(x => {
      if (location.hash.includes(x) && !ignore) {
        ignore = true
      }
    })

    return ignore
  }

  
  saveCurrentURL() {



    if (location.hash !== this.state.currentURL && !this.ignoreURL()) {
      console.log("NAV", location.hash)
      var valuef = location.hash.substring(location.hash.lastIndexOf('#') + 1);
      var valueid = valuef.replace('#','')
      if (!valuef.includes("/")){
          var theelement = document.getElementById(valueid);
          theelement.setAttribute( 'class','bg-light')
          var theoffset = theelement.offsetTop;
          var theoffsetplus = parseInt(theoffset - 80);
          window.scrollTo(0,theoffsetplus);
      }else{
        window.scrollTo(0,0);
      };

      this.setState({ currentURL: location.hash })
      _gf.SaveCurrentUrl()
    }
  }

  render() {

    let { loading, showSideNav } = this.props
    let { navbar } = this.state
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div style={{ backgroundColor: "white", overflowX: 'hidden' }}>
        <Router>
          <div>
            <header id="ea-header">
            {navbar && <Header />}
            {navbar && <Navbar />}
            </header>
            {
              NavData.enabled &&
              <SideNav data={NavData} isOpen={showSideNav} />
            }

            <section id="ea-body">
              <div id="ea-content">

                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/login" component={Login} exact />
                  <Route path="/logout" component={Logout} exact />
                  <Route path="/callback" component={CallbackPage} />
                  {/* <Route path="/ame" component={AME} /> */}
                  <Route path="/ComingSoon" component={ComingSoon} />
                  <Route path="/cic" component={CIChome} />
                  <Route path="/cic-trends" component={CICtrends} />
                  <Route path="/cic-trends-provincial" component={CICtrendsp} />
                  <Route path="/cic-trends-current" component={CICtrendscc} />
                  <Route path="/cic-extreme" component={CICextreme} />
                  <Route path="/cic-ghg" component={CICghg} />
                  <Route path="/cic-projections" component={CICprojections} />
                  <Route path="/cic-projections-provincial" component={CICprojectionsp} />
                  <Route path="/cic-vulnerability" component={CICvulnerability} />
                  <Route path="/cic-provincial" component={CICpcd} />
                  <Route path="/info-about" component={INFOabout} />
                  <Route path="/info-tools" component={INFOtools} />
                  <Route path="/info-glossary" component={INFOglossary} />
                  <Route path="/info-documents" component={INFOdocuments} />
                  <Route path="/info-events" component={INFOevents} />
                  <Route path="/doc-privacy" component={DOCprivacy} />
                  <Route path="/doc-disclaimer" component={DOCdisclaimer} />
                  <Route path="/doc-conditions" component={DOCconditions} />
                  <Redirect to="/" />
                </Switch>
              </div>
            

            <Footer />
            </section>
            <LoadingPanel enabled={loading} />

          </div>

        </Router>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
