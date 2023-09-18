import React from 'react'
import './Price.css'
import '../normalize/Normalize.css'

function Price() {
  return (
    <div className="price">
        <div className="container">
            <div className="price__wrapper">
                <div className="price__title">
                    <h2>Price Table</h2>
                    <p>We offer competitive price</p>
                </div>

                <div className="price__parent">
                    <div className="price__card">
                        <h2>Free</h2>
                        <p>Brief price description</p>
                        <div className="card__price">
                            <p>0</p>
                            <div className="price__span">
                                <p>$</p>
                                <h3>Per / month</h3>
                            </div>
                        </div>
                        <div className="price__info">
                            <p>Only 2 Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                        </div>
                        <button>Order Now</button>
                    </div>

                    <div className="price__card">
                        <h2>Standard</h2>
                        <p>Brief price description</p>
                        <div className="card__price">
                            <p>5</p>
                            <div className="price__span">
                                <p>$</p>
                                <h3>Per / month</h3>
                            </div>
                        </div>
                        <div className="price__info">
                            <p>5+ Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                        </div>
                        <button>Order Now</button>
                    </div>

                    <div className="price__card">
                        <h2>Premium</h2>
                        <p>Brief price description</p>
                        <div className="card__price">
                            <p>10</p>
                            <div className="price__span">
                                <p>$</p>
                                <h3>Per / month</h3>
                            </div>
                        </div>
                        <div className="price__info">
                            <p>10+ Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                        </div>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price