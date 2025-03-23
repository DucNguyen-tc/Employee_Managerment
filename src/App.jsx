import LoginForm from "./LoginForm/LoginForm"
import { Provider } from "react-redux";
import store from "./ReduxToolkit/store";
import Sidebar from "./components/Sidebar";
import BookingSlots from "./components/BookingSlot";
import Table from './Payment_Component/Table'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
       {/* <div className="flex bg-white/30 backdrop-blur-lg">
         <LoginForm />
         <Table />
       <Sidebar />
         <div className="flex-1 pt-10">
           <BookingSlots />
        </div>
       </div> */}
       <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
