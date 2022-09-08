// import "./styles/App.css";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import { useState } from "react";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="App">
      <Header setMainMenuIsOpen={setMenuIsOpen} mainMenuIsOpen={menuIsOpen} />
      <div className="wrapper">
        <Menu isOpen={menuIsOpen} />
        <Main />
      </div>
    </div>
  );
}

export default App;
