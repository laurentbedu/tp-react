import "./App.css";
import AppForExercices from "./AppForExercices";
import AppForExerciceRecap from "./AppForExercieRecap";

//FIXME: placeholder.com n'existe plus, utilisez placehold.co pour les images placeholder 

function App() {
  return (
    //TODO: commenter ou décommenter les composants pour voir la corrections des exercices 1 à 6 ou de l'exercice récapitulatif
    <div className="App">
      {/* <AppForExercices /> */}
      <AppForExerciceRecap />
    </div>
  );
}

export default App;
