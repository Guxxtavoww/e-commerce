import styled from "styled-components";

export const SliderBox = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - (60px + 25px));
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: grid;
    place-items: center;
    position: absolute;
    left: ${props => props.direcao === "esquerda" && "1rem"};
    right: ${props => props.direcao === "direita" && "1rem"};
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: .5;
    z-index: 2;
    transition: 1s;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 600px) {
        & {
            background: #0d0d0d;
            color: #fff;
            left: ${props => props.direcao === "esquerda" && "5px"};
            right: ${props => props.direcao === "direita" && "5px"};
            width: 25px;
            height: 25px;
        }
    }
`;

export const SliderWrapper = styled.div`
    width: 100%;
    height: calc(100vh - (60px + 25px));
    display: flex;
    transition: 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
    min-width: 100vw;
    max-width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
    .imgBx {
        position: relative;
        flex: 1;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
        }
    }
    .slideContent {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 2.5rem;
        h2 {
            font-size: clamp(2rem, 10vmin, 70px);
            text-transform: uppercase;
            font-weight: 600;
        }
        p {
            font-size: clamp(.95rem, 5vmin, 24px);
        }
        h2, p {
            text-align: center;
        } 
        .btn {
            cursor: pointer;
            padding: 10px 20px;
            background: #0d0d0d;
            color: #fff;
            font-weight: 600;
            border-radius: 5px;
        }
    }

    @media screen and (max-width: 600px) {
        & {
            flex-direction: column;
            align-items: center;
            .slideContent {
                padding: 1rem;
            }
        }
    }
`;