import styled from "styled-components";

export const NewProductBox = styled.section`
    padding: 1rem;
    min-height: calc(100vh - 50px);
    h1 {
        font-size: 1.8em;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    .form {
        position: relative;
        width: 100%;
        .productItem {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            gap: 10px;
            .inputBx {
                .file {
                    display: inline-flex;
                    gap: 5px;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                }
            }
            &:last-child {
                margin-bottom: 0;
            }
            & > label {
                color: #808080;
                font-weight: 600;
            }
            & > input[type="text"],
            & > input[type="number"] {
                padding: 10px;
                border: 1px solid #808080;
            }
            & > select {
                padding: 10px;
                border: 1px solid #808080;
                cursor: pointer;
                background-color: #fff;
            }
            & > textarea {
                height: 8rem;
                overflow-y: scroll;
                padding: 5px;
                border: 1px solid #808080;
                color: #0d0d0d;
                background: #fff;
                resize: none;
                &:focus {
                    border: 1px solid #0d0d0d;
                }
                &::-webkit-scrollbar {
                    width: 5px;
                }
                &::-webkit-scrollbar-track {
                    padding: 5px;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: #999;
                    border-radius: 40px;
                }
                
            }
        }
        button {
            width: 100%;
            margin: 10px 0;
            padding: 10px 5px;
            border-radius: 10px;
            background-color: darkblue;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
        }
    }
`;

export const Error = styled.span`
    color: #f00;
    font-weight: 700;
    font-size: 1.1em;
    text-transform: uppercase;
`;