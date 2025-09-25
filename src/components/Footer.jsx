function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>📋 TodoApp</h4>
          <p>Votre gestionnaire de tâches personnel</p>
        </div>
        
        <div className="footer-section">
          <h4>🚀 Technologie</h4>
          <p>Réalisé avec React.js et Vite</p>
        </div>
        
        <div className="footer-section">
          <h4>📞 Support</h4>
          <p>Formation React - Jour 1</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} TodoApp. Projet de formation React.js</p>
      </div>
    </footer>
  )
}

export default Footer