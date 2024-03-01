
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home'
import { Login } from './pages/Login'

function App() {
  return (
    // <Home/>
    // <Login/>
    // <Register/>
    // <UserHome/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
