import { useState } from 'react'

function Compteur() {
  const [nombre, setNombre] = useState(0)
  const [increment, setIncrement] = useState(1)
  
  const incrementer = () => setNombre(nombre + increment)
  const decrementer = () => setNombre(nombre - increment)
  const reset = () => setNombre(0)
  const doubler = () => setNombre(nombre * 2)
  
  return (
    //FIXME: ajouter color:'black'
    <div style={{
      padding: '2rem',
      border: '2px solid #ddd',
      borderRadius: '10px',
      textAlign: 'center',
      margin: '1rem',
      backgroundColor: 'white',
      maxWidth: '500px',
      color:'black' 
    }}>
      <h2>Compteur Avancé</h2>
      
      <div style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: nombre >= 0 ? '#27ae60' : '#e74c3c',
        margin: '1rem 0',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px'
      }}>
        {nombre}
      </div>
      
      {/* Contrôle de l'incrément */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem', color:'black' }}>
          Pas d'incrément :
          <input 
            type="number"
            value={increment}
            onChange={(e) => setIncrement(Number(e.target.value))}
            style={{
              marginLeft: '0.5rem',
              padding: '0.3rem',
              width: '60px',
              textAlign: 'center'
            }}
            min="1"
          />
        </label>
      </div>
      
      {/* Boutons principaux */}
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={incrementer} style={buttonStyle('#27ae60')}>
          ➕ +{increment}
        </button>
        <button onClick={decrementer} style={buttonStyle('#e74c3c')}>
          ➖ -{increment}
        </button>
        <button onClick={reset} style={buttonStyle('#95a5a6')}>
          🔄 Reset
        </button>
        <button onClick={doubler} style={buttonStyle('#3498db')}>
          ✖️ x2
        </button>
      </div>
      
      {/* Informations */}
      <div style={{ 
        fontSize: '0.9rem', 
        color: '#7f8c8d',
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        borderRadius: '5px'
      }}>
        <p>Valeur absolue : {Math.abs(nombre)}</p>
        <p>Type : {nombre === 0 ? 'Zéro' : nombre > 0 ? 'Positif' : 'Négatif'}</p>
        <p>Pair/Impair : {nombre % 2 === 0 ? 'Pair' : 'Impair'}</p>
      </div>
    </div>
  )
}

// Style réutilisable pour les boutons
const buttonStyle = (bgColor) => ({
  padding: '0.8rem 1rem',
  margin: '0.3rem',
  fontSize: '1rem',
  backgroundColor: bgColor,
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'transform 0.2s'
})

export default Compteur