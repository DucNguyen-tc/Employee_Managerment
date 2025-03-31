import LoginForm from "./LoginForm/LoginForm";
import { Provider } from "react-redux";
import store from "./ReduxToolkit/store";
import Sidebar from "./components/SidebarUser";
import BookingSlots from "./components/BookingSlot";
import Table from "./Payment_Component/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import In4DashboardDisplay from "./components/In4DashboardDisplay";
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
      {/* <Routes>
       <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/BookingSlot" element={<BookingSlots />} />
       </Routes> */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<In4DashboardDisplay />} />{" "}
          {/* Mặc định trang */}
          <Route path="bookingslot" element={<BookingSlots />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
