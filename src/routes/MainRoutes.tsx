import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "../pages/private/Exam/Exam.tsx";
import Home from "../pages/public/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Result from "../pages/private/Result/Result.tsx";
import OverallResult from "../pages/private/Result/OverallResult.tsx";
import Overview from "../pages/private/Overview/Overview.tsx";
import QuestionManager from "../pages/private/Questions/Questions_manager.tsx";
import Matrix_management from "../pages/private/Matrix/Matrix_management.tsx";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PublicRoutes/>} >
              <Route path="/" element={<Home/>} />
              
          </Route>
          <Route element={<PrivateRoutes/>} >
              <Route path="/overview" element={<Overview/>} />
              <Route path="/exam" element={<Exam/>} />
              <Route path="/result" element={<Result/>} />
              <Route path="/questions-manager" element={<QuestionManager/>} />
              <Route path="/matrix-manager" element={<Matrix_management/>} />
              <Route path="/overall-result" element={<OverallResult/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}