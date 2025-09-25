import React from "react";
import FeatureCard from "./FeatureCard";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-hero">
        <h1 className="hero-title">
          <span className="hero-emoji">🎯</span>
          Organisez vos tâches efficacement
        </h1>
        <p className="hero-subtitle">
          TodoApp vous aide à rester productif et organisé. 
          Gérez vos tâches, suivez vos progrès et atteignez vos objectifs.
        </p>
      </div>

      <div className="features-grid">
        <FeatureCard
          icon="✅"
          title="Gestion Simple"
          description="Ajoutez, modifiez et supprimez vos tâches en quelques clics"
        />
        <FeatureCard
          icon="📊"
          title="Suivi des Progrès"
          description="Visualisez vos statistiques et suivez votre productivité"
        />
        <FeatureCard
          icon="🎨"
          title="Interface Moderne"
          description="Design épuré et responsive pour une expérience optimale"
        />
        <FeatureCard
          icon="💾"
          title="Sauvegarde Locale"
          description="Vos données sont conservées automatiquement dans votre navigateur"
        />
      </div>
    </section>
  );
}

export default WelcomeSection;
