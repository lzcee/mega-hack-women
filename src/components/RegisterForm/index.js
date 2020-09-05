import React, { useState } from 'react';
import Slider from "tiny-slider-react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import BtnGoBack from '../BtnGoBack';

import './style.css';

const RegisterForm = () => {

    const history = useHistory();

    const [slider, setSlider] = useState(null);
    const [slideIndex, setSlideIndex] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [userType, setUserType] = useState(true);
    const [segment, setSegment] = useState("Tecnologia");
    const [message, setMessage] = useState("");

    const settings = {
		loop: false,
        nav: true,
        navPosition: "top",
		mouseDrag: false,
		controls: false
    };
    
    const handleSlider = () => {
		slider.slider.goTo("next");
		setSlideIndex(slider.slider.getInfo().displayIndex);
    };

    const validateEmail = (email) => {
        var regex = /^[\w-s.]+@([\w-]+.)+[\w-]{2,4}$/;
        return regex.test( String(email).toLowerCase() );
    };

    const validatePassword = () => {
        if(password !== "" && password === passwordConfirm) {
            return true;
        } else {
            return false;
        }
    };

    const goToNextTab = () => {
        if( name !== "" && validateEmail(email) && validatePassword() ) {
            setMessage("");
            handleSlider();
        }
        else {
            setMessage("Ops! Verifique os campos antes de continuar!")
        }
    };

    const handleSubmit = () => {
        if( name !== "" && validateEmail(email) && validatePassword() ) {
            var data = {
                name: name,
                password: password,
                email: email,
                formal: userType,
                tags: [segment],
                cnpj: null,
                description: null,
            }
            setMessage("");
            sendData(data);
        }
        else {
            setMessage("Ops! Verifique os campos antes de enviar!")
        }
    };

    const sendData = (data) => {

        axios.post("http://localhost:5000/api/users", data)
        .then(res => {
            history.push("/login", res.name);
        })
        .catch(err => {
            history.push("/cadastro");
        })
    }
    
    return (
        <section className="registerForm fullScreen">
            <BtnGoBack/>
            <div className="registerWrapper">
                <h2 className="title">Criar uma conta</h2>
                <p className="description">Crie uma conta para se conectar com outras mulheres e receber conteúdos incríveis!</p>
                <form className="form" action="" method="post">
                    <Slider
                        settings={settings}
                        ref={(info) => setSlider(info)}
                        onIndexChanged={(info) => setSlideIndex(info.displayIndex)}
                    >
                        <div>
                            <div className="inputField">
                                <label htmlFor="name">Nome Completo</label>
                                <input type="text" name="name" id="name" onChange={ e => setName(e.target.value) } required/>
                            </div>
                            <div className="inputField">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" onChange={ e => setEmail(e.target.value) } required/>
                            </div>
                            <div className="inputField">
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="password" id="password" onChange={ e => setPassword(e.target.value) }/>
                            </div>
                            <div className="inputField">
                                <label htmlFor="confirmPassword">Confirmar Senha</label>
                                <input type="password" name="confirmPassword" id="confirmPassword" onChange={ e => setPasswordConfirm(e.target.value) }/>
                            </div>
                        </div>
                        <div>
                            <div className="inputField">
                                <label htmlFor="userType">Situação Empregatícia</label>
                                <div className="selectWrapper">
                                    <select name="formal" id="userType" onChange={ e => setUserType(e.target.value) }>
                                        <option value="true">Empreendedora Formal</option>
                                        <option value="true">Empreendedora Informal</option>
                                        <option value="false">Não Empreendedora</option>
                                    </select>
                                </div>
                            </div>
                            <div className="inputField">
                                <label htmlFor="segment">Ramo</label>
                                <div className="selectWrapper">
                                    <select name="tags" id="segment" onChange={ e => setSegment(e.target.value) }>
                                        <option value="Tecnologia">Tecnologia</option>
                                        <option value="Vestuário">Vestuário</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </form>
                {slideIndex < 2 && (
                    <div className="btnWrapper">
                        <p className="message">{ message }</p>
                        <button className="btn" onClick={() => goToNextTab()}>
                            Continuar
                        </button>
                    </div>
                )}
                {slideIndex === 2 && (
                    <div className="btnWrapper">
                        <p className="message">{ message }</p>
                        <button className="btn" onClick={() => handleSubmit()}>
                            Criar
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default RegisterForm;