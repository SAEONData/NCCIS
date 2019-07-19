
import React from 'react';
import './IconList.css'

class IconList extends React.Component {

    render() {
      return (
          <>
        <ul class="ea-links">
        <li>
        <a href="#" title="Events and news" class="tooltip-ea tooltip-ea-r">
        <i class="fa fa-newspaper-o"></i>
        </a>
        </li>
        <li>
        <a href="#" title="Help and guidance" class="tooltip-ea tooltip-ea-r">
        <i class="fa fa-question-circle"></i>
        </a>
        </li>
        <li>
        <a href="#" title="List of climate documents" class="tooltip-ea tooltip-ea-r">
        <i class="fa fa-folder"></i>
        </a>
        </li>
        <li>
        <a href="#" title="Access useful climate tools" class="tooltip-ea tooltip-ea-r">
        <i class="fa fa-link"></i>
        </a>
        </li>
        </ul>
        </>
      );
    }
  }
export default IconList