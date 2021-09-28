export function tipoDeConta(e) {
    if(e == "turmas"){
        return "turma"
    }
    else if (e == "professores") {
        return "professor"
    }
    else(e == "alunos")
    {
        return "aluno"
    }
}