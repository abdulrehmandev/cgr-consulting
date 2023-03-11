import React from 'react'
import aboutStyles from '../styles/AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={aboutStyles.about}>
      <div className="container">
        <div className={aboutStyles.almost}>[almost]</div>
        <h1 className={aboutStyles.about_title}>A DECADE WORTH OF EXPERTISE.</h1>
      </div>
    </div>
  )
}
