import { Route, Routes } from "react-router-dom";
import Landing from "./componentes/Landing";
import Home from "./componentes/Home";
import Hoome from "./componentes/Hoome";

function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/"} Component={Landing} />
        <Route path={"/home"} Component={Home} />
        <Route path={"/hoome"} Component={Hoome} />
      </Routes>
    </>
  );
}

export default App;
