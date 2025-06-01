import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "../pages/private/Exam/Exam.tsx";
import Home from "../pages/public/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Result from "../pages/private/Result/Result.tsx";
import OverallResult from "../pages/private/Result/OverallResult.tsx";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PublicRoutes/>} >
              <Route path="/" element={<Home/>} />
              
          </Route>
          <Route element={<PrivateRoutes/>} >
              <Route path="/dashboard" element={<div>Dashboard</div>} />
              <Route path="/exam" element={<Exam/>} />
              <Route path="/result" element={<Result/>} />
              <Route path="/overall-result" element={<OverallResult/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}