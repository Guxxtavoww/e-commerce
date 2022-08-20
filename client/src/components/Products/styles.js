import styled from "styled-components";

export const ProductsBox = styled.section`
    width: 100%;
    padding: 0 0 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
`;

export const Product = styled.div`
    position: relative;
    flex: 1;
    min-width: 280px;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    img {
        max-width: 210px;
        max-height: 262px;
        z-index: 3;
    }
    .productInfo {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2); 
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transition: .3s;
        visibility: hidden;
        opacity: 0;
        z-index: 10;
        .btn {
            width: 40px;
            height: 40px;
            background-color: #fff;
            transition: .5s;
            display: grid;
            place-items: center;
            border-radius: 50%;
            cursor: pointer;
            color: #0d0d0d;
            &:hover {
                background-color: #e9f5f5;
                transform: scale(1.1);
            }
        }
    }    
    &:hover .productInfo {
        visibility: visible;
        opacity: 1;
    }
`;  

export const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 200px;
    min-height: 200px;
    background-color: #fff;
    border-radius: 50%;
`;