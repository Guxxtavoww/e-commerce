import styled from "styled-components";

export const SiderbarBox = styled.aside`
    position: relative;
    min-height: calc(100vh - 50px);
    padding: 1rem 20px;
    .sidebarMenu {
        position: relative;
        width: 100%;
        margin-bottom: 20px;
        h3 {
            font-size: 13px;
            color: #555;
            margin-bottom: 5px;
        }
        .sidebarLista {
            position: relative;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            padding-left: 1rem;
            li {
                width: 100%;
                .item {
                    width: 100%;
                    padding: 5px;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    cursor: pointer;
                    color: #0d0d0d;
                    border-radius: 10px;
                    .icon {
                        font-size: 20px !important;
                    }
                    &.active, 
                    &:hover {
                        background-color: #f0f0f0;
                    }
                }
            }
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 1px;
        background-color: rgba(0, 0, 0,.2);
    }
    @media screen and (max-width: 480px) {
        & {
            min-height: 100%;
            overflow-x: scroll;
            &::after {
                display: none;
            }
            .sidebarMenuBx {
                display: flex;
                align-items: center;
                gap: 1rem;
                .sidebarMenu {
                    text-align: center;
                    margin-bottom: 0;
                    min-height: 130px;
                    .sidebarLista {
                        padding-left: 0;
                        width: 150px;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        li {
                            .item {
                                justify-content: center;
                                gap: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
`;