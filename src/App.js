import { useContext } from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Home from './pages/Home/home';
import List from './pages/List/list';
import Single from "./pages/Single/single";
import New from './pages/New/new'
import "./darkstyle/dark.scss"
import { userInputs, productInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark": "app"}>
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="users" > 
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>
          <Route path="products" > 
            <Route index element={<List />} />
            <Route path=":proudctsId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
