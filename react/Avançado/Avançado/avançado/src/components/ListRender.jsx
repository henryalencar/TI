import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Matheus", "João", "Maria", "Ana"])

  const [users, setUsers] = useState([
    {id: 1, name: "Matheus", age: 30},
    {id: 2, name: "João", age: 25},
    {id: 3, name: "Maria", age: 28},
    {id: 4, name: "Ana", age: 22},
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      <h2>ListRender</h2>

      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul style={{listStyleType: "none"}}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete</button>
    </div>
  )
}

export default ListRender