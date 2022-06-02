import React, { useEffect, useState } from "react";
import "../main-screen/style.css";
import { Link } from "react-router-dom";
import { Modal, Select, Form, Input, Button, notification } from "antd";
import "antd/dist/antd.css";
import { createClientEnquiry, getNotifyction } from "../url_helper";
import TextArea from "rc-textarea";
import { useDispatch, useSelector } from "react-redux";
import { AddNotify, getNotify } from "../redux/action/action";
const { confirm } = Modal;
const { Option } = Select;

const ClientRequest = () => {
  const dispatch = useDispatch();
  console.log();
  const props = useSelector((state) => state.notifycation.notify);
  const handlesignup = (value) => {
    const id = sessionStorage.getItem("clientId");
    value.clientId = id;
    console.log(value);
    try {
      createClientEnquiry(value).then((res) => {
        // notify();
        if (res.data.status === 200) {
          console.log(props);
          getNotifyction().then((res) => {
            if (res.data.status === 200) {
              console.log(res.data.result);
              dispatch(AddNotify(res.data.result));
            }
          });
          notification.success({
            message: res.data.message,
            description: "This feature has been updated later!",
          });
          document.getElementById("enquiryForm").reset();
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

  console.log(props);

  return (
    <>
      <div class="wrapper h-100">
        <div class="d-lg-flex flex-lg-row login h-100 mt-1">
          <div class="  logo-sec h-lg-100">
            <div class="d-flex flex-row login h-100">
              <div class=" w-100 text-center">
                <Link to="/">
                  <img src="images/logo.png" alt="" srcset="" />
                </Link>
              </div>
            </div>
          </div>
          <div class=" d-flex  tile-sec w-100 h-100     ">
            <div class="d-flex flex-row login h-lg-100">
              <div class=" w-100 mt-5 ">
                <div class="card m-auto p-3 mt-5 pt-2 sign-card">
                  <div class="container-fluid mt-3">
                    <h3>Request Page</h3>
                    <Form onFinish={handlesignup} id="enquiryForm">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Product Name 1</label>
                            <Form.Item
                              name="product"
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
                          <div className="form-group">
                            <label>Category</label>
                            <Form.Item
                              name="category"
                              rules={[
                                {
                                  required: true,
                                  message: "Please select Category!",
                                },
                              ]}
                            >
                              <Select
                                mode="multiple"
                                placeholder="select your Category"
                              >
                                {/* <Option value="1">1</Option> */}
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
                            <label>Quantity</label>
                            <Form.Item
                              name="quantity"
                              // label="Quantity"
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
                          <div className="form-group ">
                            <label>Other</label>
                            <Form.Item
                              name="other"
                              rules={[
                                {
                                  required: false,
                                  message: "Please input your other!",
                                },
                              ]}
                            >
                              <Input
                                className="form-control"
                                type="text"
                                placeholder="Other"
                              />
                            </Form.Item>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Product Name 2</label>
                            <Form.Item
                              name="product2"
                              // label="Product Name"
                              rules={[
                                {
                                  required: false,
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
                            <label>Reference Name</label>
                            <Form.Item
                              name="refName"
                              rules={[
                                {
                                  required: false,
                                  message: "Please input your Reference Name!",
                                },
                              ]}
                            >
                              <Input
                                className="form-control"
                                type="text"
                                placeholder="Reference"
                              />
                            </Form.Item>
                          </div>
                          <div className="form-group ">
                            <label>Reference Number</label>
                            <Form.Item
                              name="refNo"
                              rules={[
                                {
                                  required: false,
                                  message:
                                    "Please input your Reference Number!",
                                },
                              ]}
                            >
                              <Input
                                className="form-control"
                                type="number"
                                placeholder="Reference Number"
                              />
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
                                className="form-control "
                                placeholder="Comments"
                                // autoSize={{ minRows: 5 }}
                              />
                            </Form.Item>
                          </div>
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

export default ClientRequest;
