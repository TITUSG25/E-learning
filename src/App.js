// import ResetPage from './components/ResetPage';
// import LoginPage from './components/LoginPage';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Userid from './components/Userid';
import Dashboard from '../src/Dashboard/Dashboard';
import AdminDashboard from './Dashboard/Admin/AdminDashboard';
import PdfCourse from './Dashboard/PdfCourse';
// import ChartsDesign from '../src/Dashboard/OverallPerformance';


function App() {
  return (
    <div>

     {/* <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/User" element={<Userid/>}/>
        <Route path="/Reset" element={<ResetPage/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>

       </Routes>
     </BrowserRouter> */}

    
     <Dashboard/>

     {/* <PdfCourse/> */}
{/* 
     <AdminDashboard/> */}
    </div>
  );
}

export default App;
