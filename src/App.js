import {
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/header/header";
import AnimeIndividual from "./pages/individual-anime-render/anime-individual";
import MovieIndividual from "./pages/individual-movie-render/movie-individual";
import About from "./pages/aboutus/about"
import Home from "./pages/home/home";
import ScrollToTop from "./components/scroll-top/scroll-to-top";
import Chararacters from "./components/characters/Chararacters";
import Footer from "./components/footer/footer";
import User from "./pages/user/user";
import Support from "./pages/support/support";
import Request from "./pages/request/p_request"
import Suggestion from "./pages/suggestions/suggestion"

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="user" element={<User />}></Route>
        <Route path="char" element={<Chararacters />}></Route>
        <Route path="support" element={<Support />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="request" element={<Request />}></Route>
        <Route path="suggestion" element={<Suggestion />}></Route>
        <Route path="anime-individual" element={<AnimeIndividual />}></Route>
        <Route path="movie-individual" element={<MovieIndividual />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
