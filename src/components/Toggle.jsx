import { useState } from 'react'

function Toggle() {
  const [estActif, setEstActif] = useState(false)
  
  const basculer = () => {
    setEstActif(!estActif)
  }
  
  return (
        //FIXME: ajouter color:'black'
    <div style={{
      padding: '2rem',
      border: '2px solid #ddd',
      borderRadius: '10px',
      margin: '1rem',
      backgroundColor: 'white',
      textAlign: 'center',
      color: 'black'
    }}>
      <h2>🔘 Interrupteur Stylisé</h2>
      
      <div style={{
        margin: '2rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        <span style={{ 
          fontSize: '1.2rem',
          color: !estActif ? '#27ae60' : '#bdc3c7',
          fontWeight: !estActif ? 'bold' : 'normal'
        }}>
          OFF
        </span>
        
        {/* Switch visuel */}
        <div 
          onClick={basculer}
          style={{
            width: '80px',
            height: '40px',
            backgroundColor: estActif ? '#27ae60' : '#bdc3c7',
            borderRadius: '20px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid #fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'absolute',
            top: '2px',
            left: estActif ? '44px' : '2px',
            transition: 'all 0.3s ease',
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
          }} />
        </div>
        
        <span style={{ 
          fontSize: '1.2rem',
          color: estActif ? '#27ae60' : '#bdc3c7',
          fontWeight: estActif ? 'bold' : 'normal'
        }}>
          ON
        </span>
      </div>
      
      <div style={{
        padding: '1rem',
        backgroundColor: estActif ? '#d5f4e6' : '#fadbd8',
        borderRadius: '10px',
        border: `2px solid ${estActif ? '#27ae60' : '#e74c3c'}`
      }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>
          {estActif ? '✅ Système Activé' : '❌ Système Désactivé'}
        </h3>
        <p style={{ margin: 0, color: '#555' }}>
          {estActif 
            ? 'Toutes les fonctionnalités sont disponibles' 
            : 'Cliquez pour activer le système'
          }
        </p>
      </div>
    </div>
  )
}

export default Toggle