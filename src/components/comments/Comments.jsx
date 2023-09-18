import React from 'react'
import './Comments.css'
import '../normalize/Normalize.css'

function Comments() {
  return (
    <div className="comments">
        <div className="container">
            <div className="comments__wrapper">
                <div className="comments__title">
                    <h2>What Clients Say</h2>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className="comments__parent">
                    <div className="comment__item">
                        <img src="assets/comment-raiting.svg" alt="" />
                        <h2>Product helps you see how many more days you need to work to reach your financial goal.</h2>
                        <div className="comments__account">
                            <img src="assets/comment1.svg" alt="" />
                            <div className="account__info">
                                <p>Wahid Ari</p>
                                <h3>Designer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="comment__item">
                        <img src="assets/comment-raiting.svg" alt="" />
                        <h2>Product helps you see how many more days you need to work to reach your financial goal.</h2>
                        <div className="comments__account">
                            <img src="assets/comment2.svg" alt="" />
                            <div className="account__info">
                                <p>Wahid Ari</p>
                                <h3>Designer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="comment__item">
                        <img src="assets/comment-raiting.svg" alt="" />
                        <h2>Product helps you see how many more days you need to work to reach your financial goal.</h2>
                        <div className="comments__account">
                            <img src="assets/comment3.svg" alt="" />
                            <div className="account__info">
                                <p>Wahid Ari</p>
                                <h3>Designer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comments