import "./App.css";
import Toolbar from "./containers/Navigation/Toolbar/Toolbar";
import SongCRUD from "./containers/SongCRUD/SongCRUD";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Statistics from "./containers/Statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Toolbar /> 
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={SongCRUD} />
          <Route path="/stat" Component={Statistics} />
          <Route path="/" Component={SongCRUD} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
