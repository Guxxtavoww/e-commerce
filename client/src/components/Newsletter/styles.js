import styled from "styled-components";

export const NewsletterBox = styled.section`
    width: 100%;
    padding: 1rem;
    display: grid;
    place-items: center;
    background-color: #FCF5F5;
    min-height: 530px;
`;

export const InnerBox = styled.div`
    width: 100%;
    max-width: 1100px;
    h2 {
        font-size: clamp(2em, 11vmin, 70px);
        font-weight: 600;
        text-align: center;
    }
    p {
        text-align: center;
        font-size: clamp(1em, 3vmin, 1.8em);
        font-weight: 300;
        margin: 1.8rem 0 1.5rem 0;
    }
    .inputBx {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        & > * {
            padding: 8px;
            height: 40px;
        }
        input {
            flex: 1;
            max-width: 640px;
            border: 1px solid #f0f0f0;
        }
        .send {
            flex: 1;
            max-width: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background-color: teal;
            border: 1px solid transparent;
            cursor: pointer;
        }
    }
`;