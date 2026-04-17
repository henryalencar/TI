import { useState } from 'react'

const CondicionalRender = () => {
  const [x] = useState(false)
  const [name, setName] = useState("Henry")

  return (
    <div>
      <h2>Condicional</h2>

      {x && <p>True</p>}
      {!x && <p>False</p>}

      {name === "Marcos" ? <p>Olá Marcos</p> : <p>Olá João</p>}

      <button onClick={() => setName("João")}>
        Mudar nome
      </button>
    </div>
  )
}

export default CondicionalRender