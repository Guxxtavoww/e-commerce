import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components";
import { Home, Login, Register, Cart, Produto, ProductList, Sucesso, Busca } from "./pages";

const App = () => {
    const user = useSelector(state => state.user.currentUser);
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/sucesso" element={<Sucesso />} />
                <Route path="/produto/:id" element={<Produto />} />
                <Route path="/produtos-busca" element={<Busca />} />
                <Route path="/login" element={user ? <Home/> : <Login />} />
                <Route path="/produtos/:category" element={<ProductList />} />
                <Route path="/cadastro" element={user ? <Home /> : <Register />} />
            </Routes>   
            <Footer />
        </Router>
    );
}

export default App;