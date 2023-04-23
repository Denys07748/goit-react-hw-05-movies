import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"));
const Movies = lazy(() => import("../../pages/Movies"));
const MovieDitails = lazy(() => import("../../pages/MovieDetails"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const Cast = lazy(() => import("../Cast/Cast"));

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDitails />}>
            <Route path="cast"  element={<Cast />}  />
            <Route path="reviews"  element={<Reviews />} />
          </Route>
        </Route> 
      </Routes>
  );
};

export default App;
