import { NavLink, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
};

export default App;
