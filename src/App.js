import ResetPage from './components/ResetPage';
import LoginPage from './components/LoginPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Userid from './components/Userid';



function App() {
  return (
    <>

     <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/User" element={<Userid/>}/>
        <Route path="/Reset" element={<ResetPage/>}/>
       </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
