import React, { useEffect, useState, useMemo } from "react";

import { HomeBox } from "./styles";
import { userRequest } from "../../api";
import { FeatInfo, Chart, WidgetSm, WidgetLg } from "../../components";

const Home = () => {
    const [ width, setWidth ] = useState(0);
    const [ userStats, setUserStats ] = useState([]);

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
                const res = await userRequest.get("/user/users/status");
                res.data.map(item => {
                    setUserStats(prev => [ ...prev, { name: MESES[item._id - 1], "Usuário Ativo": item.total } ]);
                });
            } catch (error) {
                console.log(error);
            }
        }
        getStats(); 
    }, [ MESES ]);

    useEffect(() => setWidth(Number(window.innerWidth)) , [ window.innerWidth ]);

    return (
        <HomeBox widthProp={width}>
            <FeatInfo />
            { width > 1330 && <Chart grid data={userStats} title="Análise de Usuários" dataKey="Usuário Ativo" /> }
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </HomeBox>
    );
}

export default Home;