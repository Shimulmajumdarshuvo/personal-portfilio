
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import DetailsProjects from './Pages/Projects/DetailsProjects';



function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<DetailsProjects></DetailsProjects>}></Route>
      </Routes>

    </div>
  );
}

export default App;
