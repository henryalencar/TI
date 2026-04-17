const CarDetails = ({ id, brand, km, color, novo }) => {
  return (
    <div>
      <ul>
        {id && <li>ID: {id}</li>}
        <li>{brand}</li>
        <li>{km}</li>
        <li>{color}</li>
        <li>{novo ? "Novo" : "Usado"}</li>
      </ul>
      <hr/>
    </div>

  )
}

export default CarDetails