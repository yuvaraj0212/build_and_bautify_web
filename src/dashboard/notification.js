import React, { useEffect, useState } from "react";
import "../main-screen/style.css";
import { Link, useHistory } from "react-router-dom";
import { Badge, Modal } from "antd";
import MaterialTable from "material-table";
import "antd/dist/antd.css";
import { getDelNotifyction, getEnquiry } from "../url_helper";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useDispatch } from "react-redux";
import { delNotify } from "../redux/action/action";
import moment from "moment";
const { confirm } = Modal;
const Enquiry = () => {
  const history = new useHistory();
  // const [data, setData] = useState(NaN || '');
  const [enquiry, setEnquiry] = useState([]);
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
    getEnquiry().then((res) => {
      if (res.data.status === 200) {
        setEnquiry(res.data.result);
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
                alt="logo"
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
          <Breadcrumb.Item active>Notification</Breadcrumb.Item>
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
                  pdf: true,
                },
              }}
              columns={[
                { title: "Enquiry ID", field: "id" },
                { title: "Client Name", field: "userModel.name" },
                { title: "Mobile", field: "userModel.phone" },
                { title: "Email", field: "userModel.email" },
                { title: "Category", field: "category" },
                { title: "Qty", field: "quantity" },
                {
                  title: "createDate",
                  field: "createDate",
                  render: (rowData) =>
                    moment(rowData.createDate).format("DD/MM/YYYY hh:mm A"),
                },
              ]}
              data={enquiry}
              title="Enquiry "
            />
          </div>
          <div>
            {/* <div class="table-responsive ">
                        <table class="table table-bordered ">
                            <thead>
                                <tr>
                                    <th>Enquiry ID</th>
                                    <th>Client Name</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>Qty</th>
                                    <th>Complaint</th>
                                    {/* <th>Edit/ Delete</th> 
                                </tr>
                            </thead>
                            <tbody id="myTable">
                                {enquiry.length !== 0 ?
                                    enquiry.filter((item) => {
                                        if (search === '') {
                                            return item;
                                        } else if (item.userModel.name.toLowerCase().includes(search.toLowerCase())) {
                                            return item;
                                        } else if (item.userModel.phone.includes(search)) {
                                            return item;
                                        }
                                    }).map((val, index) => (
                                        <tr key={val.id}>
                                            <td>{val.id}</td>
                                            <td>{val.userModel.name}</td>
                                            <td>{val.userModel.phone}</td>
                                            <td>{val.userModel.email}</td>
                                            <td>{val.category}</td>
                                            <td>{val.quantity}</td>
                                            <td>{val.complaint}</td>

                                        </tr>
                                    )) : <tr><p className="text-center m-100 color-blue">No data found</p></tr>
                                }
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
