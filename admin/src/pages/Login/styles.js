import styled from "styled-components";

export const LoginBox = styled.section`
    position: relative;
    width: 100%;
    padding: 1rem;
    display: grid;
    place-items: center;
`;

export const Wrapper = styled.form`
    width: 100%;
    max-width: 600px;
    min-height: 300px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    h1 {
        font-weight: 500;
        font-size: 2em;
        user-select: none;
    }
    & > input {
        width: 100%;
        background-color: #fff;
        padding: 8px;
        border: 1px solid #808080;
        font-size: 1.1rem;
        &::placeholder {
            font-size: 1.1rem;
        }
    }
    button {
        padding: 8px 5px;
        width: 100%;
        background-color: teal;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        font-size: 1.1rem;
        &:disabled {
            color: #f0f0f0;
            cursor: not-allowed;
        }
    }
`;

export const Error = styled.span`
    font-size: 1.1em;
    font-weight: 500;
    color: #f00;
`;