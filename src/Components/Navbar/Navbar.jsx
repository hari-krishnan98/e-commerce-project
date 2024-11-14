import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import drop_down from '../Assets/drop_down.png'
export const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const {getTotalCartItems}= useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_down} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>shop</Link>{menu==="shop"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<h/>:<></>}</li>
          </ul>
          <div className="nav-login-cart">
           <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>

    </div>
  )
}
