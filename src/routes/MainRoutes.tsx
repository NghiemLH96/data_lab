import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "../pages/public/Exam/Exam";
import Home from "../pages/public/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Result from "../pages/public/Result/Result";
import OverallResult from "../pages/public/Result/OverallResult.tsx";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PublicRoutes/>} >
              <Route path="/" element={<Home/>} />
              <Route path="/exam" element={<Exam/>} />
              <Route path="/result" element={<Result/>} />
              <Route path="/overall-result" element={<OverallResult/>} />
          </Route>
          <Route element={<PrivateRoutes/>} >

              <Route path="/dashboard" element={<div>Dashboard</div>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}