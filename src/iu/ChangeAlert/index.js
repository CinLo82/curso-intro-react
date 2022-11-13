import React from "react";
import { useStorageListener } from './useStorageListener'
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

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

export { ChangeAlert};