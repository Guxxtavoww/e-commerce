import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search, ShoppingCartOutlined, Menu, Close } from "@material-ui/icons";

import { NavbarBox, CartLength } from "./styles";   

const Navbar = ({ isHome }) => {
    const [ toggle, setToggle ] = useState(false);
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.currentUser);

    const closeMenu = () => setToggle(false);
    const handleClick = () => setToggle(!toggle);

    return (
        <NavbarBox isHome={isHome}>
            <form action="/produtos-busca" className="searchBx">
                <input type="text" name="search" placeholder="Pesquise um Produto" id="busca" />
                <label htmlFor="busca">
                    <Search color="inherit" />
                </label>
            </form>
            <Link to="/" className="logo">LOJA.</Link>
            <div className={toggle ? "rightSection active" : "rightSection"}>
                {
                    user ? <Link to="/usuario" className="user">{user.username}</Link> : (
                        <React.Fragment>
                            <Link to="/cadastro" className="link" onClick={closeMenu}>Registrar</Link>
                            <Link to="/login" className="link" onClick={closeMenu}>Login</Link>
                        </React.Fragment>
                    )
                }
                { 
                    user && (
                        <Link className="cart" to="/carrinho" onClick={closeMenu}>
                            <ShoppingCartOutlined className="icon" />
                            { cart.quantity > 0 && <CartLength>{cart.quantity}</CartLength> } 
                        </Link>
                    )
                }
            </div>
            <div className="toogle" onClick={handleClick}>
                {toggle ? <Close className="icon" /> : <Menu className="icon" />}
            </div>
        </NavbarBox>   
    );
}

export default Navbar;