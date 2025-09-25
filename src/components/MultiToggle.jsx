import { useState } from 'react'

function MultiToggle() {
  const [notifications, setNotifications] = useState(true)
  const [modeNuit, setModeNuit] = useState(false)
  const [sonActive, setSonActive] = useState(true)
  const [modeAvion, setModeAvion] = useState(false)
  
  const toggles = [
    {
      nom: 'Notifications',
      actif: notifications,
      setter: setNotifications,
      icone: '🔔',
      couleur: '#3498db'
    },
    {
      nom: 'Mode Nuit',
      actif: modeNuit,
      setter: setModeNuit,
      icone: '🌙',
      couleur: '#2c3e50'
    },
    {
      nom: 'Son',
      actif: sonActive,
      setter: setSonActive,
      icone: '🔊',
      couleur: '#e67e22'
    },
    {
      nom: 'Mode Avion',
      actif: modeAvion,
      setter: setModeAvion,
      icone: '✈️',
      couleur: '#9b59b6'
    }
  ]
  
  return (
    <div style={{
      padding: '2rem',
      border: '2px solid #ddd',
      borderRadius: '10px',
      margin: '1rem',
      backgroundColor: modeNuit ? '#2c3e50' : 'white',
      color: modeNuit ? 'white' : 'black',
      transition: 'all 0.3s ease'
    }}>
      <h2>⚙️ Panneau de Contrôle</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {toggles.map((toggle, index) => (
          <div key={index} style={{
            padding: '1rem',
            backgroundColor: modeNuit ? '#34495e' : '#f8f9fa',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {toggle.icone}
            </div>
            <h4 style={{ margin: '0 0 1rem 0' }}>{toggle.nom}</h4>
            
            {/* Mini toggle */}
            <div 
              onClick={() => toggle.setter(!toggle.actif)}
              style={{
                width: '60px',
                height: '30px',
                backgroundColor: toggle.actif ? toggle.couleur : '#bdc3c7',
                borderRadius: '15px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                margin: '0 auto'
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: 'white',
                borderRadius: '50%',
                position: 'absolute',
                top: '3px',
                left: toggle.actif ? '33px' : '3px',
                transition: 'all 0.3s ease'
              }} />
            </div>
            
            <p style={{ 
              margin: '0.5rem 0 0 0', 
              fontSize: '0.8rem',
              color: modeNuit ? '#bdc3c7' : '#7f8c8d'
            }}>
              {toggle.actif ? 'Activé' : 'Désactivé'}
            </p>
          </div>
        ))}
      </div>
      
      {/* Résumé */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: modeNuit ? '#34495e' : '#e9ecef',
        borderRadius: '10px'
      }}>
        <h3>📊 Résumé des paramètres :</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          {toggles.map((toggle, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {toggle.nom} : <strong>{toggle.actif ? 'ON' : 'OFF'}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MultiToggle