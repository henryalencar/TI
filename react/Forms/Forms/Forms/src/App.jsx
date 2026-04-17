import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
      <div>
        {/*   */}
        <h2>Forms</h2>
        <MyForm user={{ name: 'Henry Alencar', email: 'henry@senac.com.br' }} />
      </div>
    </>
  )
}

export default App

