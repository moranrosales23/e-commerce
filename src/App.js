import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { GeneralProvider } from "./GeneralProvider";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Initial } from "./components/Initial";

function App() {
  const [theme, settheme] = useState({ theme: "dark" });
  const [category, setcategory] = useState("");
  return (
    <>
      <GeneralProvider.Provider
        value={{
          ...theme,
          settheme,
          category,
          setcategory,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="*" element={<h2>Página no Encontrada</h2>} />
          </Routes>
        </BrowserRouter>
      </GeneralProvider.Provider>
    </>
  );
}

export default App;
