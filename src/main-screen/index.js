import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
class LandingScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="wrapper h-100">
          <div class="d-lg-flex flex-lg-row login h-lg-100">
            <div class="  logo-sec h-lg-100">
              <div class="d-flex flex-row login h-100">
                <div class=" w-100 text-center">
                  <Link to="/">
                    <img src="images/logo.png" alt="" srcset="" />
                  </Link>
                </div>
              </div>
            </div>
            <div class=" d-flex  tile-sec w-100 ">
              <div class="d-flex flex-row login h-100">
                <div class=" w-100 text-center">
                  <div class="card m-auto p-3 pt-5 card-tag">
                    <div class="card-body">
                      <Link to="/login">
                        <p class="btn btn-primary">Login as Admin</p>
                      </Link>
                      <br />
                      <Link to="/login">
                        <p class="btn btn-primary mt-5">Login as Customer</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingScreen;
