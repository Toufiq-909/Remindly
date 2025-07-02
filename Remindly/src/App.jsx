import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Homepage.jsx"
import Pagenotfound  from "./Components/pagenotfound.jsx"
import  Qr from "./Components/Qr.jsx"
import {Otp} from "./Components/Otp.jsx"
import {Sidebar,Main} from "./Components/Main.jsx"
import Profile from "./Components/Profile.jsx"
function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home />}/>
              <Route path={"/qr"} element={<Qr />}/>
              <Route path={"/otp"} element={<Otp />}/>
              <Route path={"/s"} element={<Sidebar />}/>
              <Route path={"/Dashboard"} element={<Main/>}/>
              <Route path={"/profile"} element={<Profile/>}/>
              <Route path={"*"} element={<Pagenotfound />}/>
          </Routes>
      </BrowserRouter>

  )
}

export default App
