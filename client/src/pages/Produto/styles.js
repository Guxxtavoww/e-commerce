import styled from "styled-components";

export const ProductBox = styled.section`
    width: 100%;
    height: calc(100vh - 60px);
    padding: 2rem;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 1rem;
    background-color: #fbfbfb;
    .imageBx {
        position: relative;
        width: 100%;
        max-height: 800px;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    
    }
    .productDescription {
        padding: 10px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .desc {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;
            h1 {
                font-weight: 300;
                font-size: 2em;
            }
            p {
                line-height: 1.6em;
                text-align: justify;
            }
            .price {
                font-size: 2.1em;
                font-weight: 300;
            }
        }
        .controls {
            width: 100%;
            max-width: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 1.5rem;
            .control {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: wrap;
                .colorsBx {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    .colors {
                        display: flex;
                        gap: 8px;
                    }
                }
                .sizes {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    select {
                        padding: 5px;
                        background: #fff;
                        border: 1px solid rgba(0, 0, 0,.2);
                        option {
                            cursor: pointer;
                            text-transform: uppercase;
                        }
                    }
                }
                .qtd {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    span {
                        font-size: 1.3em;
                    }
                    svg {
                        cursor: pointer;
                    }
                }
                button {
                    padding: 8px 16px;
                    cursor: pointer;
                    background-color: #0d0d0d;
                    color: #fff;
                    font-weight: 500;
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        & {
            grid-template-columns: 1fr;
            padding: 1rem;
        }
    }
    @media screen and (max-width: 350px) {
        .control {
            flex-direction: column;
            justify-content: center;
            gap: 10px;
        }
    }
`;

export const Color = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${props => props.colorBg};
    border: ${props => props.colorBg === "white" ? "1px solid rgba(0, 0, 0,.2)" : "none"};
`;