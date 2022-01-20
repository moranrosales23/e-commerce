import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import MainFunction from "./components/Main";
import HeaderFuntion from "./components/Header";
import { GeneralProvider } from "./GeneralProvider";
import { useState } from "react";

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
        <HeaderFuntion />
        <MainFunction />
      </GeneralProvider.Provider>
    </>
  );
}

export default App;
