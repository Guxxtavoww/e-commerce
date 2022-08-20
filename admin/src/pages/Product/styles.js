import styled from "styled-components";

export const ProductBox = styled.section`
    padding: 1rem;
    /* min-height: calc(100vh - 50px); */
    .productHead {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        h1 {
            font-weight: 500;
            font-size: 1.8em;
        }
        a {
            padding: 5px;
            background-color: teal;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
            width: 100%;
            max-width: 80px;
            text-align: center;
            font-weight: 500;
            font-size: max(1rem);
            display: grid;
            place-items: center;
        }
    }
    .productWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex-wrap: wrap; */
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        .productSection {
            max-width: 940px;
            min-height: 296px;
            flex: 1;
            box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
            &:last-child {
                box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
                padding: 2rem;
            }
            .productInfoTop {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem;
                img {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
            .productInfoItem {
                width: 100%;
                max-width: 150px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;
                &:last-child {
                    margin-bottom: 0;
                }
                .productInfoValue {
                    font-weight: 300;
                }
            }
        }
    }
    .form {
        width: 100%;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
        .formSection {
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 10px;
            & > label {
                color: #808080;
            }
            & > input[type="text"] {
                border: none;
                padding: 5px;
                border-bottom: 1px solid #808080;
                color: #0d0d0d;
                &:focus {
                    border-bottom: 1px solid #0d0d0d;
                }
            }
            & > textarea {
                height: 8rem;
                overflow-y: scroll;
                padding: 5px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                color: #0d0d0d;
                background: #fff;
                resize: none;
                &:focus {
                    border: 1px solid #808080;
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
            & > select {
                background: #fff;
                border: 1px solid #808080;
                padding: 8px;
                cursor: pointer;
            }
            .productUpload {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                img {
                    max-width: 220px;
                    max-height: 180px;
                    border-radius: 10px;
                    object-fit: cover;
                    margin-right: 20px;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                }
                label {
                    cursor: pointer;
                }
            }
            button {
                padding: 5px;
                border-radius: 5px;
                background-color: darkblue;
                color: #fff;
                font-weight: 600;
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: 1100px) {
        .productWrapper {
            flex-direction: column;
            .productSection {
                width: 100%;
                max-width: 100%;
                padding: 0;
            }
        }
        .form {
            flex-direction: column;
        }
    }
`;