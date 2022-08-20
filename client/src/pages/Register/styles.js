import styled from "styled-components";

export const RegisterBox = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    display: grid;
    place-items: center;
    padding: 1rem;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
`;

export const RegisterInnerBox = styled.form`
    width: 100%;
    max-width: 820px;
    background: #fff;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    h1 {
        margin-bottom: 1.2rem;
        font-size: max(24px);
        font-weight: 300;
    }
    .inputBx {
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        input {
            flex: 1;
            padding: 10px;
            border: 1px solid #f0f0f0;
            &:focus {
                border: 1px solid #999;
            }
        }
    }
    span {
        margin-bottom: 1rem;
        font-size: 12px;
    }
    button {
        background: teal;
        color: #fff;
        width: 100%;
        max-width: 300px;
        text-align: center;
        text-transform: uppercase;
        padding: 1rem 5px;
        cursor: pointer;
    }
`;