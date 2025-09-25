import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";


function AppForExercices() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "400px", padding: "2rem" }}>
        <h2>Nos services</h2>
        {/* FIXME : ajouter la props image dans les Cards */}
        <Card
          image="https://placehold.co/300x200"
          title="Développement Web"
          description="Création de sites web modernes et responsives"
          category="Développement"
        />

        <Card
          image="https://placehold.co/300x200"
          title="Design UI/UX"
          description="Conception d'interfaces utilisateur intuitives"
          category="Design"
        />

        <Card
          image="https://placehold.co/300x200"
          title="Formation React"
          description="Apprenez React.js avec nos experts"
          category="Formation"
        />
      </main>
      <Footer />
    </div>
  );
}

export default AppForExercices;