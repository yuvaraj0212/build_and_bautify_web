import React from "react";
import "../main-screen/style.css";
import { notification, Form, Input } from 'antd';
import { signup } from "../url_helper";

class clientSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false
    }
  }
  handlesignup = (values) => {
    values.rolename = "client";
    values.empId="empId";
    console.log(values);
    this.setState({ loading: true })
    try {
      signup(values).then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          this.setState({ loading: false })
          notification.success({
            message: res.data.message,
            description: 'This feature has been updated later!',
          })
          // window.location.href = "/dashboard"
          this.props.history.push("/client-login");

        } else {
          this.setState({ loading: false })
          notification.warn({
            message: res.data.message,
            description: 'This feature has been updated later!',
          })
        }
      })
    } catch (error) {
      this.setState({ loading: false })
      console.error(error)
      notification.error({
        message: error.message,
        description: 'This feature has been updated later!',
      })
    }

  }

  render() {
    const { loading } = this.state;
    return (
      <>
        {
          loading ?  <div class="d-flex justify-content-center">
              <div class="spinner-border " style={{ width: '5rem', height: '5rem', marginTop: "25%" }} role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            :
            <div class="wrapper h-100">
              <div class="d-lg-flex flex-lg-row login h-lg-100">
                <div class="  logo-sec h-lg-100">
                  <div class="d-flex flex-row login h-100">
                    <div class=" w-100 text-center">
                      <img src="images/logo.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
                <div class=" d-flex  tile-sec w-100 h-100">
                  <div class="d-flex flex-row login h-lg-100">
                    <div class=" w-100 ">


                      <div class="card m-auto p-3 pt-2 sign-card"  >
                        <div class="container-fluid mt-3">
                          <h3>Sign Up</h3>
                          <Form onFinish={this.handlesignup}>

                            <div class="row mt-3 mb-4">
                              <div class="col-6">

                                <div class="form-group">

                                  <Form.Item
                                    name="name"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'Please input your username!',
                                      },
                                    ]}>
                                    <Input
                                      className="form-control"
                                      type="text"
                                      placeholder="Username"
                                    />
                                  </Form.Item>
                                </div>
                                <div class="form-group">
                                  <Form.Item
                                    name="gender"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'Please input your gender!',
                                      },
                                    ]}>
                                    <Input
                                      className="form-control"
                                      type="text"
                                      placeholder="gender"
                                    />
                                  </Form.Item>
                                </div>
                                {/* <div class="form-group">
                                  <Form.Item
                                    name="empId"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'Please input your empolyee Id!',
                                      },
                                    ]}>
                                    <Input
                                      className="form-control"
                                      type="text"
                                      placeholder="empolyee id"
                                    />
                                  </Form.Item>
                                </div> */}
                                 <div class="form-group ">
                                <Form.Item
                                  name="email"
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        'Please input your email',
                                    },
                                  ]}>
                                  <Input
                                    className="form-control"
                                    type="email"
                                    placeholder="email"
                                  />
                                </Form.Item>
                              </div>

                              </div>

                              <div class="col-6">
                                <div class="form-group">
                                  <Form.Item
                                    name="dob"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'Please input your Date of Birth!',
                                      },
                                    ]}>
                                    <Input
                                      className="form-control"
                                      type="date"
                                      placeholder="Date of Birth"
                                    />
                                  </Form.Item>

                                </div>
                                <div class="form-group">
                                  <Form.Item
                                    name="phone"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'Please input your mobile number!',
                                      },
                                      {
                                        pattern: /^[0-9\b]+$/,
                                        message: ` contains only numbers`
                                      }
                                    ]}>
                                    <Input
                                      className="form-control"
                                      type="number"
                                      placeholder="mobile number"
                                    />
                                  </Form.Item>
                                </div>
                                <div class="form-group">
                                  <Form.Item
                                    name="adharNo"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'Please input your adhar number!',
                                      }, {
                                        pattern: /^[0-9\b]+$/,
                                        message: ` contains only numbers`
                                      }
                                    ]}>
                                    <Input
                                      className="form-control"
                                      type="number"
                                      placeholder="adhar number"
                                    />
                                  </Form.Item>
                                </div>
                              </div>

                              {/* <div class="form-group ">
                                <Form.Item
                                  name="email"
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        'Please input your email',
                                    },
                                  ]}>
                                  <Input
                                    className="form-control"
                                    type="email"
                                    placeholder="email"
                                  />
                                </Form.Item>
                              </div> */}

                              <div class="col-6">
                                <div class="form-group">
                                  <Form.Item
                                    name="password"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'Please input your password',
                                      }, {
                                        pattern: /^.{6,}$/,
                                        message: `password contains at least Six characters`
                                      }
                                    ]}>
                                    <Input
                                      className="form-control"
                                      type="password"
                                      placeholder="password"
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="form-group">
                                  <Form.Item
                                    name="confirmpassword"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'Please input your confirmpassword',
                                      }, {
                                        pattern: /^.{6,}$/,
                                        message: `password contains at least Six characters`
                                      }
                                    ]}>
                                    <Input
                                      className="form-control"
                                      type="text"
                                      placeholder="confirmpassword"
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              <button type='submit' class="btn-primary p-2 text-center" >Submit</button>
                            </div>
                          </Form>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
      </>
    )
  }
}

export default clientSignUp;