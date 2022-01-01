import React from 'react';
import HomeView from "@views/HomeView";
import ArticleView from "@views/ArticleView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@styles/main.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/articles' element={<ArticleView />} />

          <Route path='/' element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
