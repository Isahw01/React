const TemplateExpressions = () => {
    let nome = "Meu nome"
    let aluno = {
        nome: "Lil Peter",
        turma:"C",
        ano:"2"
    }
    return(
        <div>
            <h1>Olá {nome}</h1>
            <h2>O aluno {aluno.nome} está no {aluno.turma}° ano, na turma {aluno.turma}</h2>
        </div>
    )
}

export default TemplateExpressions