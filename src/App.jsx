import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

import LayOut from "./Components/LayOut/LayOut"
import EveryThing from "./Components/EveryThing/EveryThing"
import Groceries from "./Components/Groceries/Groceries"
import Juice from "./Components/Juice/Juice"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Cart from "./Components/Cart/Cart"
import User from "./Components/User/User"
import Home from "./Components/Home/Home"
import ProductDetail from "./Components/ProductDetail/ProductDetail"



function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="" element={<Home />} />
          <Route path="EveryThing" element={<EveryThing />} />
          <Route path="Grocery" element={<Groceries />} />
          <Route path="Juice" element={<Juice />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="User" element={<User />} />
          <Route path="/:ProductId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>





  )
}

export default App
