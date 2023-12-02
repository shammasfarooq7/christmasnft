import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import LandingPage from "./pages/landing-page";

function App() {
  const pathname = window.location.pathname;


  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/modal":
        title = "";
        metaDescription = "";
        break;
      case "/single-product-page":
        title = "";
        metaDescription = "";
        break;
      case "/thank-you-page":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
