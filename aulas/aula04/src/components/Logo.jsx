import "./Logo.css"

function Logo (props) {
    const texto = "Logo da Aplicação"
    return(
        <img className = "Logo" src={props.imagem} alt={texto}/>
    )
}

export default Logo