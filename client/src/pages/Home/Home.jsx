import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { HomeBox, Topper } from "./styles";
import { Navbar, Slider, Products, Newsletter } from "../../components";

const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        pathname !== "/" && window.location.replace("/");        
    }, [ pathname ]);

    return (
        <HomeBox>
            <Topper>
                <span>Novidades Aqui!</span>
            </Topper>
            <Navbar isHome />
            <Slider />
            <Products isHome />
            <Newsletter />
        </HomeBox>
    );
}

export default Home;    