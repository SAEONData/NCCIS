
import React from 'react';
import './IconList.css'

class IconList extends React.Component {

    render() {
      return (
          <>
        <ul className="ea-links">
        <li>
        <a onClick={() => { location.hash = "/contact-ccis" }} title="Contact Details" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-envelope-o"></i>
        </a>
        </li>
        <li>
        <a onClick={() => { location.hash = "/info-events" }} title="Events and news" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-newspaper-o"></i>
        </a>
        </li>
        <li>
        <a onClick={(event) => {event.preventDefault(); window.open("http://elearning.ccis.saeon.ac.za");}} title="Help and guidance" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-question-circle"></i>
        </a>
        </li>
        
        {/* <li>
        <a onClick={() => { location.hash = "/info-documents" }} title="List of climate documents" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-folder"></i>
        </a>
        </li> */}
        {/* <li>
        <a onClick={() => { location.hash = "/info-tools" }} title="Access useful climate tools" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-link"></i>
        </a>
        </li> */}
        </ul>
        </>
      );
    }
  }
export default IconList