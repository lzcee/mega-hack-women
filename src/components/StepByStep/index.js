import React, { useState } from "react";
import Slider from "tiny-slider-react";
import { Link } from "react-router-dom";

import "./style.css";

const StepByStep = () => {
	const [slider, setSlider] = useState(null);
	const [slideIndex, setSlideIndex] = useState(1);

	const settings = {
		loop: false,
		nav: true,
		mouseDrag: true,
		controls: false,
		navPosition: "bottom",
	};

	const handleSlider = () => {
		slider.slider.goTo("next");
		setSlideIndex(slider.slider.getInfo().displayIndex);
	};

	return (
		<section className="steps fullScreen container">
			<div className="stepsWrapper">
				<Slider
					settings={settings}
					ref={(info) => setSlider(info)}
					onIndexChanged={(info) => setSlideIndex(info.displayIndex)}
				>
					<div className="step">
						<div className="img">
							<img className="img" src={require("./step-one.png")} alt="Conecte-se com outras empreendedoras" />
						</div>
						<h2 className="title">
							Conecte-se com outras empreendedoras
						</h2>
						<p className="description">
							Busque ajuda para começar seu negócio com mentorias
							especiais
						</p>
					</div>
					<div className="step">
						<div className="img">
							<img className="img" src={require("./step-two.png")} alt="Seja uma mentora!" />
						</div>
						<h2 className="title">Seja uma mentora!</h2>
						<p className="description">
							Se você já é uma empreendedora formal, compartilhe
							seu conhecimento! Acumule pontos pelas mentorias e
							troque por outros benefícios.
						</p>
					</div>
					<div className="step">
						<div className="img">
							<img className="img" src={require("./step-three.png")} alt="Deu match!" />
						</div>
						<h2 className="title">Deu match!</h2>
						<p className="description">
							O nosso papel é movimentar a rede de mulheres e
							fortalecer o empreendedorismo feminino.
						</p>
					</div>
				</Slider>
			</div>
			<div className="btns">
				<Link className="btn skip" to={{ pathname: "/cadastro" }}>
					Pular
				</Link>
				{slideIndex < 3 && (
					<button className="btn next" onClick={() => handleSlider()}>
						Próximo
					</button>
				)}
				{slideIndex === 3 && (
					<Link className="btn next" to={{ pathname: "/cadastro" }}>
						Começar
					</Link>
				)}
			</div>
		</section>
	);
};

export default StepByStep;
