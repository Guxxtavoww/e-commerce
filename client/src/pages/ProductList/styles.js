import styled from "styled-components";

export const ProductListBox = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    background-color: #fbfbfb;
`;

export const Wrapper = styled.div`
    background-color: inherit;
    width: 100%;
    padding: 1rem;
    .cabecalho {
        width: 100%;
        display: flex;
        align-items: flex-start;
        h1 {
            font-weight: 300;
            font-size: 2.5em;
            text-transform: capitalize;
        }
    }
    .controls {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin: 2.5rem 0;
        .control {
            display: flex;
            align-items: center;
            gap: 8px;
            span {
                font-size: 1.15em;
                font-weight: 500;
                text-align: center;
            }
            select {
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0,.2);
                padding: 5px;
                user-select: none;
                max-width: 100px;
                cursor: pointer;
            }
        }
    }
    .products {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
    @media screen and (max-width: 600px) {
        .controls {
            flex-direction: column-reverse;
            justify-content: center;
            gap: 1rem;
            .control {
                flex-direction: column;
            }
        }
        .cabecalho {
            align-items: center;
            justify-content: center;
        }
    }
`;