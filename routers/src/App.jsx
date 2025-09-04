// import { Route, Routes } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Settings from "./pages/Settings";


// export default function App() {
//   return (
//     <>
//     <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/about" element={<About/>}/>
//     <Route path="/settings" element={<Settings/>}/>
//     <Route path="/login" element={<Login/>}/>

//     </Routes>
//     </>
//   )
// }



import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Main from "./layouts/Main";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <>

    <Routes>
    <Route path="/" element={<Main/>}>

        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/settings" element={<Settings/>}/>

    </Route>
        <Route path="/login" element={<Login/>}/>

    </Routes>
    </>
  )
}
