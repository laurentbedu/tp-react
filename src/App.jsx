import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomeSection from './components/WelcomeSection'
import ActionSection from './components/ActionSection'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <WelcomeSection />
          <ActionSection />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App