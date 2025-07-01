import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Homepage.jsx"
import Pagenotfound  from "./Components/pagenotfound.jsx"
import  Qr from "./Components/Qr.jsx"
import {Otp} from "./Components/Otp.jsx"
function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home />}/>
              <Route path={"/qr"} element={<Qr />}/>
              <Route path={"/otp"} element={<Otp />}/>
              <Route path={"*"} element={<Pagenotfound />}/>
          </Routes>
      </BrowserRouter>

  )
}

export default App
