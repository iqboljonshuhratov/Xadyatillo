import React from "react";

const ThemaContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {},
  Exchange: () => {},
  change: false,
  // info: 'boshSahifa', 
  // BoshSahifa1: () => {},
  // OzimHaqimda1: () => {}, 
  // Talim1: () => {}, 
  // Prayektlar1: () => {}
});

export default ThemaContext;
