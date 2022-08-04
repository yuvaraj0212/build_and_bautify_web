import React, { useEffect, useState } from "react";
import "../main-screen/style.css";
import { Link, useHistory } from "react-router-dom";
import { Badge, Form, Input, Modal } from "antd";
import MaterialTable from "material-table";
import "antd/dist/antd.css";
import {
  getDelNotifyction,
  getDelServiceNotifyction,
  getService,
  updateClientService,
} from "../url_helper";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useDispatch } from "react-redux";
import { delNotify, delServiceNotify } from "../redux/action/action";

import { ExclamationCircleOutlined, BellOutlined } from "@ant-design/icons";
import moment from "moment";
const { confirm } = Modal;

const Service = () => {
  const [form] = Form.useForm();
  const [iD, setID] = useState();
  const [visible, setVisible] = useState(false);
  const [service, setService] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    getDelServiceNotifyction().then((res) => {
      if (res.data.status === 200) {
        dispatch(delServiceNotify(res.data.result));
      }
    });
    getService().then((res) => {
      if (res.data.status === 200) {
        setService(res.data.result);
      }
    });
  };
  const handleEdit = (val) => {
    console.log(val);

    var bodyFormData = new FormData();
    bodyFormData.append("id", iD);
    bodyFormData.append("desc", val.desc);
    bodyFormData.append("status", 1);
    updateClientService(bodyFormData);
    handleCancel();
    fetchData();
  };
  const showConfirm = (event, val) => {
    console.log(val);
    showModal();
    setID(val.id);
    // confirm({
    //   title: "Do you Want to delete these items?",
    //   // icon: <ExclamationCircleOutlined />,
    //   content: "Some descriptions",

    //   onOk() {
    //     handleEdit(val);
    //   },
    //   onCancel() {},
    // });
  };
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };
  return (
    <>
      <Modal
        visible={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        title="Add Your Comments "
      >
        <Form form={form} onFinish={handleEdit}>
          {/* <Form.Item name="status">
            <Input hidden value={1} />
          </Form.Item> */}
          <label> Type your comment :</label>
          <Form.Item
            name="desc"
            // label="Type your comment"
            rules={[
              { required: true, message: "Please input your Description!" },
            ]}
          >
            <Input.TextArea allowClear />
          </Form.Item>
        </Form>
      </Modal>
      <div class="container-fluid  wrapper h-100">
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
        <div class=" nav-scroller py-1 mb-2">
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
          <Breadcrumb.Item>
            <Link to="/">Login</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/dashboard">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Service</Breadcrumb.Item>
        </Breadcrumb>
        <div class="container-fluid mt-3">
          {/* <Link to="create-client"><a class="btn btn-primary float-right mb-2" >add</a></Link> */}
          {/* <h5>Search</h5>
                    <div className='d-flex'>
                        <input class="form-control " id="myInput" type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}></input>
                        <button type="button" class="btn btn-success mx-2 px-5" disabled>Export</button>
                         
                    </div>
                    <br /> */}
          <div style={{ maxWidth: "100%" }}>
            <MaterialTable
              options={{
                // ..other options
                exportButton: {
                  csv: true,
                },
                actionsColumnIndex: -1,
              }}
              columns={[
                { title: "Service ID", field: "id" },
                {
                  title: "Bill",
                  field: "imageURL",
                  render: (item) => (
                    // const logo =
                    // require(`../assets/images/${item.filename}`).default;
                    <a href={item.imageURL} target="_blank" download>
                      <img
                        src={item.imageURL}
                        alt={item.filename}
                        border="3"
                        height="100"
                        width="100"
                      />
                    </a>
                  ),
                },
                { title: "Customer Name", field: "userModel.name" },
                { title: "Mobile", field: "userModel.phone" },
                // { title: "Email", field: "userModel.email" },
                { title: "Product", field: "productName" },
                { title: "Bill No", field: "billno" },
                {
                  title: "Status",
                  field: "status",
                  render: (rowData) => {
                    switch (rowData.status) {
                      case 0:
                        return (
                          <button type="button" class="btn btn-success">
                            New
                          </button>
                        );
                        break;
                      default:
                        return (
                          <button type="button" class="btn btn-light">
                            Visited
                          </button>
                        );

                        break;
                    }
                  },
                },

                { title: "Description", field: "desc" },
                {
                  title: "createDate",
                  field: "createDate",
                  render: (rowData) =>
                    moment(rowData.createDate).format("DD/MM/YYYY hh:mm A"),
                },
              ]}
              data={service}
              title="Service "
              actions={[
                // {
                //   icon: "add",
                //   tooltip: "Add User",
                //   isFreeAction: true,
                //   onClick: (event) => useHistory.push("/create-client"),
                // },
                // {
                //   icon: "delete",
                //   tooltip: "Delete User",
                //   // onClick: (event, rowData) => showConfirm(event, rowData.id),
                // },
                {
                  icon: "edite",
                  tooltip: "edite User",
                  onClick: (e, val) => showConfirm(e, val),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
