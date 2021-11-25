import React from "react";
import { Row, Select, Form, Input, Button, notification } from "antd";
import 'antd/dist/antd.css';
import TextArea from "rc-textarea";
import { createClient } from "../url_helper";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
class AddClient extends React.Component {

  handleSubmit = (values) => {
    console.log(values);
    try {
      createClient(values).then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          notification.success({
            message: res.data.message,
            description: 'This feature has been updated later!',
          })
          // window.location.href = "/dashboard"
          this.props.history.push("/dashboard");

        } else {
          notification.warn({
            message: res.data.message,
            description: 'This feature has been updated later!',
          })
        }
      })
    } catch (error) {
      console.error(error)
      notification.error({
        message: error.message,
        description: 'This feature has been updated later!',
      })
    }
  }

  render() {
    const categoryTypes = [
      "Steel & cement",
      "Electrical",
      "Sanitory|Tile|Plumbing",
      "paints",
      "Water proofing",
      "Playwoods|Glasses",
      "Kitchen Items",
      "Water treatment",
      "Mosqito slveeas",
      "Hardware Tools"
    ]
    return (
      <>
        <div class="wrapper h-100">
          <div class="container-fluid">
            <div class="row flex-nowrap justify-content-between align-items-center">
              <div class="col-4 pt-1">
                <img
                  src="images/logo.png"
                  alt=""
                  srcset=""
                  style={{ width: "125px" }}
                />
              </div>
              <div class="col-4 text-center"></div>
              <div class="col-4 d-flex justify-content-end align-items-center">
                <a class="text-muted" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mx-3"
                  >
                    <circle cx="10.5" cy="10.5" r="7.5"></circle>
                    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                  </svg>
                </a>
                <a class="btn btn-sm btn-outline-secondary" href="#">
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div class="nav-scroller py-1 mb-2">
            <nav
              class="nav d-flex justify-content-end"
              style={{ backgroundColor: "#505152" }}
            >
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Request
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item">
                    Service/
                    <br />
                    Complaint/
                    <br />
                    support
                  </a>
                  <a class="dropdown-item text-dark">
                    Product <br /> Request
                  </a>
                </div>
              </div>
              <a class="p-2" href="#">
                Notification
              </a>
              <a class="p-2 " href="#">
                Reward
              </a>
            </nav>
          </div>
          <Breadcrumb>
          <Breadcrumb.Item href="/">
              Login
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/dashboard">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Add client</Breadcrumb.Item>
          </Breadcrumb>
          <Form onFinish={this.handleSubmit}>
            <div class="container-fluid mt-3">
              <h3>Add Client</h3>
              <div class="row">
                <div class="col-sm">
                  <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="email"
                      label="Email Address"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input
                        className="form-control"
                        type="email"
                        placeholder="email address"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="customername"
                      label="customer Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}

                    >
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="type"
                      label="customer Type "
                      rules={[
                        {
                          required: true,
                          message: "Please input type of client!",
                        },
                      ]}

                    >
                      <Select placeholder="select your type of customer">
                        <Option value="Builder">Builder</Option>
                        <Option value="Individual">Individual</Option>
                        <Option value="Worker">Worker</Option>
                        <Option value="Shopkeeper">Shopkeeper</Option>

                      </Select>
                    </Form.Item>
                  </div>
                  <div className="form-group">

                    <Form.Item
                      {...formItemLayout}
                      name="category"
                      label="Category"
                      rules={[{ required: true, message: 'Please select Category!' }]}
                    >
                      <Select placeholder="select your Category">
                        {/* <Option value="1">1</Option> */}
                        {categoryTypes.map((item) => {
                          return <Option key={item} value={item}>{item}</Option>
                        })}
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="product"
                      label="Product Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input product name!",
                        },
                      ]}

                    >
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="product name"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="others"
                      label="Others"
                      rules={[
                        {
                          required: true,
                          message: "Please input your brand!",
                        },
                      ]}

                    >
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="Others"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div class="col-sm">
                  <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="phone"
                      label="Mobile Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input your mobile number!",
                        },
                      ]}
                    >
                      <Input
                        className="form-control"
                        type="number"
                        placeholder="mobile number"
                      />
                    </Form.Item>
                  </div>

                  <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="lead"
                      label="Source of Lead"
                      rules={[
                        {
                          required: true,
                          message: "Please input your source of Lead!",
                        },
                      ]}

                    >
                      <Select placeholder="select your lead source">
                        <Option value="Just dial">Just dial</Option>
                        <Option value="Social media">Social media</Option>
                        <Option value="Reference">Reference</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="address"
                      label="Address"
                      rules={[
                        {
                          required: true,
                          message: "Please input your address!",
                        },
                      ]}
                    >
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="address"
                      />
                    </Form.Item>
                    <div className="form-group">
                      <Form.Item
                        {...formItemLayout}
                        name="quantity"
                        label="Quantity"
                        rules={[
                          {
                            required: true,
                            message: "Please input your quantity!",
                          },
                        ]}
                      >
                        <Input
                          className="form-control"
                          type="number"
                          placeholder="Quantity"
                        />
                      </Form.Item>
                    </div>
                    <div className="form-group">
                      <Form.Item
                        {...formItemLayout}
                        name="comment"
                        label="Comment"
                        rules={[
                          {
                            required: true,
                            message: "Please input your comment!",
                          },
                        ]}
                      >
                        <TextArea
                          className="form-control"
                          placeholder="Comments"
                          autoSize={{ minRows: 4, }}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-end ">
                <button className="btn btn-primary m-3" htmlType="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </Form>
        </div>
      </>
    );
  }
}

export default AddClient;
