import React, { useEffect, useState } from "react";
import "../main-screen/style.css";
import { Link } from "react-router-dom";
import { Badge, Modal } from "antd";
import MaterialTable from "material-table";
import "antd/dist/antd.css";
import { getDelNotifyction, getService } from "../url_helper";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useDispatch } from "react-redux";
import { delNotify } from "../redux/action/action";
import moment from "moment";
// const { confirm } = Modal;

const Service = () => {
  const [service, setService] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    getDelNotifyction().then((res) => {
      if (res.data.status === 200) {
        dispatch(delNotify(res.data.result));
      }
    });
    getService().then((res) => {
      if (res.data.status === 200) {
        setService(res.data.result);
      }
    });
  };

  return (
    <>
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
                  title: "createDate",
                  field: "createDate",
                  render: (rowData) =>
                    moment(rowData.createDate).format("DD/MM/YYYY hh:mm A"),
                },
              ]}
              data={service}
              title="Service "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
