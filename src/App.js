
import UserRoutes from "./UserRoutes";
import Menu from "./modules/Menu/Menu";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <UserRoutes />
    </div>
  );
}

export default App;
