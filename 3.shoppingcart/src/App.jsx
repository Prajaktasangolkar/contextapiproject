import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardcontextProvider } from "./context/Cardcontext";
import Products from "./components/Products";
import Card from "./components/Card";

function App() {
  const [card, setCard] = useState([]);

  const added = (product) => {
    setCard((prevCard) => [...prevCard, product]);
  };
  const remove = (id) => {
    setCard((prevCard)=>prevCard.filter((product)=>product.id !==id))
  };

  return (
    <CardcontextProvider value={{card,added,remove}}>
    <BrowserRouter>
      <Routes>
        {/* <h1>Hii i am here</h1> */}
        <Route path="/" element={<Products />} />
      <Route path="/card" element={<Card card={card} />} />
      </Routes>
    </BrowserRouter>

    </CardcontextProvider>
  );
}

export default App;
