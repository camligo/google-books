import BookFinder from "./pages/BookFinder/BookFinder.jsx";
import LayoutWrapper from "./containers/LayoutWrapper.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import BookPage from "./pages/BookPage/BookPage.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import ColorThemeContextProvider from "./context/ColorThemeContextProvider/ColorThemeContextProvider.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <ColorThemeContextProvider>
          <LayoutWrapper>
            <NavBar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/books" element={<BookFinder />} />
              <Route path="/book/:id" element={<BookPage />}/>
            </Routes>
          </LayoutWrapper>
        </ColorThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
