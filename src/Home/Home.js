import React, { PropTypes } from 'react'
import { Link } from 'react-router';
class Home extends React.Component {
  render () {
      let styles={
        i:{
          color:'blue',
        }
      }
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
              <h2>HI, I'M <i style={styles.i}>wangqi</i></h2>
              <p>WEB DEVELOPER</p>
              <button className="home-btn">HIRE ME</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
