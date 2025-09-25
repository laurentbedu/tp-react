import { useState } from 'react'

function InputEnDirect() {
  const [texte, setTexte] = useState('')
  
  const gererChangement = (event) => {
    setTexte(event.target.value)
  }
  
  const vider = () => setTexte('')
  const majuscules = () => setTexte(texte.toUpperCase())
  const minuscules = () => setTexte(texte.toLowerCase())
  const inverser = () => setTexte(texte.split('').reverse().join(''))
  
  // Calculs
  const nombreCaracteres = texte.length
  const nombreMots = texte.trim() ? texte.trim().split(/\s+/).length : 0
  const nombreLignes = texte.split('\n').length
  
  return (
    //FIXME: ajouter color:'black'
    <div style={{
      padding: '2rem',
      border: '2px solid #ddd',
      borderRadius: '10px',
      margin: '1rem',
      backgroundColor: 'white',
      color: 'black'
    }}>
      <h2>🔍 Analyseur de Texte en Direct</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <textarea 
          value={texte}
          onChange={gererChangement}
          placeholder="Écrivez votre texte ici..."
          rows={4}
          style={{
            width: '100%',
            padding: '0.8rem',
            fontSize: '1.1rem',
            border: '2px solid #ddd',
            borderRadius: '5px',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
            resize: 'vertical'
          }}
        />
      </div>
      
      {/* Boutons d'action */}
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={vider} style={actionButtonStyle('#e74c3c')}>
          🗑️ Vider
        </button>
        <button onClick={majuscules} style={actionButtonStyle('#3498db')}>
          🔤 MAJUSCULES
        </button>
        <button onClick={minuscules} style={actionButtonStyle('#2ecc71')}>
          🔡 minuscules
        </button>
        <button onClick={inverser} style={actionButtonStyle('#9b59b6')}>
          🔄 Inverser
        </button>
      </div>
      
      {/* Statistiques */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <div style={statStyle}>
          <strong>{nombreCaracteres}</strong>
          <div>Caractères</div>
        </div>
        <div style={statStyle}>
          <strong>{nombreMots}</strong>
          <div>Mots</div>
        </div>
        <div style={statStyle}>
          <strong>{nombreLignes}</strong>
          <div>Lignes</div>
        </div>
      </div>
      
      {/* Aperçu */}
      <div style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        border: '1px solid #e9ecef'
      }}>
        <h3>📝 Aperçu :</h3>
        <div style={{
          fontSize: '1.1rem',
          color: '#2c3e50',
          minHeight: '2rem',
          whiteSpace: 'pre-wrap',
          fontStyle: texte ? 'normal' : 'italic'
        }}>
          {texte || 'Votre texte apparaîtra ici...'}
        </div>
      </div>
    </div>
  )
}

const statStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#e9ecef',
  borderRadius: '5px',
  fontSize: '0.9rem'
}

const actionButtonStyle = (color) => ({
  padding: '0.5rem 1rem',
  margin: '0.3rem',
  fontSize: '0.9rem',
  backgroundColor: color,
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
})

export default InputEnDirect