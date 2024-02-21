import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allproducts from "./Pages/products/Allproducts";
import Blog from "./Pages/blogs/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<Allproducts />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
