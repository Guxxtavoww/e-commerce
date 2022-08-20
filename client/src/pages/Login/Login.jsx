import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Navbar } from "../../components";
import { login } from "../../redux/apiCalls";
import { LoginBox, LoginInnerBox, Error } from "./styles";

const Login = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const { isFetching, error } = useSelector(state => state.user);

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        login(dispatch, { username, password });
        navigation("/");
    }
    
    return (
        <React.Fragment>
            <Navbar isHome={false} />
            <LoginBox>
                <LoginInnerBox>
                    <h1>Faça seu Login</h1>
                    <form onSubmit={handleSubmit} className="form">
                        <input type="text" placeholder="Nome de Usuário" name="username" autoFocus autoComplete="current-username" onChange={e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Sua Senha" name="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)} />
                        <button type="submit" disabled={isFetching}>Login</button>
                        <Link to="/cadastro" className="link">Não tem uma conta? Crie uma Aqui.</Link>
                    </form>
                    { error && <Error>Algo deu Errado...</Error> }
                </LoginInnerBox>
            </LoginBox>
        </React.Fragment>
    );
}

export default Login;