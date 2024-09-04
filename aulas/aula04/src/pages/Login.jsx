import BotaoSubmit from"../components/BotaoSubmit"
import InputSenha from "../components/InputSenha"
import InputUsuario from "../components/InputUsuario"
import Link from "../components/Link"
import Logo from "../components/Logo"
import Rodape from "../components/Rodape"
import Titulo from "../components/Titulo"
import "./Login.css"

function Login (){
    const urlLogo = "https://www.svgrepo.com/show/489120/school.svg"
    const textoLogo = "Logo da Aplicação"

    return(
        <>
            <main className="login-form">
                <Logo imagem={urlLogo} texto={textoLogo}/>
                <Titulo texto={"Aluno online"} />
                <InputUsuario />
                <InputSenha />
                <BotaoSubmit texto="Entrar" />
                <Link texto="Esqueceu a senha" />
                <Link texto="Criar senha" />
            </main>
            <Rodape />
        </>
    )
}

export default Login