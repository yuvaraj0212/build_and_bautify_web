import React,{useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
import { Row, Select , Form, Input, Button } from "antd";
import 'antd/dist/antd.css'; 

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

 
const EditClient =()=> {
  
    
//   const[clientId,setClientId] = useState("")
//   setClientId(id)
 console.log(window.sessionStorage.getItem("id"))

 useEffect(() => {
    fetchData();
 }, []);

const fetchData=()=>{
    //  Axios({
    //      method: 'get',
    //      url: 'http://localhost:8080/get-client'
    //  }).then((res) => {
    //      if (res.data.status === 200) {
    //        setData(res.data.result)
            
    //          // window.location.href = "/dashboard" // history.push("/dashboard");
            
    //      } else {
    //      }
    //  })
}

const handleSubmit=(values)=>{
console.log(values.username)
    }


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
          <Form onFinish={handleSubmit}>
            <div class="container-fluid mt-3">
              <h3>Add Client</h3>

              {/* <div class="row mt-3 mb-4">
              <div class="col-3"> */}

              <div class="row">
                <div class="col-sm">
                  <div className="form-group">
                    <Form.Item
                     {...formItemLayout}
                      name="username"
                      label="Name"
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
                      name="client"
                      label="Type of Client"
                      rules={[
                        {
                          required: true,
                          message: "Please input type of client!",
                        },
                      ]}
                     
                    >
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="type of client"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <Form.Item
                     {...formItemLayout}
                      name="productname"
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
                </div>
                <div class="col-sm">
                <div className="form-group">
                    <Form.Item
                     {...formItemLayout}
                      name="mobile"
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
                  </div>
                  <div className="form-group">
                    <Form.Item
                     {...formItemLayout}
                      name="visit"
                      label="Stage of visit"
                      rules={[
                        {
                          required: true,
                          message: "Please input your stage of visit!",
                        },
                      ]}
                     
                    >
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="stage of visit"
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <Form.Item
                     {...formItemLayout}
                      name="brand"
                      label="Brand"
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
                        placeholder="brand"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div class="col-sm">
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
        name="lead"
        label="Lead Source"
        rules={[{ required: true, message: 'Please select lead!' }]}
      >
        <Select placeholder="select your lead source">
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>
      </Form.Item>

      </div>
                </div>
              </div>
             
            </div>
            <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          SUBMIT
        </Button>
      </Form.Item>
          </Form>
        </div>
      </>
    );
  }


export default EditClient;
