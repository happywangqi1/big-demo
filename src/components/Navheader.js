import React, { PropTypes } from 'react'
class Navheader extends React.Component {
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
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }

  handleBack(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className="content-hear">
        <a href="#" className="header-but">
          <p className="glyphicon glyphicon-chevron-left" onClick={this.handleBack.bind(this)}></p>
               Back
        </a>
        <h3>Wangqi@{this.props.title}</h3>

        <a href="#" className="header-but">
          <span className="glyphicon glyphicon-cog"></span>
        </a>
      </div>
    )
  }
}
Navheader.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Navheader;
