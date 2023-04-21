import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "pages/Movies";
import MovieDitails from "pages/MovieDetails";
import { SharedLayout } from "components/SharedLayout";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="Movies/:MovieId" element={<MovieDitails />} />
        </Route> 
      </Routes>
  );
};

export default App;
