import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Topbar, Sidebar } from "./components";
import { Home, Users, User, NewUser, ProductList, Product, NewProduct, Login } from "./pages";

const App = () => {
    const user = useSelector(state => state.user.currentUser);

    return (
        <Router>
            <Topbar />
            <div className="absoluteBx">
                <Sidebar />
                <Routes>
                    <Route path="/login" element={<Login />} />    
                    <Route path="/" element={user ? <Home /> : <Login />} />    
                    <Route path="/usuarios" element={user ? <Users /> : <Login />} />   
                    <Route path="/usuario/:id" element={user ? <User /> : <Login />} />  
                    <Route path="/produtos" element={user ? <ProductList /> : <Login />} /> 
                    <Route path="/criar-usuario" element={user ? <NewUser /> : <Login />} />   
                    <Route path="/criar-produto" element={user ? <NewProduct /> : <Login />} />   
                    <Route path="/produto/:productId" element={user ? <Product /> : <Login />} /> 
                </Routes>                
            </div>
        </Router>
    );
}

export default App;