import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import NoFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<DetailsPage />} />
          <Route path='*' element={<NoFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
