import styled from "styled-components";

export const CartBox = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    background: #fbfbfb;
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    h1 {
        font-weight: 300;
        text-align: center;
        font-size: 32px;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
`;

export const TopWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    .info {
        text-decoration: underline;
        cursor: pointer;
        margin: 0px 10px;
    }
    @media screen and (max-width: 500px) {
        & .texts {
            display: none;
        }
    }
`;

export const BottomWrapper = styled.div`
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    width: 100%;
    .produto {
        display: flex;
        justify-content: space-between;
        padding: 2rem 1rem;
        border-bottom: 1px solid #d0d0d0;
        .infoBx {
            display: flex;
            align-items: center;
            gap: 1rem;
            img {
                display: block;
                max-width: 200px;
                object-fit: cover;
            }
            .info {
                max-width: 260px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
                & > * {
                    text-transform: uppercase;
                }
            }
        }
        .controls {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            .qtd {
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 2rem;
                .icon {
                    cursor: pointer;
                }
            }
            .price {
                font-size: 2.5em;
            }
        }
        &:last-child {
            border-bottom: none;
        }
    }
    .summary {
        padding: 1rem;
        border-radius: 10px;
        border: 1px solid #ddd;
        width: 100%;
        .header {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: 1rem;
            h3 {
                font-size: 2em;
                font-weight: 300;
            }
        }
        .content {
            width: 100%;
            .costs {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                &:last-child {
                    margin-bottom: 0;
                }
            }
            .total {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4 {
                    font-size: 1.8em;
                    font-weight: 500;
                }
                margin-bottom: 1rem;
            }
            .order {
                width: 100%;
                padding: 8px;
                cursor: pointer;
                color: #fff;
                background-color: #0d0d0d;
            }
        }
    }

    @media screen and (max-width: 600px) {
        & {
            grid-template-columns: 1fr;
        }
        .produto {
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            .infoBx {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                .info > * {
                    text-align: center;
                }
            }
        }
    }
`;

export const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" ? "none" : "1px solid #0d0d0d"};
    background-color: ${(props) => props.type === "filled" ? "#000" : "transparent"};
    color: ${(props) => props.type === "filled" ? "#fff" : "#0d0d0d"};
`;

export const ColorProduct = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.colorBg};
    cursor: pointer;
    border: ${props => props.colorBg === "white" && "1px solid rgba(0, 0, 0,.2)"};
`;