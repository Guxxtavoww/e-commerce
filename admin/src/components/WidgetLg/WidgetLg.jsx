import { format } from "timeago.js";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import Button from "./Button";
import { WidgetBoxLg } from "./styles";
import { userRequest } from "../../api"; 

const WidgetLg = () => {
    const [ orders, setOrders ] = useState([]);

    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("/order");
                setOrders(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getOrders();
    }, []);

    return (
        <WidgetBoxLg>
            {   
                user.isAdmin ? (
                    <React.Fragment>
                        <span className="title">Últimas Transações</span>
                        <table className="widgetLgTable">
                            <thead>
                                <tr className="lgTr">
                                    <th className="lgTh">ID Cliente</th>
                                    <th className="lgTh">Data</th>
                                    <th className="lgTh">Valor</th>
                                    <th className="lgTh">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) => (
                                        <tr className="lgTr" key={index}>
                                            <td className="lgUser">
                                                <span className="name">{order.userId}</span>
                                            </td>
                                            <td className="date">{format(order.createdAt)}</td>
                                            <td className="amnt">R${order.quantity}</td>
                                            <td className="status">
                                                <Button type={order.status.toLowerCase()} />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </React.Fragment>
                ) : (
                    <span className="title">Apenas o administrador tem acesso a esse dados...</span>
                )
            }
        </WidgetBoxLg>
    );
}

export default WidgetLg;