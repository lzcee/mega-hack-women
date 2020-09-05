import React, { useState } from 'react';
import Slider from "tiny-slider-react";
import { Link } from "react-router-dom";

import BtnGoBack from '../BtnGoBack';

import './style.css';

const RegisterForm = () => {
    const [slider, setSlider] = useState(null);
    const [slideIndex, setSlideIndex] = useState(1);

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
                                <input type="text" name="" id="name" required/>
                            </div>
                            <div className="inputField">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="" id="email" required/>
                            </div>
                            <div className="inputField">
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="" id="password"/>
                            </div>
                            <div className="inputField">
                                <label htmlFor="confirmPassword">Confirmar Senha</label>
                                <input type="password" name="" id="confirmPassword"/>
                            </div>
                        </div>
                        <div>
                            <div className="inputField">
                                <label htmlFor="name">Confirmar Senha</label>
                                <div className="selectWrapper">
                                    <select name="" id="">
                                        <option value="">Empreendedora Formal</option>
                                        <option value="">Empreendedora Informal</option>
                                        <option value="">Não Empreendedora</option>
                                    </select>
                                </div>
                            </div>
                            <div className="inputField">
                                <label htmlFor="name">Confirmar Senha</label>
                                <div className="selectWrapper">
                                    <select name="" id="">
                                        <option value="">Tecnologia</option>
                                        <option value="">Vestuário</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </form>
                {slideIndex < 2 && (
                    <button className="btn" onClick={() => handleSlider()}>
                        Continuar
                    </button>
                )}
                {slideIndex === 2 && (
                    <Link className="btn" to={{ pathname: "/cadastro" }}>
                        Criar
                    </Link>
                )}
            </div>
        </section>
    )
}

export default RegisterForm;