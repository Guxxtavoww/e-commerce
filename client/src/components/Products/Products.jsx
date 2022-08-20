import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

import { publicRequest } from "../../api";
import { ProductsBox, Circle, Product } from "./styles";

const Products = ({ filters, sort, cat, isHome }) => { 
    const [ produtos, setProdutos ] = useState([]);
    const [ filteredProdutos, setFilteredProdutos ] = useState([]);

    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        cat && setFilteredProdutos(
            produtos.filter(item => Object.entries(filters).every(
                ([ key, value ]) => item[key].includes(value)
            ))
        );
    }, [ produtos, cat, filters ]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(cat ? `/produto?category=${cat}` : `/produto`);
                setProdutos(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [ cat ]);

    useEffect(() => {
        switch(sort) {
            case "novos":
                setFilteredProdutos(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt));
            break;
            case "priceAsc":
                setFilteredProdutos(prev => [...prev].sort((a, b) => a.price - b.price));
            break;
            case "priceDesc":
                setFilteredProdutos(prev => [...prev].sort((a, b) => b.price - a.price));
            break;
        }
    }, [ sort ]);

    return (
            <React.Fragment>
                { isHome && <h2 style={{ textAlign: "center", padding: "1rem 0", fontSize: "3em", fontWeight: "500" }}>Produtos</h2> }
                <ProductsBox>
                    {
                        cat ? filteredProdutos.map(item => (
                            <Product key={item._id}>
                                <Circle />
                                <img src={item.img} alt="IMG PRODUTO" />
                                <div className="productInfo">
                                    {
                                        user && (
                                            <button className="btn">
                                                <ShoppingCartOutlined className="icon" />
                                            </button>
                                        )
                                    }
                                    <Link className="btn" to={`/produto/${item._id}`}>
                                        <SearchOutlined className="icon" />
                                    </Link>
                                </div>
                            </Product>
                        )) : produtos.slice(0, 8).map(item => (
                            <Product key={item._id}>
                                <Circle />
                                <img src={item.img} alt="IMG PRODUTO" />
                                <div className="productInfo">
                                    {
                                        user && (
                                            <button className="btn">
                                                <ShoppingCartOutlined className="icon" />
                                            </button>
                                        )
                                    }
                                    <Link className="btn" to={`/produto/${item._id}`}>
                                        <SearchOutlined className="icon" />
                                    </Link>
                                </div>
                            </Product>
                        ))
                    }
                </ProductsBox>
            </React.Fragment>
    );
}

export default Products;