import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Details from "../components/Details";

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Organik Ürünler</title>
        <meta
          name="description"
          content="desc"
        />
        <meta
          name="keywords"
          content="desc"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
