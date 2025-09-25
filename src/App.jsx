import { useState, useEffect } from "react";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomeSection from './components/WelcomeSection'
import ActionSection from './components/ActionSection'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="App">
      <div className="app-container">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
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