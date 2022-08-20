import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LocationSearching, MailOutline, PermIdentity, Publish } from "@material-ui/icons";

import { UserBox } from "./styles";
import { userRequest } from "../../api";

const User = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/")[2];

    const [ user, setUser ] = useState([]);

    const [ email, setEmail ] = useState("");
    const [ adress, setAdress ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await userRequest.get(`/user/${id}`);
                setUser(res.data);
            } catch (error) {
                console.log(error);
                setUser(null);
            }
        }
        getUser();
    }, []); 

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await userRequest.put(`/user/${user._id}`, {
                username,
                email,
                password,
                adress
            });
            window.location.replace("/usuarios");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserBox>
            {
                user ? (
                    <React.Fragment>
                        <div className="controlBx">
                            <h1>Edite Usuário</h1>
                            <Link to="/criar-usuario">Criar</Link>
                        </div>
                        <div className="userContainer">
                            <div className="userDisplay">
                                <div className="top">
                                    <img src={user.img || "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"} alt="User Img" />
                                    <div className="titleBx">
                                        <span className="username">{user.username}</span>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <span>Detalhes da Conta</span>
                                    <div className="infoBX">
                                        <div className="info">
                                            <PermIdentity className="icone" />
                                            <span className="infoTitle">{user.username}</span>
                                        </div>
                                        <div className="info">
                                            <MailOutline className="icone" />
                                            <span className="infoTitle">{user.email}</span>
                                        </div>
                                        {
                                            user.adress && (
                                                <div className="info">
                                                    <LocationSearching className="icone" />
                                                    <span className="infoTitle">{user.adress}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="userUpdate">
                                <span className="title">Editar</span>
                                <form className="updateForm" onSubmit={handleSubmit}>
                                    <div className="updateSection">
                                        <div className="inputBx">
                                            <label>Nome de Usuário</label>
                                            <input type="text" name="username" placeholder={user.username} onChange={e => setUsername(e.target.value)} autoFocus=""/>
                                        </div>
                                        <div className="inputBx">
                                            <label>Email</label>
                                            <input type="email" name="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} autoFocus=""/>
                                        </div>
                                        <div className="inputBx">
                                            <label>Senha</label>
                                            <input type="password" name="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} autoFocus=""/>
                                        </div>
                                        <div className="inputBx">
                                            <label>Endereço</label>
                                            <input type="text" name="adress" placeholder={user.adress} onChange={e => setAdress(e.target.value)} autoFocus=""/>
                                        </div>
                                    </div>
                                    <div className="updateSection">
                                        <div className="uploadBx">
                                            <img src={user.img ? user.img : "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"} alt="User Img" />
                                            <label htmlFor="file"><Publish /></label>
                                            <input type="file" name="file" id="file" style={{ display: "none" }} />
                                        </div>
                                        <button type="submit">Atualizar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <h1>Usuário não encontrado</h1>
                )
            }
        </UserBox>
    );
}

export default User;