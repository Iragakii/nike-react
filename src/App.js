import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import Header from './component/header';
import LastFooter from './component/last_footer';
import Shop from './component/shop';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Body></Body>}></Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Footer></Footer>}></Route>
      </Routes>

     
      <LastFooter></LastFooter>
      <Routes>
        <Route path='/shop' element={<Shop></Shop>}></Route>
      </Routes>

    </>
   
  );
}

export default App;
