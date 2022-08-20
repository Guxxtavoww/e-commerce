import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import { ProductListBox } from "./styles";
import { getProducts, deleteProduct } from "../../redux/apiCalls";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    const handleDelete = id => deleteProduct(id, dispatch);

    useEffect(() => {
        getProducts(dispatch);
    }, [ dispatch ]);

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
            field: "produto",
            headerName: "Produto",
            width: 200,
            renderCell: params => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="Produto Img" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "inStock", headerName: "Stoque", width: 200 },
        {
            field: "price",
            headerName: "Preço (R$)",
            width: 160,
        },
        {
            field: "acao",
            headerName: "Ação",
            width: 150,
            renderCell: params => {
                return (
                    <React.Fragment>
                        <Link to={`/produto/${params.row._id}`}>
                            <span className="productListEdit">Editar</span>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
                    </React.Fragment>
                );
            },
        },
    ];

    return (
        <ProductListBox>
            <Link to="/criar-produto" className="link">Registrar Produto</Link>
            <DataGrid rows={products} getRowId={row => row._id} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </ProductListBox>
    );
}

export default ProductList;