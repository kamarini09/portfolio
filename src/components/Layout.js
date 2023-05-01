import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Layout (){
    return(
        <> 
        <Nav></Nav>
        <About></About>
        <Projects id="projects"></Projects>
        <Contact></Contact>
        <Footer></Footer>
        </>
        
    )
}