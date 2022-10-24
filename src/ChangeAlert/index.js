import React from "react";
import { withStorageListener } from './withStorageListener'
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="Modal-Container">
                <div className="ChangeAlert-container">
                    <p className="ChangeAlert-text">🐾Hubo Cambios🐾</p>
                    <button className="ChangeAlert-button"
                        onClick={toggleShow}
                    >
                        Volver a cargar la información
                    </button>
                </div>
            </div>
       );
   } else {
            return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };