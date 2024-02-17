import "./App.css";
import Toolbar from "./containers/Navigation/Toolbar/Toolbar";
import SongCRUD from "./containers/SongCRUD/SongCRUD";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Statistics from "./containers/Statistics/Statistics";
import ArtistsDetail from "./containers/Statistics/ArtistsDetail/ArtistsDetail";
import AlbumsSongCount from "./containers/Statistics/AlbumsSongCount/AlbumsSongCount";
import GenresSongCount from "./containers/Statistics/GenresSongCount/GenresSongCount";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar /> 
        <Routes>
          <Route path="/home" Component={SongCRUD} />
          <Route path="/stat" Component={Statistics} />
          <Route path="/stat/artistsDetail" Component={ArtistsDetail} />
          <Route path="/stat/AlbumsSongCount" Component={AlbumsSongCount} />
          <Route path="/stat/GenresSongCount" Component={GenresSongCount} />
          <Route path="/" Component={SongCRUD} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
