import React, {useState, useContext, useEffect} from "react";
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import Logo from './icon/logo1.png'
import Login from './icon/login.svg'
import Home from './icon/home.svg'
import Book from './icon/book.svg'
import Logout from './icon/logout.svg'
import Add from './icon/add.svg'
import Face from './icon/face-smile.svg' 
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const name = state.userAPI.name

    const logoutUser = async () =>{
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }
    
    const adminRouter = () =>{
        return(
            <>
               <li><Link to="/create_product"><img src={Add} width="20"/> Add</Link></li>
               <li><Link to="/category"><img src={Menu} width="20"/> Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <div class="user">
                <span><img src={Face} width="20"/> Hi,{name}</span>
                <div class="user1">
                    <p><li><Link to="/" onClick={logoutUser}><img src={Logout} width="20"/> Logout</Link></li></p>
                </div>
            </div>
        )
    }
    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">
                        <a href="#"> <img src={Logo} height="50px" width="50px"/> Readify </a>
                    </Link>
                </h1>
            </div>

            <ul>
                <li><Link to="/">{isAdmin ? '' : <img src={Home} width="20"/>}</Link></li>
                <li><Link to="/product">{isAdmin ? <img src={Book} width="15"/> : <img src={Book} width="15"/>} Book</Link></li>

                {isAdmin && adminRouter()}
                {
                    isLogged ? loggedRouter() : <li><Link to="/login"><img src={Login} alt="" width="15"/> Login</Link></li>
                }
                
                <li><img src={Close} alt="" width="20" className="menu"/></li>
            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="20" />
                    </Link>
                </div>
            }

            
        </header>
        
    )
}

export default Header; 