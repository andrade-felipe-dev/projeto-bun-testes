import Duracao from "../../shared/duracao/Duracao"
import Entidade from "../../shared/entidade/Entidade"
import NomeSimples from "../../shared/nomesimples/NomeSimples"

export interface CursoProps {
    id?: string
    nome?: string
    duracao?: number
}

export default class Curso extends Entidade {
    readonly nome: NomeSimples
    readonly duracao: Duracao

    constructor(props: CursoProps) {
        super(props.id!)
        this.nome = new NomeSimples(props.nome!)
        this.duracao = new Duracao(props.duracao!)
    }
}
