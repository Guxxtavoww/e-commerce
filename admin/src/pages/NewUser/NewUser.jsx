import React, { useState } from "react";

import { Error, NewUserBox } from "./styles";
import { publicRequest } from "../../api";

const NewUser = () => {
    const [ email, setEmail ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ adress, setAdress ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(false);

    const genders = ["Masculino", "Feminino", "Outro"];

    const handleSubmit = async e => {
        e.preventDefault();
        if(email === "" || gender === "" || adress === "" || username === "" || password === "") {
            setError(true);
        } else {
            setError(false);
            try {
                await publicRequest.post("/auth/cadastro", {
                    email,
                    username,
                    password,
                    isAdmin: false,
                    gender,
                    adress,
                    img: ""
                });
                window.location.replace("/usuarios");
            } catch (error) {
                setError(true);
                console.log(error);
            }
        }
    }

    return (
        <NewUserBox>
            <h1>Novo Usuário</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputBx">
                    <label>Nome de Usuário</label>
                    <input type="text" placeholder="Nome de Úsuario" name="username" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="inputBx">
                    <label>E-mail</label>
                    <input type="email" placeholder="E-mail" name="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="inputBx">
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" name="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="inputBx">
                    <label>Endereço</label>
                    <input type="text" placeholder="Seu Endereço" name="adress" onChange={e => setAdress(e.target.value)}/>
                </div>
                <div className="inputBx gender">
                    <label>Gênero</label>
                    <div className="genderBx">
                        {
                            genders.map((gender, index) => (
                                <React.Fragment key={index}>
                                    <input type="radio" name="gender" value={gender} id={gender.toLowerCase()} onChange={e => setGender(e.target.value)} />
                                    <label htmlFor={gender.toLowerCase()}>{gender}</label>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
                <button type="submit">Criar</button>
                { error && <Error>Ocorreu um Erro, tente novamente. Provalvemente já existe um usuário com essas credenciais</Error> }
            </form>
        </NewUserBox>
    );
}

export default NewUser;