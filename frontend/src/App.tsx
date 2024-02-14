import "./App.css";
import Layout from "./containers/Layout/Layout";
import SongCRUD from "./containers/SongCRUD/SongCRUD";

function App() {
  return (
    <div className="App">
      <Layout /> <SongCRUD />
    </div>
  );
}

export default App;
