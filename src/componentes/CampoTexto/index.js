import './CampoTexto.css';

const CampoTexto = (props) =>{
    const campo = props.label;
    const placeholder = props.placeholder;
    return(
        <div className="campo-texto">
            <label>{campo}</label>
            <input required placeholder={placeholder}/>
        </div>
    )

}

export default CampoTexto;