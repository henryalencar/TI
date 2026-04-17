import './MyForm.css'
import { useState, useRef } from 'react'

const MyForm = ({ user }) => {

  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState('')
  const [role, setRole] = useState('user')

  const nameInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('ENVIANDO O FORMULÁRIO')
    console.log({ name, email, bio, role })

    setName('')
    setEmail('')
    setBio('')
    setRole('user')

    nameInputRef.current.focus()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        {/* Nome */}
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            ref={nameInputRef}
            placeholder="Digite seu Nome"
            onChange={(e) => setName(e.target.value)}   
            value={name}
            autoFocus
          />
        </div>

        {/* Email */}
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        {/* Bio */}
        <label>
          <span>Bio: </span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* Select */}
        <label>
          <span>Função do Sistema:</span>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
