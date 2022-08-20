import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NotificationsNone, Menu, Close } from "@material-ui/icons";

import { TopbarBox, Length } from "./styles";

const Topbar = () => {
    const user = useSelector(state => state.user.currentUser);
    
    const [ toggle, setToggle ] = useState(false);

    const handleClick = () => setToggle(!toggle);

    const closeMenu = () => setToggle(false);

    return (
        <TopbarBox>
            <Link className="logo" to="/">ADMIN</Link>
            <div className={toggle ? "menu active" : "menu"}>
                {
                    user ? (
                        <React.Fragment>
                            <div className="iconBx" onClick={closeMenu}>
                                <NotificationsNone className="icon" />
                                <Length>2</Length>
                            </div> 
                            <div className="profile" onClick={closeMenu}>
                                <img src={user.img || "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"} alt="Perfil" />
                            </div>
                        </React.Fragment>
                    ) : (
                        <Link to="/login" className="login">Faça seu Login</Link>
                    )
                }
            </div>
            <div className="toggle" onClick={handleClick}>
                { toggle ? <Close /> : <Menu /> }
            </div>
        </TopbarBox>
    );
}

export default Topbar;