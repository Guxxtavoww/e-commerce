import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { ProductListBox, Wrapper } from "./styles";
import { Navbar, Newsletter, Products } from "../../components";

const ProductList = () => {
    const location = useLocation();
    useEffect(() => scrollTo(0, 0), []);
    const [ filters, setFilters ] = useState({});
    const [ sort, setSort ] = useState("novos");

    let cat = location.pathname.split("/")[2];

    const handleFilters = e => {
        let value = e.target.value;
        setFilters({ ...filters, [ e.target.name ]: value });
    }

    return (
        <React.Fragment>
            <Navbar isHome={false} />
            <ProductListBox>
                <Wrapper>
                    <header className="cabecalho">
                        <h1>{cat}</h1>
                    </header>
                    <div className="controls">
                        <div className="control">
                            <span>Filtre Produtos: </span>
                            <select name="color" onChange={handleFilters}>
                                <option value="" disabled>Cores</option>
                                <option value="branco">Branco</option>
                                <option value="preto">Preto</option>
                                <option value="vermelho">Vermelho</option>
                                <option value="outros">Outras</option>
                            </select>
                            <select name="size" onChange={handleFilters}>
                                <option value="" disabled>Tamanhos</option>
                                <option value="G">G</option>
                                <option value="M">M</option>
                                <option value="P">P</option>
                            </select>
                        </div>
                        <div className="control">
                            <span>Classificar Produtos: </span>
                            <select name="sort" onChange={e => setSort(e.target.value)}>
                                <option value="novos">Novos</option>
                                <option value="priceAsc">Preços Cresc</option>
                                <option value="priceDesc">Preços Dec</option>
                            </select>
                        </div>
                    </div>
                    <div className="products">
                        <Products cat={cat} filters={filters} sort={sort} />
                    </div>
                </Wrapper>
            </ProductListBox>
            <Newsletter />
        </React.Fragment>
    );
}

export default ProductList;