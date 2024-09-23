import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";

function App() {
  return (
    <>
      <Nav /> {/* Include the Navbar component here */}
      <main>
        <h1 className="text-xl font-bold text-red-500">Radd Gaming Inbound!</h1>
        <Outlet /> {/* Include Outlet for nested routes */}
      </main>
    </>
  );
}

export default App;
