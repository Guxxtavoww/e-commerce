import styled from "styled-components";

export const UsersBox = styled.section`
    padding: 1rem;
    min-height: calc(100vh - 50px);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .userListUser {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .userListImg {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }
    .userListEdit{
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        background-color: #3bb077;
        color: #fff;
        cursor: pointer;
        margin-right: 20px;
    }
    .userListDelete{
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