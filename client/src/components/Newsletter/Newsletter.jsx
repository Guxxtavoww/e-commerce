import React from "react";
import { Send } from "@material-ui/icons";

import { NewsletterBox, InnerBox } from "./styles";

const Newsletter = () => {
    return (
        <NewsletterBox>
            <InnerBox>
                <h2>Newsletter</h2>
                <p>Receba avisos quando seu produto favorito chegar!</p>
                <form className="inputBx" onSubmit={e => e.preventDefault()}>
                    <input type="email" name="email" placeholder="Insira seu E-mail para contato" />
                    <button className="send" type="submit"><Send color="inherit" /></button>
                </form>
            </InnerBox>
        </NewsletterBox>
    );
}

export default Newsletter;