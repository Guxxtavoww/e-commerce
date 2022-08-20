import styled from "styled-components";

export const HomeBox = styled.section`
    width: 100%;
    padding: 1rem;
    .homeWidgets {
        display: grid;
        /* place-items: center; */
        grid-template-columns: 1fr 2fr;
        gap: 1.5rem;
        margin-top: ${props => props.widthProp > 1330 ? "0" : "1.5rem"};
    }
    @media screen and (max-width: 480px) {
        .homeWidgets {
            grid-template-columns: 1fr;
        }
    }
`;