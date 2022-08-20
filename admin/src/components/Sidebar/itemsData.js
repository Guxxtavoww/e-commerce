import React from "react";
import { LineStyle, PermIdentity, Storefront, WorkOutline } from "@material-ui/icons";

const itemsData = [
    {
        sectionTitle: "Dashboard",
        sectionData: [
            {
                name: "Home",
                to: "/",
                icon: <LineStyle className="icon"/>
            },
        ],
    },
    {
        sectionTitle: "Menu Rápido",
        sectionData: [
            {
                name: "Usuários",
                to: "/usuarios",
                icon: <PermIdentity className="icon"/>
            },
            {
                name: "Produtos",
                to: "/produtos",
                icon: <Storefront className="icon"/>
            },
        ],
    },
    {
        sectionTitle: "Funcionários",
        sectionData: [
            {
                name: "Gerenciar",
                to: "/criar-usuario",
                icon: <WorkOutline className="icon"/>
            },
        ],
    },
];

export default itemsData;