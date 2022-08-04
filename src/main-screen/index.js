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
                  <ul class="">
                    <li class="border-right">
                      <a href="tel:9003229922">
                        <span class="">
                          <i aria-hidden="true" class="fa fa-phone"></i>{" "}
                        </span>
                        <span class=""> Phone</span>
                      </a>
                    </li>
                    <li class="border-right">
                      <a href="mailto:buildnbeautify@gmail.com">
                        <span class="">
                          <i aria-hidden="true" class="fa fa-envelope "></i>{" "}
                        </span>
                        <span class=""> Email</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        href="https://g.page/srinivasakaenterprises?share"
                        target="_blank"
                      >
                        <span class="">
                          <i aria-hidden="true" class="fa fa-map-marker"></i>{" "}
                        </span>
                        <span class=""> Location</span>
                      </a>
                    </li>
                  </ul>
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
                      <Link to="/client-login">
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
