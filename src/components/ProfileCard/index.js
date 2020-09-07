import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const ProfileCard = ({name, desc, segment, formal, schedule}) => {

    return (
        <section className="profileCard">
            <img className="img" src={require("./avatar.png")} alt={name} />
            <Link
				className="name"
				to={{
					pathname: "/perfil/editar",
					state: { name: name, desc: desc, segment: segment, formal: formal, schedule: schedule },
				}}
			>{name}</Link>
            {formal &&
                <>
                    <p className="formal">Empreendedora</p>
                    <span className="mentor">Mentora</span>
                </>
            }
            {!formal &&
                <>
                    <p className="formal">Não Empreendedora</p>
                </>
            }
            <p className="description">{desc}</p>
            <div className="numbers">
                <div className="item">
                    <p className="num">45</p>
                    <p className="desc">Mentorias Dadas</p>
                </div>
                <div className="item">
                    <p className="num">10</p>
                    <p className="desc">Mentorias Recebidas</p>
                </div>
                <div className="item">
                    <p className="num">150</p>
                    <p className="desc">Pontos</p>
                </div>
            </div>
        </section>
    )

}

export default ProfileCard;