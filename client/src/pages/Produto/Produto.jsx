import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import { publicRequest } from "../../api";
import { Navbar } from "../../components";
import { ProductBox, Color } from "./styles";
import { addProduct } from "../../redux/cartRedux";

const Produto = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [ size, setSize ] = useState("");
    const [ color, setColor ] = useState("");
    const [ produto, setProduto ] = useState([]);
    const [ quantity, setQuantidade ] = useState(1);
    
    useEffect(() => {
        const getProduto = async () => {
            try {
                let id = location.pathname.split("/")[2];
                const res = await publicRequest.get(`/produto/${id}`);
                setProduto(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduto();
    }, []);

    const handleAmount = type => {
        if(type === "dec") {
            quantity > 1 && setQuantidade(quantity - 1);
        } else {
            setQuantidade(quantity + 1);
        }
    }

    const handleClick = () => dispatch(addProduct({ ...produto, quantity, color, size }));

    return (
        <React.Fragment>
            <Navbar />
            <ProductBox>
                <figure className="imageBx">
                    <img src={produto.img} alt="Produto Single" />
                </figure>
                <div className="productDescription">
                    <div className="desc">
                        <h1>{produto.title}</h1>
                        <p>{produto.desc}</p>
                        <span className="price">R$: {produto.price}</span>
                    </div>
                    <div className="controls">
                        <div className="control">
                            <div className="colorsBx">
                                <span>Cores:</span>
                                <div className="colors">
                                    {
                                        produto.color?.map(c => (
                                            <Color colorBg={c} key={c} onClick={() => setColor(c)} />
                                        ))
                                    }
                                </div>
                            </div>
                            {
                                produto?.size !== "nao relevante" && (
                                    <div className="sizes">
                                        <span>Tamanhos:</span>
                                        <select name="size" onChange={e => setSize(e.target.value)}>
                                            {
                                                produto.size?.map(tamanho => (
                                                    <option value={tamanho} key={tamanho}>{tamanho}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                )
                            }
                        </div>
                        <div className="control">
                            <div className="qtd">
                                <Remove onClick={() => handleAmount("dec")} />
                                <span>{quantity}</span>
                                <Add onClick={() => handleAmount("incr")} />
                            </div>
                            <button onClick={handleClick}>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
            </ProductBox>
        </React.Fragment>
    );
}

export default Produto;