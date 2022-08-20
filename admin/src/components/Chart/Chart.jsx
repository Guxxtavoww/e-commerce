import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import { ChartBox } from "./styles";

const Chart = ({ grid, data, dataKey, title, shadow }) => {
    return (
        <ChartBox shadow={shadow}>
            <h3>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </ChartBox>
    );
}

export default Chart;