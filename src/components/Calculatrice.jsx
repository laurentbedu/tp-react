import { useState } from 'react'

function Calculatrice() {
  const [nombre1, setNombre1] = useState('')
  const [nombre2, setNombre2] = useState('')
  const [resultat, setResultat] = useState(null)
  const [historique, setHistorique] = useState([])
  const [erreur, setErreur] = useState('')
  
  const calculer = (operation) => {
    // Réinitialiser l'erreur
    setErreur('')
    
    // Convertir les valeurs en nombres
    const num1 = Number(nombre1)
    const num2 = Number(nombre2)
    
    // Vérifier que les valeurs sont valides
    if (isNaN(num1) || isNaN(num2)) {
      setErreur('Veuillez saisir des nombres valides')
      return
    }
    
    if (nombre1 === '' || nombre2 === '') {
      setErreur('Veuillez remplir les deux champs')
      return
    }
    
    let resultatCalcul
    let symbole
    
    // Effectuer le calcul selon l'opération
    switch (operation) {
      case 'addition':
        resultatCalcul = num1 + num2
        symbole = '+'
        break
      case 'soustraction':
        resultatCalcul = num1 - num2
        symbole = '-'
        break
      case 'multiplication':
        resultatCalcul = num1 * num2
        symbole = '×'
        break
      case 'division':
        if (num2 === 0) {
          setErreur('Division par zéro impossible')
          return
        }
        resultatCalcul = num1 / num2
        symbole = '÷'
        break
      default:
        setErreur('Opération non reconnue')
        return
    }
    
    // Arrondir le résultat à 2 décimales si nécessaire
    resultatCalcul = Math.round(resultatCalcul * 100) / 100
    
    // Mettre à jour le résultat
    setResultat(resultatCalcul)
    
    // Ajouter à l'historique
    const nouveauCalcul = {
      id: Date.now(),
      calcul: `${num1} ${symbole} ${num2} = ${resultatCalcul}`,
      date: new Date().toLocaleTimeString()
    }
    
    setHistorique([nouveauCalcul, ...historique])
  }
  
  const viderHistorique = () => {
    setHistorique([])
  }
  
  const reset = () => {
    setNombre1('')
    setNombre2('')
    setResultat(null)
    setErreur('')
  }
  
  return (
    <div style={{
      padding: '2rem',
      border: '2px solid #ddd',
      borderRadius: '10px',
      margin: '1rem',
      backgroundColor: 'white',
      maxWidth: '500px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '2rem' }}>
        🧮 Calculatrice Simple
      </h2>
      
      {/* Inputs pour les nombres */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        gap: '0.5rem',
        alignItems: 'center',
        marginBottom: '2rem',
        
      }}>
        <input
          type="number"
          value={nombre1}
          onChange={(e) => setNombre1(e.target.value)}
          placeholder="Premier nombre"
          style={{
            padding: '0.5rem',
            fontSize: '1.1rem',
            border: '2px solid #ddd',
            borderRadius: '5px',
            textAlign: 'center'
          }}
        />
        
        <span style={{ fontSize: '1.5rem', color: '#666' }}>?</span>
        <input
          type="number"
          value={nombre2}
          onChange={(e) => setNombre2(e.target.value)}
          placeholder="Deuxième nombre"
          style={{
            padding: '0.5rem',
            fontSize: '1.1rem',
            border: '2px solid #ddd',
            borderRadius: '5px',
            textAlign: 'center'
          }}
        />
      </div>
      
      {/* Boutons d'opération */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <button
          onClick={() => calculer('addition')}
          style={buttonStyle('#27ae60')}
        >
          ➕ Addition
        </button>
        <button
          onClick={() => calculer('soustraction')}
          style={buttonStyle('#e74c3c')}
        >
          ➖ Soustraction
        </button>
        <button
          onClick={() => calculer('multiplication')}
          style={buttonStyle('#3498db')}
        >
          ✖️ Multiplication
        </button>
        <button
          onClick={() => calculer('division')}
          style={buttonStyle('#f39c12')}
        >
          ➗ Division
        </button>
      </div>
      
      {/* Bouton reset */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button
          onClick={reset}
          style={buttonStyle('#95a5a6')}
        >
          🔄 Effacer tout
        </button>
      </div>
      
      {/* Affichage du résultat */}
      {resultat !== null && (
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#d5f4e6',
          border: '2px solid #27ae60',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h3 style={{ margin: '0', color: '#27ae60' }}>
            Résultat : {resultat}
          </h3>
        </div>
      )}
      
      {/* Affichage des erreurs */}
      {erreur && (
        <div style={{
          padding: '1rem',
          backgroundColor: '#f8d7da',
          border: '2px solid #e74c3c',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#721c24'
        }}>
          ❌ {erreur}
        </div>
      )}
      
      {/* Historique */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <h3 style={{ margin: '0', color: '#2c3e50' }}>
            📜 Historique ({historique.length})
          </h3>
          {historique.length > 0 && (
            <button
              onClick={viderHistorique}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              🗑️ Vider
            </button>
          )}
        </div>
        
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {historique.length === 0 ? (
            <p style={{ color: '#666', textAlign: 'center', margin: '2rem 0' }}>
              Aucun calcul effectué
            </p>
          ) : (
            historique.map(calcul => (
              <div
                key={calcul.id}
                style={{
                  padding: '0.8rem',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  marginBottom: '0.5rem',
                  border: '1px solid #dee2e6',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  
                }}
              >
                <span style={{ fontFamily: 'monospace', fontSize: '1rem', color: 'black' }}>
                  {calcul.calcul}
                </span>
                <small style={{ color: '#666' }}>{calcul.date}</small>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

// Style réutilisable pour les boutons
const buttonStyle = (backgroundColor) => ({
  padding: '1rem',
  fontSize: '1rem',
  backgroundColor,
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'transform 0.2s ease',
  ':hover': {
    transform: 'translateY(-2px)'
  }
})

export default Calculatrice