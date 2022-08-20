import React from "react";

import { Navbar } from "../../components";
import { RegisterBox, RegisterInnerBox } from "./styles";

const Register = () => {
    return (
        <React.Fragment>
            <Navbar isHome={false} />
            <RegisterBox>
                <RegisterInnerBox onSubmit={e => e.preventDefault()}>
                    <h1>Crie sua Conta!</h1>
                    <div className="inputBx">
                        <input type="text" name="name" placeholder="Primeiro Nome" autoFocus autoComplete="false" />
                        <input type="text" name="lastname" placeholder="Sobrenome" autoFocus autoComplete="false" />
                    </div>
                    <div className="inputBx">
                        <input type="text" name="username" placeholder="Nome de Usuário" autoFocus autoComplete="false" />
                        <input type="email" name="email" placeholder="Seu E-mail" />
                    </div>
                    <div className="inputBx">
                        <input type="password" name="password" placeholder="Senha" autoFocus autoComplete="false" />
                        <input type="password" name="confirmedpassword" placeholder="Confirme sua Senha" autoFocus autoComplete="false" />
                    </div>
                    <span>Ao criar uma conta, concordo com o processamento dos meus dados pessoais de acordo com a POLÍTICA DE PRIVACIDADE</span>
                    <button type="submit">Cadastrar</button>
                </RegisterInnerBox>
            </RegisterBox>
        </React.Fragment>
    );
}

export default Register;