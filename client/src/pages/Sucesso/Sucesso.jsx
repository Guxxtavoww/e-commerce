import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";


import { Wrapper } from "./style";
import { userRequest } from "../../api";
import { Navbar } from "../../components";

const Sucesso = () => {
    const { state } = useLocation();
    const [ orderId, setOrderId ] = useState(null);
    const currentUser = useSelector((state) => state.user.currentUser);
    
    let cart = state.cart;
    let data = state.stripeData;

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/order", {
                    userId: currentUser._id,
                    products: cart?.map(item => ({
                        productId: item._id,
                        quantity: item.quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });
                setOrderId(res.data._id);
            } catch (error) {}
        }
        data && createOrder();
    }, [ cart, data, currentUser ]);


    return (
        <React.Fragment>
            <Navbar />
            <Wrapper>
                {
                    orderId ? <div>Pedido criado com sucesso, o id dele é: {orderId}</div> : <div>Sucesso! Seu pedido está sendo processado</div>
                }
            </Wrapper>
        </React.Fragment>
    );
}

export default Sucesso;