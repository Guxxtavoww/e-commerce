import styled from "styled-components";

export const FeatBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const FeatItem = styled.div`
    flex: 1;
    /* background-color: #f0f0f0; */
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    .title {
        font-size: max(20px);
        font-weight: 500;
    }
    .mnContainer {
        width: 100%;
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        .mnRate {
            display: inline-flex;
            align-items: center;
            .icon {
                font-size: 14px;
                color: green;
                &.negative {
                    color: red;
                }
            }
        }
        .mn {
            font-size: max(30px);
            font-weight: 600;
        }
    }
    .sub {
        font-size: max(15px);
        color: #555;
    }
`;