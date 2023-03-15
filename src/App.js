import './App.css';
import Login from './component/login/login';
import SignUp from './component/signup/signup';
import Dashboard from './component/dashboard/dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/dashboard' element={< Dashboard />}></Route>
          <Route exact path='/' element={< Login />}></Route>
          <Route exact path='/signup' element={< SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
