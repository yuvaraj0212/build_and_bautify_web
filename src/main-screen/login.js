import React from "react";
import "./style.css";
// import { useHistory } from "react-router-dom";
// import { useHistory  } from 'react-router'
import {  notification,Form,Input } from 'antd';
import Axios from 'axios'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    username: '',
    password: '',
  };
};

 handleLogin=(values)=>{
    // const history = useHistory();
// event.preventDefault();
// const { username, password } = this.state;
// const routerHistory = useHistory();
const data ={username:values.username,password:values.password};
console.log(data);
try {
    Axios({
        method: 'post',
        url: 'http://localhost:8080/signin',data
    }).then((res) => {
        if (res.data.status === 200) {
            window.location.href = "/dashboard" // history.push("/dashboard");
           
        } else {
        }
    })} catch(error) {
       console.error(error)
        notification.error({
            message:error.message,
            description: 'This feature has been updated later!',
        })
    }
}

  render() {
    return (
      
        <div class="wrapper h-100">
          <div class="d-flex flex-row login h-100">
            <div class="  logo-sec h-100">
              <div class="d-flex flex-row login h-100">
                <div class=" w-100 text-center">
                  <img src="images/logo.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <div class=" d-flex  tile-sec w-100 h-100">
              <div class="d-flex flex-row login h-100">
                <div class=" w-100 ">
                  <div class="card m-auto p-3 pt-2 card-tag">
                    <div class="card-body">
                      <Form onFinish={this.handleLogin}>
                        <h3>Sign In</h3>
                        {/* <div class="form-group mt-4">
                          <label for="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            name="username"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            required
                            // onChange={e => this.setState({ username: e.target.value })}
                          />
                        </div> */}
                          <div className="form-group">
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Username or email address"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password..."
                                        />
                                    </Form.Item>
                                </div>
                        {/* <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required
                            // onChange={e => this.setState({ password: e.target.value })}
                          />
                        </div> */}
                        <div class="sign-link mt-4 mb-4">
                          <h6>Forgot Password</h6>
                          <a
                            href="Signup.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h6>Signup</h6>
                          </a>
                        </div>
                        <button   htmlType="submit" class="btn btn-primary" >Login</button>
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
