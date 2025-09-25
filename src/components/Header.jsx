function Header({ darkMode, setDarkMode }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">📋</span>
          <h1 className="logo-text">TodoApp</h1>
        </div>
        
        <nav className="navigation">
          <a href="#" className="nav-link active">🏠 Accueil</a>
          <a href="#" className="nav-link">✅ Mes Tâches</a>
          <a href="#" className="nav-link">📊 Statistiques</a>
          <a href="#" className="nav-link">ℹ️ À propos</a>
          <button 
            className="nav-link" 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header;
