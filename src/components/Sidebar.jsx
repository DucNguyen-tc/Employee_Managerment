import { useSelector } from "react-redux";
import SidebarUser from "./SidebarUser";
import SidebarAdmin from "./SidebarAdmin";

const Sidebar = () => {
  const role = useSelector(state => state.auth.role); // Lấy role từ Redux

  if (!role) return null; // Nếu chưa đăng nhập thì không hiển thị sidebar

  return role === "admin" ? <SidebarAdmin /> : <SidebarUser />;
};

export default Sidebar;
