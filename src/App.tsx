import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
