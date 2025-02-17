import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import CreatePage from "./pages/CreatePage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className=" sm:w-[80vw] w-[90vw]">
          <Navbar/>
          
          <div className="flex justify-center items-center min-h-screen -mt-36">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/createPage" element={<CreatePage />} />
              <Route path="/secret/:secretKey" element={<HomePage />} />
              <Route path="/ErrorPage" element={ <ErrorPage/>} />
            </Routes>
            </div>
          </div>
        </div>
      </>
  )
}

export default App
