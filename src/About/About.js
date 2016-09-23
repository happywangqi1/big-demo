import React, { PropTypes } from 'react'
import Bgb from '../images/aboutbg.jpg'
class About extends React.Component {
  render () {
    return(
      <div className="about-content">
        <img src={Bgb}style={{width:'100vw',height:'50vh'}}/ >
        <div>
          <h3>个人信息
            <p>喜欢烹饪！写代码！</p>
            <p>看到就空间的思考的</p>
            <p>看到就空间的思考的</p>
          </h3>
        </div>
        <div>
          <h3>联系方式
            <p>电话：15811069619</p>
            <p>微信：827279070/317052951</p>
            <p>邮箱：827279070@qq.com</p>
          </h3>
        </div>
        <div>
          <h3 className="iconfont">社交账号
            <p><i className="iconfont">&#xe61c;</i></p>
            <p><i className="iconfont">&#xe608;</i></p>
            <p><i className="iconfont">&#xe64f;</i></p>
          </h3>
        </div>
      </div>
    )
  }
}

export default About;
