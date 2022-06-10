
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';

import Header from './Header/Header';
import About from './Pages/About';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';


function App() {
  return (
    <div >
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
