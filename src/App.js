import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import LandingPage from "./pages/landing-page";
import English from "./assets/images/english.png"
import Italian from "./assets/images/italian.png"
import { useTranslation } from "react-i18next";


function App() {
  const pathname = window.location.pathname;
  const {i18n} = useTranslation();
  function handleLanguageChange(lang){
    i18n.changeLanguage(lang);
  }

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
    <><div>
        <div className="flex justify-end">
          <div className="m-2 cursor-pointer" onClick={() => handleLanguageChange('en')}>
            {/* English language icon */}
            <img
              src={English}
              alt="English"
              className="w-8 h-8 rounded-full" />
          </div>
          <div className="m-2 mr-60 cursor-pointer" onClick={() => handleLanguageChange('it')}>
            {/* Italian language icon */}
            <img
              src={Italian}
              alt="Italian"
              className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div><Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      </div>
    </Router></>
  );
}
export default App;
