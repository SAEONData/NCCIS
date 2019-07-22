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
import CICtrendse from './Components/Pages/cic-trends-extreme.jsx';
import CICghg from './Components/Pages/cic-ghg.jsx';
import CICimpacts from './Components/Pages/cic-impacts.jsx';
import CICprojections from './Components/Pages/cic-projections.jsx';
import CICprojectionsp from './Components/Pages/cic-projections-prov.jsx';
import INFOabout from './Components/Pages/info-about.jsx';
import userManager from './components/authentication/userManager';
import '../css/custom.css';
import './custom';


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
      this.setState({ currentURL: location.hash })
      _gf.SaveCurrentUrl()
    }
  }

  render() {

    let { loading, showSideNav } = this.props
    let { navbar } = this.state

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
                  <Route path="/cic-trends" component={CICtrends} />
                  <Route path="/cic-trends-provincial" component={CICtrendsp} />
                  <Route path="/cic-trends-events" component={CICtrendse} />
                  <Route path="/cic-ghg" component={CICghg} />
                  <Route path="/cic-projections" component={CICprojections} />
                  <Route path="/cic-projections-provincial" component={CICprojectionsp} />
                  <Route path="/cic-impacts" component={CICimpacts} />
                  <Route path="/info-about" component={INFOabout} />
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
