import "./styles.css";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
