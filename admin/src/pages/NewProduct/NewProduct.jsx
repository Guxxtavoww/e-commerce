import React, { useState } from "react";
import { Publish } from "@material-ui/icons";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import app from "../../firebase/app";
import { userRequest } from "../../api";
import { Error, NewProductBox } from "./styles";

const NewProduct = () => {
    const [ error, setError ] = useState(false);
    const [ file, setFile ] = useState(null);
    const [ inputs, setInputs ] = useState({
        title: "",
        desc: "",
        price: 0,
        stock: false,
        cat: "",
        size: "",
    });

    const handleSubmit = async e => {
        e.preventDefault();
        
        if (!inputs || !file) {
            setError(true);
        } else {
            const fileName = new Date().getTime() + file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed", snapshot => {
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                    }
                },
                error => {
                    
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
                        console.log(downloadURL)
                        try {
                            await userRequest.post("/produto", {
                                title: inputs.title,
                                desc: inputs.desc,
                                price: Number(inputs.price),
                                inStock: Boolean(inputs.stock),
                                categories: inputs.cat.split(","),
                                size: inputs.size.split(","),
                                img: downloadURL
                            });
                        } catch (error) {
                            console.log(error);
            
                            setError(true);
                        }
                    });
                }
            );
        }
    }

    const handleChange = e => setInputs(prev => {
        return { ...prev, [e.target.name]: e.target.value }
    });

    return (
        <NewProductBox>
            <h1>Registrar Produto</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="productItem">
                    <label>Imagem</label>
                    <div className="inputBx">
                        <label htmlFor="file" className="file">
                            <Publish /> Envie sua Foto
                        </label>
                        <input type="file" name="file" id="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                    </div>
                </div>
                <div className="productItem">
                    <label>Nome</label>
                    <input type="text" placeholder="Nome do Produto" name="title" onChange={handleChange} />
                </div>
                <div className="productItem">
                    <label>Descrição</label>
                    <textarea name="desc" placeholder="Descrição do Produto" onChange={handleChange} />
                </div>
                <div className="productItem">
                    <label>Preço</label>
                    <input type="number" placeholder="Preço do Produto (R$)" name="price" onChange={handleChange} />
                </div>
                <div className="productItem">
                    <label>Categorias</label>
                    <input type="text" placeholder="Categorias do Produto (Separe-as com ',')" name="cat" onChange={handleChange} />
                </div>
                <div className="productItem">
                    <label>Tamanhos</label>
                    <input type="text" placeholder="Tamanhos do Produto (Separe-as com ',')" name="size" onChange={handleChange} />
                </div>
                <div className="productItem">
                    <label>Stoque</label>
                    <select name="stock" onChange={handleChange}>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>
                </div>
                <button type="submit">Criar</button>
                {error && <Error>Não Deixe campos inalterados</Error>}
            </form>
        </NewProductBox>
    );
}

export default NewProduct;