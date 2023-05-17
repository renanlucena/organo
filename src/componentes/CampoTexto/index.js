import './CampoTexto.css';


const CampoTexto = (props) =>{
    const campo = props.label;
    const placeholder = props.placeholder;

    const aoDigitar = (e) => {
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