import { Routes, Route, Navigate } from "react-router-dom";
import FifthAndSixthSection from "./components/landingPage/fifth_and_sixth_section/FifthAndSixthSection";
import AI_ML from "./components/landingPage/fifth_and_sixth_section/SubPages.jsx/AI_ML";
import Fifth_and_sixth_subpages from "./components/landingPage/fifth_and_sixth_section/SubPages.jsx/Fifth_and_sixth_subpages";
import GetStarted from "./components/landingPage/get_started/GetStarted";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/fifth_sixth_subpage"
          element={<Fifth_and_sixth_subpages />}
        />
        <Route path="/get_started" element={<GetStarted />} />
      </Routes>
    </div>
  );
}
export default App;
