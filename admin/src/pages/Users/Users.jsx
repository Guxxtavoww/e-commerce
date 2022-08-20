import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { UsersBox } from "./styles";
import { userRequest } from "../../api";

const Users = () => {
    const [ users, setUsers ] = useState([]);

    const handleDelete = async id => {
        try {
            await userRequest.delete(`/user/${id}`); 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            const res = await userRequest.get("/user");
            res ? setUsers(res.data) : setError(true);
        }
        getUsers();
    }, [ users ]);

    const columns = [
        { field: "_id", headerName: "ID", width: 190 },
        {
            field: "username",
            headerName: "Usuário",
            width: 200,
            renderCell: params => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.img || "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"} alt="Img User" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 250 },
        {
            field: "acao",
            headerName: "Ação",
            width: 150,
            renderCell: params => {
                return (
                    <React.Fragment>
                        <Link to={`/usuario/${params.row._id}`}>
                            <button className="userListEdit">Editar</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row._id)} />
                    </React.Fragment>
                );
            }
        }
    ];

    return (
        <UsersBox>
            <Link to="/criar-usuario" className="link">Registrar Usuário</Link>
            <DataGrid rows={users} getRowId={row => row._id} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </UsersBox>
    );
}

export default Users;