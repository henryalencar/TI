import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
  const name = "Henry";
  const data = {
    age: 18,
    job: "Programador"
  };

  console.log("Olaaaa Mundoo"); // forma

  return (
    <>
      <h1>TemplateExpressions</h1>
      <h2>Olá {name}, tudo bem?</h2>
      <p>Idade: {data.age}</p>
      <p>Profissão: {data.job}</p>
      <p>{8 + 8}</p>
      <p>{console.log('ola Mundooooooo')}</p>
      <MyComponent />
    </>
  );
};

export default TemplateExpressions;