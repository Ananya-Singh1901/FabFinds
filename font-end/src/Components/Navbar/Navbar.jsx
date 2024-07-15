import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="FabFinds Logo" />
                <p>FabFinds</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("Shop")}>
                    <Link to='/'>Shop</Link>
                    {menu === "Shop" && <hr />}
                </li>
                <li onClick={() => setMenu("Women")}>
                    <Link to='/women'>Women</Link>
                    {menu === "Women" && <hr />}
                </li>
                <li onClick={() => setMenu("Men")}>
                    <Link to='/men'>Men</Link>
                    {menu === "Men" && <hr />}
                </li>
                <li onClick={() => setMenu("Kids")}>
                    <Link to='/kids'>Kids</Link>
                    {menu === "Kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
