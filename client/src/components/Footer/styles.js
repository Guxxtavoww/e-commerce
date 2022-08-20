import styled from "styled-components";

export const FooterBox = styled.footer`
    padding: 1rem;
    text-align: center;
    span {
        text-align: center;
        color: #0d0d0d;
        font-weight: 600;
        font-size: 1.5em;
        a {
            color: inherit;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;