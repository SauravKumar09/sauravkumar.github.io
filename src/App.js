import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Myprojects from './components/Myprojects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from "./components/Dialog/ProjectDetails";
import { useState } from "react";


const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
overflow-x: hidden;
position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
    <Navbar />
    <Body>
      <div>
      <Hero />
      <Wrapper>
        <Skills /> 
        <Experience />
      </Wrapper>  
        <Myprojects openModal={openModal} setOpenModal={setOpenModal}/>
        <Wrapper>  
        <Education />
        <Contact />
      </Wrapper>
        <Footer />
        {openModal.state && (
          <ProjectDetails
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </div>  
    </Body>
    </Router>
    </ThemeProvider>
  );
}

export default App;
