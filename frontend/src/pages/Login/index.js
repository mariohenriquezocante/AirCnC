import React, {useState} from 'react'
import api from '../../services/api'

export default function Login({history}){
    const [email, setEmail] = useState('') 

    async function handleSubmit(event){
        event.preventDefault()//para quando clicar no botao nao redirecionar a pagina.
  
      const response = await api.post('/sessions', {email})
      const {_id} = response.data
      
      localStorage.setItem('user', _id)//salvando o id no localStorage do navegador, para ficar acessivel de todo projeto.
      history.push('/dashboard')//para mandar o usuario de uma tela para a outra.
    } 

    return (
        <>
        <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
         type="email"
         id = "email" 
         placeholder = "Seu melhor e-mail"
         value = {email}
         onChange = {event => setEmail(event.target.value)} // pegar o valor do email digitado pelo usuario.
         />

         <button className = "btn" type="submit">Entrar</button>
      </form>
      </>
    )
}