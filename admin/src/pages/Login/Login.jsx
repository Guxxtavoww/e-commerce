import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/apiCalls";
import { LoginBox, Wrapper, Error } from "./styles";

const Login = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const { isFetching, error } = useSelector(state => state.user);

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        login(dispatch, { username, password });
        window.location.replace("/");
    }

    return (
        <LoginBox>
            <Wrapper onSubmit={handleSubmit}>
                <h1>Faça seu Login</h1>
                <input type="text" name="username" placeholder="Nome de Usuário" onChange={e => setUsername(e.target.value)} autoFocus />
                <input type="password" name="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                <button type="submit" disabled={isFetching}>Login</button>
                { error && <Error>Algo deu Errado...</Error> }
            </Wrapper>
        </LoginBox>
    );
}

export default Login;