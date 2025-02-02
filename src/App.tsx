import { Routes, Route, Link } from 'react-router';
import TicTacToec from "./pages/tic-tac-toe/tic-tac-toe.tsx";

const App = () => {
  return (
      <>
        <h1>React Router</h1>

        <Navigation />

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="tic" element={<TicTacToec />} />
        </Routes>
      </>
  );
};

const Home = () => {
  return (
      <main style={{ padding: '1rem 0' }}>
        <h2>Home</h2>
      </main>
  );
};

const Users = () => {
  return (
      <main style={{ padding: '1rem 0' }}>
        <h2>Users</h2>
      </main>
  );
};

const Navigation = () => {
  return (
      <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
      >
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/tic">Tic</Link>
      </nav>
  );
};

export default App;