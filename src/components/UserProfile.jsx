function UserProfile({ name, job, email, avatar = "https://placehold.co/100" }) {
  return (
    <div style={{
      padding: '2rem',
      border: '2px solid #ddd',
      borderRadius: '10px',
      textAlign: 'center',
      margin: '1rem',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      maxWidth: '300px'
    }}>
      {/* Photo de profil */}
      <img 
        src={avatar} 
        alt={`Photo de ${name}`}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #667eea',
          marginBottom: '1rem'
        }}
      />
      
      {/* Nom complet */}
      <h2 style={{
        color: '#2c3e50',
        margin: '0 0 0.5rem 0',
        fontSize: '1.5rem'
      }}>
        {name}
      </h2>
      
      {/* Poste/métier */}
      <h3 style={{
        color: '#667eea',
        margin: '0 0 1rem 0',
        fontSize: '1.1rem',
        fontWeight: '500'
      }}>
        {job}
      </h3>
      
      {/* Email (conditionnel) */}
      {email && (
        <p style={{
          color: '#7f8c8d',
          margin: '0',
          fontSize: '0.9rem',
          backgroundColor: '#f8f9fa',
          padding: '0.5rem',
          borderRadius: '5px'
        }}>
          📧 {email}
        </p>
      )}
    </div>
  )
}

export default UserProfile