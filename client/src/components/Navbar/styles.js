import styled from "styled-components";

export const NavbarBox = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    gap: 1rem;
    z-index: 10;
    .searchBx {
        position: relative;
        max-width: 100%;
        input {
            border: .5px solid lightgray;
            padding: 8px 24px 8px 8px;
            width: 100%;
            &:focus {
                border: .5px solid darkgray;
            }
        }
        label {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 5px;
            color: lightgray;
            display: grid;
            place-items: center;
            height: 100%;
            width: 24px;
            cursor: pointer;
        }
    }
    .logo {
        font-size: clamp(1.5rem, 4vmin, 32px);
        font-weight: 600;
        text-transform: uppercase;
        color: #0d0d0d;
    }
    .toogle {
        display: none;
        visibility: hidden;
        cursor: pointer;
        .icon {
            font-size: 1.5rem;
        }
    }
    .rightSection {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        transition: .3s;
        background: #fff;
        .user {
            font-size: 1.15rem;
            color: #0d0d0d;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2px;
        }
        .link {
            font-size: 14px;
            text-transform: uppercase;
            cursor: pointer;
            color: #0d0d0d;
            &:hover {
                color: #999;
            }
        }
        .cart {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            .icon {
                color: #0d0d0d;
            }
            &:hover {
                background: #f5f5f5;
            }
        }
    }
    @media screen and (max-width: 540px) {
        & {
            padding: 0 10px;
        }
        .searchBx {
            max-width: 120px;
        }
        .toogle {
            display: block;
            visibility: visible;
        }
        .rightSection {
            position: absolute;
            min-height: ${props => props.isHome ? "calc(100vh - (60px + 25px))" : "calc(100vh - 60px)"};
            width: 100%;
            top: -100%;
            left: 0;
            visibility: hidden;
            opacity: 0;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
            z-index: 8;
            .link {
                font-size: 2em;
            }
            .cart > .icon {
                font-size: 2em;
            }
            &.active {
                top: ${props => props.isHome ? "calc(60px + 25px)" : "60px"};
                visibility: visible;
                opacity: 1;
            }
        }
    }
`;

export const CartLength = styled.div`
    position: absolute;
    top: -.25rem;
    right: -.25rem;
    background-color: #3f51b5;
    font-size: .75rem;
    min-width: 20px;
    min-height: 20px;
    padding: 0 6px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;