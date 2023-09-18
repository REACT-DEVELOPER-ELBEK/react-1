import React from 'react'
import './Info.css'
import '../normalize/Normalize.css'

function Info() {
  return (
    <div className="info">
        <div className="container">
            <div className="info__wrapper">
                <div className="info__content">
                    <h2>Join 100 Compannies who boost their business with Product</h2>
                    <button>Get This</button>
                </div>
                <img src="assets/info.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Info