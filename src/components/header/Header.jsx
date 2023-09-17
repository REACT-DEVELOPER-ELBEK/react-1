import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='nav'>
      <div className="container">
        <div className="nav__wrapper">
          <div className="nav__logo"><img src="assets/nav-logo.svg" alt="" /><p>Product</p></div>
          <div className="nav__items">
            <div className="nav__links">
              <a>Product</a>
              <a>Customers</a>
              <a>Pricing</a>
              <a>Resources</a>
            </div>
            <div className="nav__btns">
              <button>Sign In</button>
              <button>Sign Up</button>
              <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z" fill="#02897A"/>
  <path d="M19 12C19 8.134 15.865 5 12 5V19C15.865 19 19 15.866 19 12Z" fill="#02897A"/>
              </svg></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header