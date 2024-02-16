import "./App.css";
import Toolbar from "./containers/Navigation/Toolbar/Toolbar";
import SongCRUD from "./containers/SongCRUD/SongCRUD";

function App() {
  return (
    <div className="App">
      <Toolbar /> <SongCRUD />
    </div>
  );
}

export default App;
