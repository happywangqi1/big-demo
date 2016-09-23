import React from 'react';
import Navheader from "./components/Navheader"
import Navfooter from "./components/Navfooter"
import LeftNav from "./components/LeftNav"
class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false
    }
  }
  setNavBarState(){
    this.setState({showNav: window.innerWidth >= 760 ? true : false});
  }
  componentDidMount(){
    this.setNavBarState()
    window.onresize = this.setNavBarState.bind(this);
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
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }
  render () {
    return(
      <div className="content-wrap">
          {this.state.showNav ? <LeftNav/ > : <Navheader/ >}
         <div className="content-main">
           {this.props.children}
         </div>
        {this.state.showNav ? null : <Navfooter/ >}
      </div>
    )
  }
}
App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default App;
