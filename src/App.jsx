import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>Longs Parfa Nansok</h1>
        <ul className="header">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <a>Home</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <a>About</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <a>Contact</a>
            </NavLink>
          </li>
        </ul>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
