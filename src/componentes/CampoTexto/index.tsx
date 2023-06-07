import './CampoTexto.css';
import React from 'react';

interface CampoTextoProps{
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string

}

const CampoTexto = ({aoAlterado, label, placeholder, valor}: CampoTextoProps) =>{
    const campo = label;
    const placeholderAlterada = `${placeholder}...`;

    const aoDigitar = (e: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value);
    }
    return(
        <div className="campo-texto">
            <label>{campo}</label>
            <input value={valor} onChange={aoDigitar} required placeholder={placeholderAlterada}/>
        </div>
    )

}

export default CampoTexto;