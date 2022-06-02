import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Select, Form, Input, Button, notification, Badge } from "antd";
import "antd/dist/antd.css";
import TextArea from "rc-textarea";
// import Axios from "axios";
import { updateClient } from "../url_helper";
import Breadcrumb from "react-bootstrap/Breadcrumb";
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

const EditClient = () => {
  const history = new useHistory();
  //   const[clientId,setClientId] = useState("")
  //   setClientId(id)
  let data = JSON.parse(sessionStorage.getItem("edite"));
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
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
  };

  const handleSubmit = (values) => {
    values.id = data.id;
    console.log(values);
    try {
      updateClient(values).then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          notification.success({
            message: res.data.message,
            description: "This feature has been updated later!",
          });
          // window.location.href = "/dashboard"
          history.push("/dashboard");
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
  const categoryTypes = [
    "Steel & cement",
    "Electrical",
    "Sanitory|Tile|Plumbing",
    "paints",
    "Water proofing",
    "Plywoods|Glasses",
    "Kitchen Items",
    "Water treatment",
    "Mosquito sleeves",
    "Hardware Tools",
  ];
  const [forms] = Form.useForm();
  forms.setFieldsValue({
    email: data.email,
    customername: data.customername,
    type: data.type,
    category: data.category,
    product: data.product,
    others: data.others,
    phone: data.phone,
    lead: data.lead,
    address: data.address,
    quantity: data.quantity,
    comment: data.comment,
    handeld: data.handeld,
    area: data.area,
    pincode: data.pincode,
  });
  return (
    <>
      <div class="wrapper h-100">
        <div class="container-fluid">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
              <img src="images/logo.png" alt="" srcset="" />
            </div>
            <div class="col-4 text-center"></div>
          </div>
        </div>
        <div class="nav-scroller py-1 mb-2">
          <nav class="nav px-3 d-flex justify-content-end text-white bg-dark">
            <Link to="/enquiry" class="p-2 ">
              <Badge count={0}>
                <a class="p-1 ">Request</a>
              </Badge>
            </Link>
            <Link to="/service" class="p-2 ">
              <Badge count={0}>
                <a class="p-1 ">Service</a>
              </Badge>
            </Link>
            <div class="p-2 ">
              <Badge count={0}>
                <a class="p-1 ">Reward</a>
              </Badge>
            </div>
          </nav>
        </div>
        <Breadcrumb>
          <Breadcrumb.Item class="mx-5 bg-transparent">
            <Link to="/">Login</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/dashboard">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Edit client</Breadcrumb.Item>
        </Breadcrumb>
        <Form onFinish={handleSubmit} form={forms}>
          <div class="container-fluid mt-3">
            <h3>Edit Client</h3>
            <div class="row">
              <div class="col-sm">
                <div className="form-group">
                  <Form.Item
                    {...formItemLayout}
                    name="email"
                    label="Email Address"
                    rules={[
                      {
                        required: false,
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
                      <Option value="Other">Other</Option>
                      <Option value="Builder">Builder</Option>
                      <Option value="Individual">Individual</Option>
                      <Option value="Architecture">Architecture</Option>
                      <Option value="Engineer">Engineer</Option>
                      <Option value="Plumber">Plumber</Option>
                      <Option value="Painter">Painter</Option>
                      <Option value="Electrician">Electrician</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="form-group">
                  <Form.Item
                    {...formItemLayout}
                    name="category"
                    label="Category"
                    rules={[
                      { required: true, message: "Please select Category!" },
                    ]}
                  >
                    <Select mode="multiple" placeholder="select your Category">
                      <Option value="Other">Other</Option>
                      {categoryTypes.map((item) => {
                        return (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        );
                      })}
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
                        required: false,
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
                    name="area"
                    label="Area"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Locality!",
                      },
                    ]}
                  >
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Area"
                    />
                  </Form.Item>
                </div>

                <div className="form-group">
                  <Form.Item
                    {...formItemLayout}
                    name="pincode"
                    label="PinCode"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Pincode!",
                      },
                    ]}
                  >
                    <Input
                      className="form-control"
                      type="number"
                      placeholder="PinCode"
                    />
                  </Form.Item>
                </div>
              </div>

              {/* Right side */}
              <div class="col-sm">
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
                    name="quantity"
                    label="Quantity"
                    rules={[
                      {
                        required: false,
                        message: "Please input your quantity!",
                      },
                    ]}
                  >
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Quantity"
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
                        required: false,
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
                      <Option value="Other">Other</Option>
                      <Option value="Just dial">Just dial</Option>
                      <Option value="Reference">Reference</Option>
                      <Option value="Google ADS">Google ADS</Option>
                      <Option value="FaceBook">FaceBook</Option>
                      <Option value="Instagram">Instagram</Option>
                      <Option value="Walk-in">Walk-in</Option>
                    </Select>
                  </Form.Item>
                </div>

                <div className="form-group">
                  <Form.Item
                    {...formItemLayout}
                    name="handeld"
                    label="Handled"
                    rules={[
                      {
                        required: true,
                        message: "Please input Handled!",
                      },
                    ]}
                  >
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Handled"
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
                      autoSize={{ minRows: 4 }}
                    />
                  </Form.Item>
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
        {/* <Form onFinish={handleSubmit} form={forms}>
          <div class="container-fluid mt-3">
            <h3>Edit Client</h3>
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
                      {/* <Option value="1">1</Option> 
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
                        required: false,
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
                <div className="form-group">
                    <Form.Item
                      {...formItemLayout}
                      name="handeld"
                      label="Handled"
                      rules={[
                        {
                          required: true,
                          message: "Please input Handled!",
                        },
                      ]}

                    >
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="Handled"
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
                        autoSize={{ minRows: 5, }}
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
        </Form> */}
      </div>
    </>
  );
};

export default EditClient;
