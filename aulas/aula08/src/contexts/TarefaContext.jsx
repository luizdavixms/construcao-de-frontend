import { createContext } from "react"

const TarefaContext = createContext()

function TarefaProvider(props){
    const [tarefas, setTarefas] = useState(["Estudar React","Fazer a pratica"])

    const incluir = (tarefa) => {
        setTarefas([...tarefas, tarefa])
    }

    const remover = (tarefa) => {
        setTarefas(tarefa.filter((item) => item != tarefa))
    }

    const contexto = { tarefas, incluir, remover}

    return(
        <TarefaContext.Provider value={null}>
            {props.children} 
        </TarefaContext.Provider>
    )
}

export { TarefaContext, TarefaProvider }