import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import Feed from "./pages/feed/index";
import Home from "./pages/Home/index";

const Rotas = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Feed" element={<Feed/>} />
                <Route path="/Login" element={<Login/>}  />
           </Routes>
       </BrowserRouter>
   )
}

export default Rotas;