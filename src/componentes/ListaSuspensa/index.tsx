import './ListaSuspensa.css';

interface ListaSuspensaProps{
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={ e => props.aoAlterado(e.target.value)} value = {props.valor} required>
                <option value=""></option>
               {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;
