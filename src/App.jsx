import "./App.css";
import PresentationCard from "./components/PresentationCard/PresentationCard";
import ThemeContext from "./contexts/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ProjectsPage from "./pages/ProjectsSection";

function App() {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" element={<PresentationCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
