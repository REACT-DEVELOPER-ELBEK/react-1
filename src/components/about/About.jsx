import React from 'react'
import '../normalize/Normalize.css'
import './About.css'

function About() {
  return (
    <div className="about">
        <div className="container">
            <div className="about__wrappper">
                <div className="about__title">
                    <h2>Product  was Built Specifically for You</h2>
                </div>
                    <div className="about__items">
                        <div className="about__option">
                            <img src="assets/about1.svg" alt="" />
                            <h2>First click tests</h2>
                            <p>While most people enjoy casino gambling,</p>
                        </div>

                        <div className="about__option">
                            <img src="assets/about2.svg" alt="" />
                            <h2>Design surveys</h2>
                            <p>Sports betting, lottery and bingo playing for the fun</p>
                        </div>

                        <div className="about__option">
                            <img src="assets/about3.svg" alt="" />
                            <h2>Preference tests</h2>
                            <p>The Myspace page defines the individual.</p>
                        </div>

                        <div className="about__option">
                            <img src="assets/about4.svg" alt="" />
                            <h2>Five second tests</h2>
                            <p>Personal choices and the overall personality of the person. </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About