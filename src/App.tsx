import { Route, Routes } from "react-router-dom";
import {CV} from "./pages"
import "./App.css"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
