import { useSelector } from "react-redux";
import { Publish } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import React, { useMemo, useState, useEffect} from "react";

import { ProductBox } from "./styles";
import { userRequest } from "../../api";
import { Chart } from "../../components";

const Product = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/")[2];

    const produto = useSelector(state => state.product.products.find(product => product._id === id));

    const [ desc, setDesc ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ inStock, setInStock ] = useState("");

    const [ productStats, setProductStats ] = useState([]);

    const MESES = useMemo(() => [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Maio",
        "Jun",
        "Jul",
        "Ago", 
        "Set",
        "Out",
        "Nov", 
        "DEC"
    ], []);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get(`/order/income?pid=${id}`);
                const lista = res && res.data.sort((a, b) => { return a._id - b._id });
                lista.map(item => setProductStats(prev => [ 
                    ...prev, { name: MESES[item._id - 1], Sales: item.quantity } 
                ]));
            } catch (error) {
                console.log(error);
            }
        } 
        getStats();
    }, [ MESES, id ]);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await userRequest.put(`/produto/${id}`, {
                title,
                desc,
                price,
                inStock
            });
            window.location.replace(`/produtos`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ProductBox>
            {
                produto ? (
                    <React.Fragment>
                        <div className="productHead">
                            <h1>Produto</h1>
                            <Link to="/criar-produto">Criar</Link>
                        </div>
                        <div className="productWrapper">
                            <div className="productSection">
                                <Chart data={productStats} dataKey="Vendas" title="Peformace de Vendas" shadow />
                            </div>
                            <div className="productSection">
                                <div className="productInfoTop">
                                    <img src={produto.img} alt="Imagem Produto" />
                                    <span className="productName">{produto.title}</span>
                                </div>
                                <div className="productInfo">
                                    <div className="productInfoItem">
                                        <span className="productInfoKey">id:</span>
                                        <span className="productInfoValue">{produto._id.substring(0, 10)}...</span>
                                    </div>
                                    <div className="productInfoItem">
                                        <span className="productInfoKey">Vendas:</span>
                                        <span className="productInfoValue">5123</span>
                                    </div>
                                    <div className="productInfoItem">
                                        <span className="productInfoKey">Em Stoque:</span>
                                        <span className="productInfoValue">{produto.inStock ? "Sim" : "Não"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="formSection">
                                <label>Nome do Produto</label>
                                <input type="text" placeholder={produto.title} name="name" onChange={e => setTitle(e.target.value)} />
                                <label>Descrição do Produto</label>
                                <textarea placeholder={`${produto.desc.substring(0, 30)}...`} name="desc" onChange={e => setDesc(e.target.value)} />
                                <label>Preço do Produto</label>
                                <input type="text" placeholder={`R$:${produto.price}`} name="price" onChange={e => setPrice(e.target.value)} />
                                <label>Em Stoque</label>
                                <select name="inStock" id="idStock" onChange={e => setInStock(e.target.value)}>
                                    <option value="true">Sim</option>
                                    <option value="false">Não</option>
                                </select>
                            </div>
                            <div className="formSection">
                                <div className="productUpload">
                                    <img src={produto.img} alt="Imagem Produto" />
                                    <label htmlFor="file">
                                        <Publish />
                                    </label>
                                    <input type="file" id="file" name="file" style={{ display: "none" }} />
                                </div>
                                <button className="productButton" type="submit">Atualizar</button>
                            </div>
                        </form>
                    </React.Fragment>
                ) : (
                    <h1>Não existe um produto com esse ID</h1>
                )
            }
        </ProductBox>
    );
}

export default Product;