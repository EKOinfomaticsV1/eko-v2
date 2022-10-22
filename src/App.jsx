import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/landingPage/about_us/AboutUs";
import CaseStudyPage from "./components/landingPage/eight_section/case_study/CaseStudyPage";
import FifthAndSixthSection from "./components/landingPage/fifth_and_sixth_section/FifthAndSixthSection";
import AI_ML from "./components/landingPage/fifth_and_sixth_section/SubPages.jsx/AI_ML";
import Fifth_and_sixth_subpages from "./components/landingPage/fifth_and_sixth_section/SubPages.jsx/Fifth_and_sixth_subpages";
import GetStarted from "./components/landingPage/get_started/GetStarted";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route
          path="/fifth_sixth_subpage"
          element={<Fifth_and_sixth_subpages />}
        />
        <Route path="/get_started" element={<GetStarted />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/case_study" element={<CaseStudyPage />} />
      </Routes>
    </div>
  );
}
export default App;
