import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <section className="headers">
            <div className="main-container">
                <ul className="menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">Aboutus</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contactus">Contactus</Link></li>
                </ul>
            </div>

        </section>
      
    </div>
  )
}

export default Header
