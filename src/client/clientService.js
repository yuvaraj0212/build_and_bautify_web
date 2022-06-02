import React, { useEffect, useState } from "react";
import "../main-screen/style.css";
import { Link, useHistory } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { Modal, Select, Form, Input, Button, notification, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import {
  createClientEnquiry,
  createClientService,
  deleteClient,
  getClient,
} from "../url_helper";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TextArea from "rc-textarea";
const { confirm } = Modal;
const { Option } = Select;

const ClientSrevice = () => {
  const history = useHistory();
  const handlesignup = (value) => {
    const id = sessionStorage.getItem("clientId");
    console.log(id);
    value.clientId = id;
    console.log(value);
    var bodyFormData = new FormData();
    bodyFormData.append("productName", value.productName);
    bodyFormData.append("service", value.service);
    bodyFormData.append("billno", value.billno);
    bodyFormData.append("comment", value.comment);
    bodyFormData.append("mfile", value.mfile.file.originFileObj);
    bodyFormData.append("clientId", value.clientId);
    console.log(bodyFormData);
    try {
      createClientService(bodyFormData).then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          notification.success({
            message: res.data.message,
            description: "This feature has been updated later!",
          });
          document.getElementById("enquiryForm").reset();
          // history.push("/client-dashboard");
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
    "Playwoods|Glasses",
    "Kitchen Items",
    "Water treatment",
    "Mosqito slveeas",
    "Hardware Tools",
  ];

  const style = {
    color: "#fff",
    backgroundColor: "#344e89",
    borderRadius: "5px",
  };

  return (
    <>
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
            <div class="d-flex flex-row login h-lg-100">
              <div class=" w-100 mt-5 ">
                <div class="card m-auto p-3 mt-5 pt-2 sign-cards">
                  <div class="container-fluid mt-3 ">
                    <h3>Customer Support & Service</h3>
                    <Form onFinish={handlesignup} id="enquiryForm">
                      <div className="row">
                        <div className="offset-lg-1 col-lg-10">
                          {/* <div className="form-group">
                            <label>Category</label>
                            <Form.Item
                              name="category"
                              // label="Category"
                              rules={[{ required: true, message: 'Please select Category!' }]}
                            >
                              <Select placeholder="select your Category">
                                {categoryTypes.map((item) => {
                                  return <Option key={item} value={item}>{item}</Option>
                                })}
                              </Select>
                            </Form.Item>
                          </div> */}
                          <div className="form-group">
                            <label>Product Name</label>
                            <Form.Item
                              name="productName"
                              // label="Product Name"
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
                          <div className="form-group ">
                            <label>Support </label>
                            <Form.Item
                              name="service"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Support!",
                                },
                              ]}
                            >
                              <Select
                                placeholder="select your type of customer"
                                className="pb-1"
                              >
                                <Option value="repair & maintenance">
                                  repair & maintenance
                                </Option>
                                <Option value="Installation">
                                  Installation
                                </Option>
                              </Select>
                            </Form.Item>
                          </div>

                          {/* </div> */}
                          {/* <div className="col-lg-6" > */}

                          <div className="form-group">
                            <label>Bill No:</label>
                            <Form.Item
                              name="billno"
                              // label="Quantity"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Bill No!",
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
                            <label>Attach Bill :</label>
                            <Form.Item
                              name="mfile"
                              rules={[
                                {
                                  required: true,
                                  message: "Please Attach your Bill images!",
                                },
                              ]}
                            >
                              <Upload
                                listType="picture"
                                className="upload-list-inline"
                              >
                                <Button icon={<UploadOutlined />}>
                                  Upload
                                </Button>
                              </Upload>
                            </Form.Item>
                          </div>

                          <div className="form-group">
                            <label>comment</label>
                            <Form.Item
                              name="comment"
                              // label="Comment"
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
                                autoSize={{ minRows: 2 }}
                              />
                            </Form.Item>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              style={style}
                              class="p-2 form-control"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                    {/* style="margin-top:30px !important" */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientSrevice;
