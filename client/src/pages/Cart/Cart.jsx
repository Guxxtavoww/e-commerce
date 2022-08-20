import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

import * as C from "./styles";
import { userRequest } from "../../api";
import { Navbar } from "../../components";

const KEY = process.env.REACT_APP_STRIPE_KEY;

const Cart = () => {
    const navigation = useNavigate();

    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.currentUser);

    const [ stripeToken, setStripeToken ] = useState(null);

    const onToken = token => setStripeToken(token);

    useEffect(() => {
        const makeReq = async () => {
            try {
                const res = await userRequest.post("/pagamento", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                navigation("/sucesso", { state: { stripeData: res.data, products: cart } });
            } catch (error) {}
        }
        stripeToken && makeReq();
    }, [ stripeToken, cart.total ]);

    return (
        <React.Fragment>
            <Navbar isHome={false} />
            <C.CartBox>
                <C.Wrapper>
                    <h1>Seu carrinho</h1>
                    <C.TopWrapper>
                        <C.TopButton>Continue Comprando</C.TopButton>
                        <div className="texts">
                            <span className="info">Carrinho ({cart.quantity})</span>
                            <span className="info">Lista de Desejos (0)</span>
                        </div>
                    </C.TopWrapper>
                    <C.BottomWrapper>
                        <div className="produtos">
                            {
                                cart.products.length ? (
                                    cart.products.map((produto, index) => (
                                        <div className="produto" key={index}>
                                            <div className="infoBx">
                                                <img src={produto.img} alt="Produto Img" />
                                                <div className="info">
                                                    <span className="name">
                                                        <b>Produto: </b> {produto.title}
                                                    </span>
                                                    <span className="id">
                                                        <b>ID: </b> {produto._id.substr(0, 8)}...
                                                    </span>
                                                    { produto.color && <C.ColorProduct colorBg={produto.color} /> }
                                                    {
                                                        produto.size && (
                                                            <span className="size">
                                                                <b>Tamanho: </b> {produto.size}
                                                            </span>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div className="controls">
                                                <div className="qtd">
                                                    <Add className="icon" />
                                                    {produto.quantity}
                                                    <Remove className="icon"/>
                                                </div>
                                                <div className="price">R$: {produto.price * produto.quantity}</div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>Você não tem Produtos no seu carrinho</div>
                                )
                            }
                        </div>
                        <div className="summary">
                            <div className="header">
                                <h3>Resumo do Pedido</h3>
                            </div>
                            <div className="content">
                                <div className="costs">
                                    <span className="name">Subtotal:</span>
                                    <span className="cost">R${cart.total}</span>
                                </div>
                                <div className="costs">
                                    <span className="name">Frete:</span>
                                    <span className="cost">R$10</span>
                                </div>
                                <div className="costs">
                                    <span className="name">Disconto Frete:</span>
                                    <span className="cost">-R$10</span>
                                </div>
                                <div className="total">
                                    <h4>Total</h4>
                                    <span>R${cart.total}</span>
                                </div>
                                <StripeCheckout
                                    name="Loja Teste"
                                    image="https://img.elo7.com.br/product/main/24C0D6F/plaquinha-palavras-cruzadas-letra-l-palavras-cruzadas.jpg"
                                    shippingAddress={user.adress}
                                    billingAddress
                                    description={`Seu total é de R$:${cart.total}`}
                                    amount={cart.total * 100}
                                    stripeKey={KEY} 
                                    token={onToken}   
                                >
                                    <button className="order">Finalizar Pedido</button>
                                </StripeCheckout>
                            </div>
                        </div>
                    </C.BottomWrapper>
                </C.Wrapper>
            </C.CartBox>
        </React.Fragment>
    );
}

export default Cart;