import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PresentationCard from "./components/PresentationCard/PresentationCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <PresentationCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
