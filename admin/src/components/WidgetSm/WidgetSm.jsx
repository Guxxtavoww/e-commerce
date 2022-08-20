import { Visibility } from "@material-ui/icons";
import React, { useState, useEffect } from "react";

import { WidgetBox } from "./styles";
import { userRequest } from "../../api";

const WidgetSm = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("/user/?new=true");
                setUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, []);

    return (
        <WidgetBox>
            <span className="title">Novos Membros</span>
            <ul className="smList">
                {
                    users?.map((user, index) => (
                        <React.Fragment key={index}>
                            {
                                !user.isAdmin && (
                                    <li className="smItem">
                                        <img src={user.img || "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"} alt="Img User Widget" />
                                        <div className="widgetSmUser">
                                            <span className="username">{user.username}</span>
                                        </div>
                                        <button className="btn">
                                            <Visibility className="widgetSmIcon" />
                                            Mostrar
                                        </button>
                                    </li>
                                )
                            }
                        </React.Fragment>
                    ))
                }
            </ul>
        </WidgetBox>
    );
}

export default WidgetSm;