import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Service from "./Services";

export default function Homepage(){
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>
    </div>
  )
}