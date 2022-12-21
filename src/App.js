import UserRoutes from "./UserRoutes";
import Menu from "./modules/Menu/Menu";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light ">
        <Menu />
      </nav>
      <UserRoutes />
    </div>
  );
}

export default App;
