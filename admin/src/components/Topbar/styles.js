import styled from "styled-components";

export const TopbarBox = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 50px;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    .logo {
        font-size: max(30px);
        color: darkblue;
        font-weight: 600;
    }
    .menu {
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: #fff;
        transition: .3s;
        .iconBx {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 50%;
            padding: 5px;
            color: #0d0d0d;
            .icon {
                font-size: 1.3em;
                color: inherit;
            }
            &:hover {
                background-color: #f0f0f0;
                color: #555;
            }
        }
        .login {
            font-weight: 600;
            color: #0d0d0d;
        }
        .profile {
            position: relative;
            max-width: 40px;
            max-height: 40px;
            overflow: hidden;
            border-radius: 50%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .toggle {
        display: none;
        visibility: none;
        cursor: pointer;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0,.2);
    }
    @media screen and (max-width: 480px) {
        & {
            padding: 0 1rem;
        }
        .menu {
            position: fixed;
            top: 50px;
            left: -100%;
            width: 100%;
            min-height: calc(100vh - 50px);
            flex-direction: column;
            justify-content: center;
            visibility: hidden;
            .iconBx {
                font-size: 2em;
            }
            &.active {
                left: 0;
                visibility: visible;
            }
        }
        .toggle {
            display: block;
            visibility: visible;
        }
    }
`;

export const Length = styled.div`
    position: absolute;
    top: 1px;
    right: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: darkblue;
    display: grid;
    place-items: center;
    color: #fff;
    font-size: .7rem;
    font-weight: 600;
    user-select: none;
    @media screen and (max-width: 480px) {
        & {
            top: 5px;
            right: 5px;
        }
    }
`;