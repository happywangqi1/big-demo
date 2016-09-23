import React, { PropTypes } from 'react'
import axios from 'axios';
function getJson() {
   let address = `https://raw.githubusercontent.com/happywangqi1/bigs-demo/master/card.json?${Math.random()}`;
   return axios.get(address)
     .then( (res) => (
       { getJson:res.data }
     ))
     .catch(function (error) {
       alert(error);
     });
 }
 export {getJson};

 function getMd(add) {
    let address = `https://raw.githubusercontent.com/happywangqi1/bigs-demo/master/blog/${add}.md`;
    return axios.get(address)
      .then( (res) => (
        { getMd:res.data }
      ))
      .catch(function (error) {
        alert(error);
      });
  }
export {getMd};
