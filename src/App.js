import logo from './logo.svg';
import './App.css';
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import LandingScreen from './main-screen/index';
import Login from './main-screen/login'
import SignUp from './main-screen/signup'
import Dashboard from './dashboard/dashboard';
import AddClient from './dashboard/add-client';
import EditClient from './dashboard/edit-client';
import clientLogin from './client/clientLogin';
import clientSignUp from './client/clientSignup';
import clientDashboard from './client/clientDashboard';

function App() {
  return (
    <div>
  <BrowserRouter>
    <Switch>
    {/* <Route exact path="/" element={<Login />}>
          <Login/>
        </Route> */}
    <Route exact path="/" component={LandingScreen} />
    <Route  path="/login" component={Login} />
    <Route  path="/signup" component={SignUp} />
    <Route  path="/dashboard" component={Dashboard} />
    <Route  path="/client-login" component={clientLogin} />
    <Route  path="/client-signup" component={clientSignUp} />
    <Route exact path="/client-dashboard" component={clientDashboard} />
    <Route path="/create-client" component={AddClient}/>
    <Route path={"/edit-client/:id"} component={EditClient}/>
    
    </Switch>
    </BrowserRouter>

 </div>
  );
}

export default App;
