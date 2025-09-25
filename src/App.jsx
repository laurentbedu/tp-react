import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Compteur from './components/Compteur'
import InputEnDirect from './components/InputEnDirect'
import Toogle from './components/Toggle'
import MultiToggle from './components/MultiToggle'
import Calculatrice from './components/Calculatrice'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <h1>Exercices React - Jour 2</h1>
          <Compteur />
          <InputEnDirect />
          <Toogle/>
          <MultiToggle />
          <Calculatrice />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App