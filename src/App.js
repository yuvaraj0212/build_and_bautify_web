import logo from './logo.svg';
import './App.css';
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import LandingScreen from './main-screen/index';
import Login from './main-screen/login'
import SignUp from './main-screen/signup'
import Dashboard from './main-screen/dashboard';
import AddClient from './client/add-client'
import EditClient from './client/edit-client';
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
    <Route  path="/dashboard" component={Dashboard} />
    <Route path="/create-client" component={AddClient}/>
    <Route path={"/edit-client/:id"} component={EditClient}/>
    
    </Switch>
    </BrowserRouter>

 </div>
  );
}

export default App;
