import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/main/main-page";

function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

export default App;
