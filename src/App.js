import "./App.css";
import { useEffect, useState } from "react";
import "./Components/Navbar/Navbar.css";
import "./Components/Item/Item.css"
import "./Components/ItemList/ItemList.css"
import "./Components/ItemListContainer/ItemListContainer.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Categorias from "./Components/Dom/Categorias";
import Sillas from "./Components/Dom/Sillas";
import Sillones from "./Components/Dom/Sillones";
import Inicio from "./Components/Dom/Inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ItemListContainer greeting="Bienvenidos a Accent"/>
      </BrowserRouter>
    </>
  );
};

export default App;