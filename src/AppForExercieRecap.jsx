import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function AppForExerciceRecap() {
    return (
    <div className="App">
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <h1>Exercice Récapitulatif - Profils Utilisateurs</h1>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            padding: '2rem 0'
          }}>
            {/* Profil avec toutes les props */}
            <UserProfile 
              name="Jean Dupont"
              job="Développeur React"
              email="jean@example.com"
              avatar="https://placehold.co/100"
            />
            
            {/* Profil sans email */}
            <UserProfile 
              name="Marie Martin"
              job="Designer UI/UX"
              avatar="https://placehold.co/100"
            />
            
            {/* Profil avec avatar par défaut */}
            <UserProfile 
              name="Thomas Petit"
              job="Chef de projet"
              email="thomas@example.com"
            />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default AppForExerciceRecap;