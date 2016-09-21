import React, { PropTypes } from 'react'
import { Link } from 'react-router';
class Navheader extends React.Component {
  render () {
    return(
      <div className="content-hear">
        <a href="#" className="header-but">
              <p className="glyphicon glyphicon-chevron-left"></p>
               Back
        </a>
        <h3>Wangqi.Coner</h3>

        <a href="#" className="header-but">
              <span className="glyphicon glyphicon-cog"></span>
        </a>
      </div>

    )

  }
}

export default Navheader;
