import React from 'react'
import { useHistory } from "react-router-dom";

import './style.css';

import { ReactComponent as Arrow } from "./left-arrow.svg";

const BtnGoBack = () => {

    var history = useHistory();

    const handleBtnHistory = () => {
        history.goBack();
    }

    return (
        <button className="btnGoBack" onClick={handleBtnHistory} aria-label="Voltar">
            <Arrow />
        </button>
    )

}

export default BtnGoBack;