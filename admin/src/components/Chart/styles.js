import styled from "styled-components";

export const ChartBox = styled.div`
    width: 100%;
    padding: 2rem;
    box-shadow: ${props => props.shadow ? "none" : "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"};
    margin: 1rem 0;
    h3 {
        margin-bottom: 1rem;
    }
    border-radius: 5px;
`;