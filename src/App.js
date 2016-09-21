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
    this.setState({
      showNav:window.innerWidth >= 760 ? true : false
    });
  }
  componentDidMount(){
    this.setNavBarState();
    window.onresize = this.setNavBarState.bind(this);
  }
  render () {
    return(
      <div className="content-wrap">
          {this.state.showNav ? <LeftNav/ > : <Navheader/ >}
         <div className="content-main">
         </div>
        {this.state.showNav ? null : <Navfooter/ >}
      </div>
    )
  }
}

export default App;
