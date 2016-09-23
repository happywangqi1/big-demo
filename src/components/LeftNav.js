import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class LeftNav extends React.Component {
  constructor(){
    super();
    title:'Home'
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title: this.context.router.isActive('/',true) ? 'Home' :
              this.context.router.isActive('/Blog') ? 'Blog' :
              this.context.router.isActive('/Work') ? 'Work' :
              this.context.router.isActive('/About') ? 'About' : 'Item'
    })
  }
  render () {
    return(
      <div className="left-nav">
        <h3>Wangqi@{this.state.title}</h3>
        <Link to="/" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;&nbsp;Home</Link>
        <Link to="Blog" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-book" aria-hidden="true"></span>&nbsp;&nbsp;Blog</Link>
        <Link to="work" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>&nbsp;&nbsp;Work</Link>
        <Link to="About" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;&nbsp;About</Link>
      </div>
    )
  }
}

LeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LeftNav;
