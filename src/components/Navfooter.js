import React, { PropTypes } from 'react'
import { Link } from 'react-router';
class Navfooter extends React.Component {
  render () {
    return(
      <div className="content-footer">
        <Link to='/'activeStyle={{color:'#1f0775'}} onlyActiveOnIndex={true}>
        <span className="glyphicon glyphicon-home"></span><br />
        Home
        </Link>
        <Link to='/Blog'activeStyle={{color:'#1f0775'}}>
        <span className="glyphicon glyphicon-book"></span><br />
        Blog
        </Link>
        <Link to='/Work'activeStyle={{color:'#1f0775'}}>
        <span className="glyphicon glyphicon-folder-open"></span><br />
        Work
        </Link>
        <Link to='/About'activeStyle={{color:'#1f0775'}}>
        <span className="glyphicon glyphicon-user"></span><br />
        About
        </Link>
      </div>
    )

  }
}

export default Navfooter;
