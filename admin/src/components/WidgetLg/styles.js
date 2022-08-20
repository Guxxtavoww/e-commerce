import styled from "styled-components";

export const WidgetBoxLg = styled.section`
    padding: 2rem;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    .title {
        font-size: 22px;
        font-weight: 600;
    }
    .widgetLgTable {
        width: 100%;
        border-spacing: 1rem;
        display: table;
        .lgTh {
            text-align: left;
        }
        .lgTr {
            .lgUser {
                display: flex;
                align-items: center;
                font-weight: 600;
                gap: 10px;
                img {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: 50%;
                }
            }
            .date, 
            .amnt {
                font-weight: 300;
            }
        }
    }
`;