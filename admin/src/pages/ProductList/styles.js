import styled from "styled-components";

export const ProductListBox = styled.section`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .productListItem {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .productListImg {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }
    .productListEdit {
        border-radius: 10px;
        padding: 8px 15px;
        background-color: #3bb077;
        color: #fff;
        cursor: pointer;
        margin-right: 1rem;
    }
    .productListDelete {
        color: #f00;
        cursor: pointer;
    }
    .link {
        border-radius: 10px;
        padding: 8px 15px;
        background-color: #3bb077;
        color: #fff;
        cursor: pointer;
        max-width: 180px;
        text-align: center;
    }
`;