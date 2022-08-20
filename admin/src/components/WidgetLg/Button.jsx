import React from "react";
import styled from "styled-components";

const styledBtn = props => {
    switch(props) {
        case "aprovado":
            return { bg: "#e5faf2", clr: "#3bb077" };    
        break;
        case "pendente": 
            return { bg: "#ebf1fe", clr: "#2a7ade" };
        break;
        case "recusado":
            return { bg: "#fff0f1", clr: "#d95087" };
        break;
    }
}

const BtnBox = styled.button`
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;
    font-weight: 600;
    color: ${props => styledBtn(props.stylesType).clr};
    background-color: ${props => styledBtn(props.stylesType).bg};
`;

const Button = ({ type }) => {
    return (
        <BtnBox stylesType={type}>{type}</BtnBox>
    );
}

export default Button;