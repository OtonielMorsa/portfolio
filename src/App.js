import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './views/footer';
import Home from './views/home/home';
import Nav from './views/nav';
import VerCV from './views/otros/verCV';
import Project from './views/projects/projects';
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<><Nav ubicacion="home"/><Home/></>}/>
          <Route path="/:id" element={<><Nav ubicacion="project"/><Project/></>}/>
          <Route path="/cv/:cvp" element={<><Nav ubicacion="cv"/><VerCV/></>}/>
        </Routes>
      </HashRouter>
      <Footer/>
    </>
  );
}

export default App;
