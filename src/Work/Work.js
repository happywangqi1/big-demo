import React, { PropTypes } from 'react'
import Workbg1 from'../images/h-bg.jpg'
class Work extends React.Component {
  render () {
    return(
      <div className="work-content">
        <div className="work-wrap">
          <img src={Workbg1} style={{width:'100%'}}/ >
          <div className="work-little">
            <h3>标题</h3>
            <p>描述</p>
          </div>
        </div>
        <div className="work-wrap">
          <img src={Workbg1} style={{width:'100%'}}/ >
          <div className="work-little">
            <h3>标题</h3>
            <p>描述</p>
          </div>
        </div>
        <div className="work-wrap">
          <img src={Workbg1} style={{width:'100%'}}/ >
          <div className="work-little">
            <h3>标题</h3>
            <p>描述</p>
          </div>
        </div>
        <div className="work-wrap">
          <img src={Workbg1} style={{width:'100%'}}/ >
          <div className="work-little">
            <h3>标题</h3>
            <p>描述</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
