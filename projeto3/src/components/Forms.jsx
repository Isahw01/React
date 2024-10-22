import { useState } from "react"
import "./Forms.module.css"

const Forms = (props) => {
    //variaveis para guardar o que a pessoa informou no formulario
    const [name, setName] = useState(props ? props.name: "")
    const [email, setEmail] = useState(props ? props.email: "")
    const [desc, setDesc] = useState()
    const [tipo, setTipo] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(desc)
        console.log(tipo)
        setName("")
        setEmail("")
        setDesc("")
        setTipo("")
    }

    const handleName = (e) => {
        setName(e.target.value)
        console.log(name)

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/*/ input com htmlFor */}
            <label htmlFor="nome"> Nome: </label>
            <input type="text" id="nome" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            {/*/ label envolvendo input */}
            <label>
                <span>Email:</span>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) =>{ setEmail(e.target.value)}} value={email}></input>

            </label>

            {/*/ campo de textarea */}

            <label>
                <span>Descrição:</span>
                <textarea name="descricao" placeholder="Se descreva para si mesmo" onChange={(e) => {setDesc(e.target.value)}} value={desc}></textarea>
            </label>

            <label>
                <span>Tipo de usuário:</span>
                <select name="tipoU" onChange={(e) => {setTipo(e.target.value)}}>
                    <option value="user"> Usuário </option>
                    <option value="adm">Administrador</option>
                    <option value="client">Cliente</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Forms