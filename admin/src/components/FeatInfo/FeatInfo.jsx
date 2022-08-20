import React, { useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

import { userRequest } from "../../api";
import { FeatBox, FeatItem } from "./styles";

const FeatInfo = () => {
    const [perc, setPerc] = useState(0);
    const [income, setIncome] = useState([]);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("/order/income");
                setIncome(res.data);
                setPerc((res.data[1].quantity * 100) / res.data[0].quantity - 100);
            } catch (error) {
                console.log(error);
            }
        }
        getIncome();
    }, []);

    return (
        <FeatBox>
            <FeatItem>
                <span className="title">Rendimento</span>
                <div className="mnContainer">
                    <span className="mn">R${income[1]?.quantity}</span>
                    <span className="mnRate">
                        %{ Math.floor(perc) }{" "}
                        {
                            perc < 0 ? <ArrowDownward className="featuredIcon negative" /> : <ArrowUpward className="featuredIcon" />  
                        }
                    </span>
                </div>
                <span className="sub">Compare com o último mês</span>
            </FeatItem>
        </FeatBox>
    );
}

export default FeatInfo;