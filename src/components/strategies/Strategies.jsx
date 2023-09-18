import React from 'react'
import './Strategies.css'
import '../normalize/Normalize.css'

function Strategies() {
  return (
    <div className="strategy">
        <div className="container">
            <div className="strategy__wrapper">
                <div className="strategy__title">
                    <h2>Contents Strategies</h2>
                    <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                </div>
                <div className="strategy__parent">
                    <div className="strategy__item">
                        <img src="assets/strategy1.png" alt="" />
                        <div className="strategy__content">
                            <div className="content__date">By <span>Wahid Ari</span> |  03 March 2019</div>
                            <h2>Increasing Prosperity With Positive Thinking</h2>
                        </div>
                    </div>

                    <div className="strategy__item">
                        <img src="assets/strategy2.png" alt="" />
                        <div className="strategy__content">
                            <div className="content__date">By <span>Wahid Ari</span> | 03 March 2019</div>
                            <h2>Motivation Is The First Step To Success</h2>
                        </div>
                    </div>

                    <div className="strategy__item">
                        <img src="assets/strategy3.png" alt="" />
                        <div className="strategy__content">
                            <div className="content__date">By <span>Wahid Ari</span> | 03 March 2019</div>
                            <h2>Success Steps For Your Personal Or Business</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Strategies