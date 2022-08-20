import React from "react";
import { Link, useLocation } from "react-router-dom"; 

import itemsData from "./itemsData";
import { SiderbarBox } from "./styles";

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <SiderbarBox>
            <div className="sidebarMenuBx">
                {
                    itemsData.map((item, index) => (
                        <div className="sidebarMenu" key={index}>
                            <h3>{item.sectionTitle}</h3>
                            <ul className="sidebarLista">
                                {
                                    item.sectionData.map((li, i) => (
                                        <li key={i}>
                                            <Link className={pathname === li.to ? "item active" : "item"} to={li.to}>
                                                { li.icon }
                                                { li.name }
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </SiderbarBox>
    );
}

export default Sidebar;