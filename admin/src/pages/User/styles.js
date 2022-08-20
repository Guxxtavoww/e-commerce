import styled from "styled-components";

export const UserBox = styled.section`
    position: relative;
    width: 100%;
    padding: 1rem 2rem;
    min-height: calc(100vh - 50px);
    .controlBx {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
            font-weight: 600;
            font-size: max(2rem);
            text-align: center;
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
        }
    }
    .userContainer {
        width: 100%;
        margin: 1rem 0;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
        .userDisplay {
            padding: 1.5rem;
            box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
            .top {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: cover;
                }
                .titleBx {
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;
                    .username {
                        font-weight: 600;
                        font-size: 1.15em;
                    }
                    .title {
                        font-weight: 300;
                        color: #555;
                    }
                }
            }
            .bottom {
                position: relative;
                width: 100%;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                gap: 1.3rem;
                & > span {
                    font-weight: 600;
                    color: #777;
                    font-size: 15px;
                }
                .info {
                    position: relative;
                    margin-bottom: 1.2rem;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    color: #433;
                    .icone {
                        font-size: 1.1em;
                    }
                    .infoTitle {
                        font-weight: 500;
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
        .userUpdate {
            padding: 1.5rem;
            box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 1.5rem;
            flex-direction: column;
            .title {
                font-size: 1.8em;
                font-weight: 600;
            }
            .updateForm {
                width: 100%;
                flex: 1;
                display: flex;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
                .updateSection {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    flex-direction: column;
                    button {
                        background: teal;
                        color: #fff;
                        padding: 5px 1rem;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    .inputBx {
                        display: flex;
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 5px;
                        width: 100%;
                        label {
                            font-size: 1rem;
                            font-weight: 500;
                            color: #444;
                        }
                        input {
                            width: 100%;
                            padding: 10px 0;
                            background-color: #fff;
                            border-bottom: 2px solid #888;
                            &:focus {
                                border-bottom: 2px solid #0d0d0d;
                            }
                        }
                    }
                    .uploadBx {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 1rem;
                        flex: 1;
                        img {
                            width: 100px;
                            height: 100px;
                            object-fit: cover;
                            border-radius: 15px;
                        }
                        label {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 480px) {
        & {
            padding: 1rem;
        }
        .userContainer {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr;
        }
    }
`;