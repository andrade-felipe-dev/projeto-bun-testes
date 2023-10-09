import RepositorioCursoMemoria from "./external/db/RepositorioCursoMemoria"
import RepositorioCursoPrisma from "./external/db/RepositorioCursoPrisma"
import Curso from "./rules/curso/model/Curso"
import ConsultarCursos from "./rules/curso/service/ConsultarCursos"
import SalvarCurso from "./rules/curso/service/SalvarCurso"

const curso = new Curso({
    nome: "Testes Automatizados",
    duracao: 3600,
})

const repo = new RepositorioCursoPrisma()

await new SalvarCurso(repo).executar(curso)
console.log("Curso salvo")

const cursos = await new ConsultarCursos(repo).executar()
cursos.forEach((curso) => console.log(curso.nome.completo))
