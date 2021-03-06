
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import DetailsProjects from './Pages/Projects/DetailsProjects';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<DetailsProjects></DetailsProjects>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
