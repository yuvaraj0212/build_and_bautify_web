import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingScreen from './main-screen/index';
import Login from './main-screen/login'
import SignUp from './main-screen/signup'
import Dashboard from './dashboard/dashboard';
import AddClient from './dashboard/add-client';
import EditClient from './dashboard/edit-client';
import clientLogin from './client/clientLogin';
import clientSignUp from './client/clientSignup';
import clientDashboard from './client/clientDashboard';
import Enquiry from './dashboard/notification';
import ClientRequest from './client/clientRequest';
import ClientSrevice from './client/clientService';
// import {ClientRequest} from './dashboard/dashboard';
import { useDispatch, useSelector } from "react-redux";
import resetPassword from './main-screen/resetPassword';
import history from './history';
import Demo from './Demo';
function App() {
  const count = useSelector(state => state.notifycation.notify);
  return (
    <div>
      <BrowserRouter history={history}>
        <Switch>
          {/* <Route exact path="/" element={<Login />}>
          <Login/>
        </Route> */}
          <Route exact path="/" component={LandingScreen} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route  path="/dashboard" component={Dashboard}/>
          <Route  path="/resetpassword:emailId" component={resetPassword}/>
          <Route path="/client-login" component={clientLogin} />
          <Route path="/client-signup" component={clientSignUp} />
          <Route exact path="/client-dashboard" component={clientDashboard} />
          <Route path="/create-client" component={AddClient} />
          <Route path={"/edit-client/:id"} component={EditClient} />
          <Route path={"/enquiry"} component={Enquiry} />
          <Route exact path="/client-request" component={ClientRequest} />
          <Route exact path="/client-service" component={ClientSrevice} />
          <Route exact path="/demo" component={Demo} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
