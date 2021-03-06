import React, { useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import { login } from '../../services/auth';

import { ReactComponent as Logo } from "./logo.svg";

import "./style.css";

const LoginForm = () => {

    const history = useHistory();
    const location = useLocation();
    
    const [email, setEmail] = useState(location.state ? location.state.email : "");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        axios.get(`http://localhost:5000/api/token/${email}`, {
            auth: { 
               username: email, 
               password: password 
            }
        })
        .then(res => {
            setMessage("");
            login(res.data.token, res.data.id);
            history.push('/home');
        })
        .catch(err => {
            setMessage("Ops! Email ou senha incorretos");
        })

    };

    return (
        <section className="loginForm fullScreen">
            <div className="logo">
                <Logo/>
            </div>
            <div className="formWrapper">
                <h2 className="title">Entrar</h2>
                <form className="login" method="post" onSubmit={handleSubmit}>
                    <input type="text" name="email" id="email" value={email || ''} placeholder="Email" aria-label="Email" required onChange={ e => setEmail(e.target.value) }/>
                    <input type="password" name="password" id="password" placeholder="Senha" aria-label="Senha" required onChange={ e => setPassword(e.target.value) }/>
                    <a className="forgotPassword" href="/">Esqueceu a senha?</a>
                    <input className="submit" type="submit" value="Entrar"/>
                    <p className="message">{message}</p>
                </form>
            </div>
            <div className="registerNow">
                <p className="title">Não tem uma conta?</p>
                <Link className="btn" to={{ pathname: "/cadastro" }}>Cadastrar-se</Link>
            </div>
        </section>
    )
}

export default LoginForm;