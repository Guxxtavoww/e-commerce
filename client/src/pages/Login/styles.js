import styled from "styled-components";

export const LoginBox = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    display: grid;
    place-items: center;
    padding: 1rem;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
    background-size: cover;
`;

export const LoginInnerBox = styled.div`
    width: 100%;
    max-width: 550px;
    padding: 1.2rem;
    background: #fff;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    h1 {
        font-size: max(30px);
        font-weight: 300;
        text-align: center;
    }
    form {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #f0f0f0;
            font-size: 1.2rem;
            &:focus {
                border: 1px solid #999;
            }
        }
        button {
            background: teal;
            color: #fff;
            width: 100%;
            max-width: 250px;
            text-align: center;
            text-transform: uppercase;
            padding: 1rem 5px;
            cursor: pointer;
            &:disabled {
                color: #f0f0f0;
                cursor: not-allowed;
            }
        }
        .link {
            color: #999;
            font-size: .85rem;
        }
    }
`;

export const Error = styled.span`
    font-size: 1.1em;
    font-weight: 500;
    color: red;
`;