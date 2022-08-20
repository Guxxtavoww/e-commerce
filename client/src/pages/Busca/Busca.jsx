import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar } from "../../components";
import { publicRequest } from "../../api";
import { BuscaBox, Produto } from "./styles";

const Busca = () => {
    const { search } = useLocation();
    const [ produtos, setProdutos ] = useState([]);

    let query = search.split("=")[1];   
    
    useEffect(() => {
        const getProdutos = async () => {
            const res = await publicRequest.get(`/produto/${search}`);
            setProdutos(res.data);
        } 
        getProdutos();
    }, []);

    return (
        <React.Fragment>
            <Navbar isHome={false} />
            {
                produtos.length ? (
                    <BuscaBox>
                        <div className="header">
                            <h1>Resultados para: <b>{query}</b></h1>
                        </div>
                        <div className="produtos">
                            {
                                produtos.map((produto, index) => (
                                    <Produto key={index}>
                                        <figure className="imgProdutoBx">
                                            <img src={produto.img} alt="Img Produto Busca" />
                                        </figure>
                                        <div className="desc">
                                            <div className="conteudo">
                                                <h3>Nome: {produto.title}</h3>
                                                <p>Descrição: {produto.desc.substr(0, 100)}...</p>
                                                <Link to={`/produto/${produto._id}`} className="btn">Ver</Link>
                                            </div>
                                        </div>
                                    </Produto>
                                ))
                            }
                        </div>
                    </BuscaBox>
                ) : (
                    <span style={{ fontSize: "1.5rem", margin: "1.5rem" }}>Carregando...</span>
                )
            }
        </React.Fragment>
    );
}

export default Busca;