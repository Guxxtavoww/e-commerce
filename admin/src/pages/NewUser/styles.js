import styled from "styled-components";

export const NewUserBox = styled.section`
    padding: 1rem;
    h1 {
        margin-bottom: 2rem;
    }
    .form {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.3rem;
        .inputBx {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 8px;
            label {
                font-size: 14px;
                font-weight: 600;
                color: #808080;
            }
            & > input {
                border-radius: 5px;
                width: 100%;
                padding: 1.2rem 8px;
                background: #fff;
                border: 1px solid #f0f0f0;
            }
            select {
                padding: 1rem 8px;
                border: 1px solid #f0f0f0;
                cursor: pointer;
                background: #fff;
                border-radius: 5px;
                option {
                    cursor: pointer;
                }
            }
            .genderBx {
                width: 100%;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;
            }
        }
        button {
            width: 100%;
            padding: 8px 4px;
            cursor: pointer;
            background-color: teal;
            color: #fff;
            font-weight: 600;
            border-radius: 5px;
            grid-column: span 2;
        }
    }
    @media screen and (max-width: 991px) {
        .form {
            grid-template-columns: 1fr;
        }
    }
    @media screen and (max-width: 480px) {
        & {
            padding: 1rem;
            .form {
                button {
                    grid-column: 1;
                }
            }
        }
    }
`;

export const Error = styled.span`
    color: #f00;
    font-weight: 700;
    font-size: 1.1em;
    text-transform: uppercase;
`;