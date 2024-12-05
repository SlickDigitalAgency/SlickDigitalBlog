// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Blog, Contact } from "./pages";
import { SinglePost } from "./components";

const App = () => {
  return (
    <div className="dark:bg-slate-950 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<SinglePost />} />{" "}
        {/* Dynamic Route */}
      </Routes>
    </div>
  );
};

export default App;
