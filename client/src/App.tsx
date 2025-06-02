import { Route, Routes } from "react-router"
import MainOutlet from "./components/outlets/MainOutlet"
import Home from "./components/pages/Home"
import Books from "./components/pages/Books"
import SpecificBook from "./components/pages/SpecificBook"

const App = () => {


  return (
    <>
      <Routes>
        <Route path='' element={<MainOutlet />}>
          <Route index element={<Home />} />
          <Route path='books' element={<Books />} />
          <Route path='books/:id' element={<SpecificBook />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
