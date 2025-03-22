import LoginForm from "./LoginForm/LoginForm"
import { Provider } from "react-redux";
import store from "./ReduxToolkit/store";
import Sidebar from "./components/Sidebar";
import BookingSlots from "./components/BookingSlot";

function App() {
  return (
    <div className="flex bg-white/30 backdrop-blur-lg">
      <LoginForm />
      {/* <Sidebar />
      <div className="flex-1 pt-10">
        <BookingSlots /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
