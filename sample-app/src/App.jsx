
import './App.css'
import logo from './assets/Logo.png'

function App() {
  return (
    <>
      <section style={{ backgroundColor: 'white' }}>
        <h1 style={{ color: 'black' }}>Sample App for hosting in AWS</h1>
        <img
          style={{ display: 'block', width: '400px', height: '400px', margin: '20px auto' }}
          alt="Sample Image"
          src={logo}
        />
      </section>
    </>
  )
}

export default App
