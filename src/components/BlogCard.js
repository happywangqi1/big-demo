import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class BlogCard extends React.Component {
  render () {
    let styles={
      border:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        margin:'20px',
        paddingBottom:'10px',
      },
      index:{
        height:'100px',
        backgroundColor:'#00BCD4',
        textAlign:'center',
        lineHeight:'100px',
      },
      span:{
        display:'inline-block',
        width:'60px',
        height:'60px',
        border:'1px solid #fff',
        borderRadius:'50%',
        lineHeight:'60px',
        margin:'0 auto',
        marginTop:'20px',


      },
      title:{
        textAlign:'center',
      },
      desc:{
        padding:'10px',
      },
      btn:{
        border:'1px solid #FF4081',
        color:'#FF4081',
        padding:'2px 8px',
        borderRadius:'8px',
        margin:'10px',
        textDecoration:"none",

      },
    }
  
    let address=`Item/${this.props.url}`
    return(
      <div style={styles.border}>
        <p style={styles.index}><span style={styles.span}>{this.props.index}</span></p>
        <p style={styles.title}>{this.props.title}</p>
        <p style={styles.desc}>{this.props.desc}</p>
        <Link to={address} style={styles.btn}>阅读更多</Link>
      </div>
    )
  }
}
BlogCard.defaultPorps = {
  index:1,
  title:'将方式的附近',
  desc:'内容',
}
BlogCard.PropTypes = {
  index:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
};

export default BlogCard;
