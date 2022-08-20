import styled from "styled-components";

export const BuscaBox = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    padding: 1rem 2rem;
    background: #fbfbfb;
    .header {
        width: 100%;
        display: flex;
        align-items: flex-start;
        margin-bottom: 1rem;
        h1 {
            font-weight: 300;
            font-size: clamp(1.8rem, 10vmin, 2.8em);
            text-align: center;
            b {
                text-decoration: underline;
                font-weight: 500;
            }
        }
    } 
`;

export const Produto = styled.div`
    width: 100%;
    min-height: 300px;
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0,.2);
    .imgProdutoBx {
        width: 100%;
        max-height: 260px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .desc {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .conteudo {
            position: relative;
            h3 {
                font-size: 1.8em;
                font-weight: 300;
                margin-bottom: 10px;
            }
            p {
                font-weight: 500;
                margin-bottom: 20px;
            }
            .btn {
                background-color: #0d0d0d;
                color: #fff;
                padding: 8px 2rem;
                border-radius: 5px;
                transition: .3s;
                &:hover {
                    letter-spacing: 4px;
                }
            }
        }
    }
    &:last-child {
        border-bottom: none;
    }
    @media screen and (max-width: 400px) {
        & {
            grid-template-columns: 1fr;
        }
        .desc {
            justify-content: center;
            .conteudo {
                text-align: center;
            }
        }
    }
`;