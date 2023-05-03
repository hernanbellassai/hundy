import { Route, Routes } from "react-router-dom";
import Landing from "./componentes/Landing";
import Home from "./componentes/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/"} Component={Landing} />
        <Route path={"/home"} Component={Home} />
      </Routes>
    </>
  );
}

export default App;
