import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserListPage from "./pages/UserListPage/UserListPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="container">
        <nav>
          <ul className="nav-list">
            <Link className="link" to="/">
              <li>Home</li>
            </Link>
            <Link className="link" to="/users">
              <li className="nav-item">Users</li>
            </Link>
            <Link className="link" to="/todo">
              <li>Todo</li>
            </Link>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
