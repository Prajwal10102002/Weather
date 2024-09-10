
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Login />
      <Signup /> 

       <Dashboard />
      <Users />
    </div>
  );
}

export default App;
