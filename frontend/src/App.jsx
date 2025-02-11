import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import CreatePage from "./pages/CreatePage"

function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createPage" element={ <CreatePage/>} />
      </Routes>
      </>
  )
}

export default App
