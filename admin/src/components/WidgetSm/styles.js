import styled from "styled-components";

export const WidgetBox = styled.section`
    position: relative;
    padding: 2rem;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    .title {
       font-size: max(22px);
       font-weight: 500;
    }
    .smList {
        width: 100%;
        .smItem {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            img {
                width: 40px;
                height: 40px;
                object-fit: cover;
                border-radius: 50%;
            }
            .widgetSmUser {
                display: flex;
                flex-direction: column;
                .username {
                    font-weight: 600;
                }
                .userSub {
                    font-weight: 300;
                    color: #555;
                }
            }
            &:first-child {
                margin-top: 1rem;
            }
            &:last-child {
                margin-bottom: 0;
            }
            .btn {
                display: inline-flex;
                gap: 5px;
                align-items: center;
                padding: 5px;
                border-radius: 5px;
                cursor: pointer;
                color: #555;
                svg {
                    font-size: 15px;
                }
            }
        }
    }
`;