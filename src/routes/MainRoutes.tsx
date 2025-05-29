import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "../pages/public/Exam/Exam";
import Home from "../pages/public/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Result from "../pages/public/Result/Result";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PublicRoutes/>} >
              <Route path="/home" element={<Home/>} />
              <Route path="/exam" element={<Exam/>} />
              
          </Route>
          <Route element={<PrivateRoutes/>} >
              <Route path="/result" element={<Result/>} />
              <Route path="/dashboard" element={<div>Dashboard</div>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}