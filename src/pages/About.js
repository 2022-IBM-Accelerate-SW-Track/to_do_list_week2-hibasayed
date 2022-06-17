import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpeg";
export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profile_pic_name}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Hiba Sayed</div>
        <div className="brief_description">
          Hello! My name is Hiba Sayed and I am a sophomore computer science student at Virginia Tech with a minor in mathematics.
          I am currently working at Deloitte this summer as a Cyber Discovery Intern in the Risk and Financial Advisory Group as well
          as taking part in IBM's Accelerate Program completing the Software track. I am passionate in increasing diversity in STEM
          through my role as Treasurer of my school's Society of Women Engineer's chapter as well as attending various conferneces
          such as Grace Hopper and Tapia in 2021.    
        </div>
      </div>
    </div>
  </div>
    )
  }
}