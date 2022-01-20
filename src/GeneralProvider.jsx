import React from "react";

export const GeneralProvider = React.createContext({
  theme: "dark",
  settheme: null,
  category: "",
  setcategory: null,
});
