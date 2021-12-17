import React from "react";
import { Row, Select, Form, Input, Button, notification } from "antd";
import 'antd/dist/antd.css';
import '../main-screen/style.css';
import TextArea from "rc-textarea";
import { createClient } from "../url_helper";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
  constructor() {
    super();
    this.state = {
      number: '',
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  
  
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
            message: res.data.error,
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

  handleKeyDown(e) {
    const re = /^[0-9\b]+$/;
    console.log('e', e.target.value)
    if (!(e.target.value) === 'e' || re.test(e.target.value)) {
      console.log('sdae', e.target.value)
      this.setState({ number: e.target.value })
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

            </div>
          </div>
          <div class="nav-scroller py-1 mb-2">
            <nav class="nav px-3 d-flex justify-content-end text-white bg-dark">
              <Link to="/enquiry" class="icon p-2">
                <div class="txt">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" fill="currentColor" class=" bi bi-bell " viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg></div>
                {this.props.notify >0? <div class="txt1">{this.props.notify} </div>:''} 
              </Link>
              <a class="p-2 ">Reward</a>
            </nav>
          </div>
          <Breadcrumb class="mx-2 ">
            <Breadcrumb.Item >
              <Link to="/">
                Login
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/dashboard">
                Home
              </Link>
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
                          // required: true,
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
                      <Select mode="multiple" placeholder="select your Category">
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
                      // value={this.state.number}
                      // onKeyPress={this.handleKeyDown}
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
 const mapStatetopProps=(props)=>{
   return{
     notify:props.notifycation.notify
   }
 }
export default connect(mapStatetopProps)(AddClient);
