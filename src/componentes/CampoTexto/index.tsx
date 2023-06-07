import './CampoTexto.css';
import React from 'react';

interface CampoTextoProps{
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string

}

const CampoTexto = (props: CampoTextoProps) =>{
    const campo = props.label;
    const placeholder = props.placeholder;

    const aoDigitar = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(e.target.value);
    }
    return(
        <div className="campo-texto">
            <label>{campo}</label>
            <input value={props.valor} onChange={aoDigitar} required placeholder={placeholder}/>
        </div>
    )

}

export default CampoTexto;