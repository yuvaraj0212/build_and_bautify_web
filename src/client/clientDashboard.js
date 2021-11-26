import React, { useEffect, useState } from "react";
import '../main-screen/style.css';
import { Link, useHistory } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { Modal, Select, Form, Input, Button, notification } from "antd";

import {
  ExclamationCircleOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { createClientEnquiry, deleteClient, getClient } from "../url_helper";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import TextArea from "rc-textarea";
const { confirm } = Modal;
const { Option } = Select;
const ClientDashboard = () => {
  const history = useHistory();
  const handlesignup = (value) => {
    const id = sessionStorage.getItem("clientId");
    console.log(id);
    value.clientId = id;
    console.log(value);
    try {
      createClientEnquiry(value).then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          notification.success({
            message: res.data.message,
            description: 'This feature has been updated later!',
          })
          document.getElementById('enquiryForm').reset()
          // history.push("/client-dashboard");

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
  };





  return (
    <>
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
                  {/* style="border:none; width:70%!Important " */}
                  <div class="container-fluid mt-3">
                    <h3>Client Page</h3>
                    <Form onFinish={handlesignup} id='enquiryForm'>
                      <div className="form-group mt-4">
                        <label>New Enquiry</label>
                        <Form.Item
                          name="enquiry"
                          rules={[
                            {
                              required: true,
                              message:
                                'Please input your enquiry!',
                            },
                          ]}>
                          <Select placeholder="select your type of customer">
                            <Option value="Category">Category</Option>
                            <Option value="Product">Product</Option>
                            <Option value="Quantity">Quantity</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="form-group mt-4">
                        <label>Support|Service|Complaint</label>
                        <Form.Item
                          name="complaint"
                          rules={[
                            {
                              required: true,
                              message:
                                'Please input your Complaint!',
                            },
                          ]}>
                          <Select placeholder="select your type of customer">
                            <Option value="repair & maintenance">repair & maintenance</Option>
                            <Option value="Installation">Installation</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="form-group mt-4">
                        <label>Other</label>
                        <Form.Item
                          name="other"
                          rules={[
                            {
                              required: true,
                              message:
                                'Please input your other!',
                            },
                          ]}>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Other"
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
                            className="form-control"
                            placeholder="Comments"
                            autoSize={{ minRows: 4, }}
                          />
                        </Form.Item>
                      </div>
                      <div className="form-group">
                        <button type='submit' class="btn-primary p-2 form-control" >Submit</button>
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
}


export default ClientDashboard;