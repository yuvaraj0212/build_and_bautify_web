import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import { useHistory  } from 'react-router'
import { notification, Form, Input } from "antd";
import { signin } from "../url_helper";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (values) => {
    try {
      signin(values).then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.result.rolename);
          var roles = res.data.result.roles;
          roles.forEach((role) => {
            if (role.roleName === "ROLE_ADMIN") {
              console.log(res);
              notification.success({
                message: res.data.message,
                description: "This feature has been updated later!",
              });
              this.props.history.push("/dashboard");
            } else if (role.roleName === "ROLE_USER") {
              sessionStorage.setItem("clientId", res.data.result.id);
              console.log(res);
              notification.success({
                message: res.data.message,
                description: "This feature has been updated later!",
              });
              this.props.history.push("/client-dashboard");
            } else {
              notification.warn({
                message: "Email Notavilable in Admain Role",
                description: "This feature has been updated later!",
              });
            }
          });
          // if (role.roleName === "ROLE_USER") {
          //   console.log(res);
          //   notification.success({
          //     message: res.data.message,
          //     description: "This feature has been updated later!",
          //   });
          //   // window.location.href = "/dashboard"
          //   this.props.history.push("/dashboard");
          // } else {
          //   notification.warn({
          //     message: "Email Notavilable in Admain Role",
          //     description: "This feature has been updated later!",
          //   });
          // }
        } else {
          notification.warn({
            message: res.data.message,
            description: "This feature has been updated later!",
          });
        }
      });
    } catch (error) {
      console.error(error);
      notification.error({
        message: error.message,
        description: "This feature has been updated later!",
      });
    }
  };

  render() {
    return (
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
            <div class="d-flex flex-row login h-lg-100">
              <div class=" w-100 ">
                <div
                  class="card m-auto p-3 pt-2 "
                  style={{ border: "none", height: "430px", width: "357px" }}
                >
                  <div class="card-body">
                    <Form onFinish={this.handleLogin}>
                      <h3>Sign In</h3>

                      <div className="form-group mt-4">
                        <label>Mobile Number</label>
                        <Form.Item
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Please input your mobile number!",
                            },
                          ]}
                        >
                          <Input
                            className="form-control"
                            type="text"
                            autoComplete="off"
                            placeholder="mobile number!"
                          />
                        </Form.Item>
                      </div>
                      <div className="form-group form-forgot">
                        <label>Password </label>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                            {
                              pattern: /^.{6,}$/,
                              message: `password contains at least Six characters`,
                            },
                          ]}
                        >
                          <Input
                            className="form-control"
                            type="password"
                            placeholder="Password..."
                          />
                        </Form.Item>
                      </div>

                      <div class="sign-link mt-4 mb-4">
                        <h6>Forgot Password</h6>
                        <Link to="/signup">
                          <p
                            className="text-decoration-none"
                            // href="Signup.html"
                            // target="_blank"
                          >
                            <h6 className="text-primary ">Signup</h6>
                          </p>
                        </Link>
                      </div>
                      <button htmlType="submit" class="btn btn-primary">
                        Login
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
