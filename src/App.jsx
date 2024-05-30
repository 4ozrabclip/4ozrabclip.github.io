import Donut from 'react-spinning-donut';
import Body from './pages/Body.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/blog/Blog.jsx';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return(
    <>
    <header style={{ display: "flex", justifyContent: "center" }}>
        <div className="left-sigil">{
            <Donut
            fontSize={3}
            color="red"
            frameInterval={45}
            />}</div>

        <div className="headnav">
          <h1 className="head-title">4oz Rabclip Mane</h1>

          <nav>
            <ul >
              <li className="nav-list"><Link to="/"><button className="nav-button">About</button></Link></li>
              <li className="nav-list"><Link to="/blog"><button className="nav-button">Blog</button></Link></li>   
              <li className="nav-list"><Link to="/projects/*"><button className="nav-button">Projects</button></Link></li>
              <li className="nav-list"><Link to="/contact"><button className="nav-button">Contact</button></Link></li>
            </ul>
          </nav>


        </div>
   
        <div className="right-sigil">
          {
            <Donut
            fontSize={3}
            color="blue"
            frameInterval={50}/>}
            </div>
    </header>
          <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/projects/*" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
        </Routes>
        </>

  );
}

export default App;