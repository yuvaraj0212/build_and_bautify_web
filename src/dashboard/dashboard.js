import React, { useEffect, useState } from "react";
import '../main-screen/style.css';
import { Link, useHistory } from 'react-router-dom';
import { notification, Divider, Modal, Button, Space } from 'antd';
import {
  ExclamationCircleOutlined, BellOutlined
} from '@ant-design/icons';
import MaterialTable from "material-table";
import 'antd/dist/antd.css';
import { deleteClient, getClient, getEnquiry, getNotifyction } from "../url_helper";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useDispatch, useSelector } from "react-redux";
import { getNotify } from "../redux/action/action";
const { confirm } = Modal;
const Dashboard = () => {
  const history = new useHistory();
  const [data, setData] = useState([]);
  const [enquiry, setEnquiry] = useState([]);
  const count = useSelector((state) => state.notifycation.notify)
  const dispatch = useDispatch();
 
  useEffect(() => {
    fetchData();
  }, []);
 
  console.log(count);
  const fetchData = () => {
    getClient().then((res) => {
      if (res.data.status === 200) {
        setData(res.data.result);
      }
    });
    getNotifyction().then((res) => {
      if (res.data.status === 200) {
        dispatch(getNotify(res.data.result));
      }
    });
    
    // getEnquiry().then((res) => {
    //   if (res.data.status === 200) {
    //     setEnquiry(res.data.result)
    //   }
    // });
  }

  const showConfirm = (event, id) => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        handleDelete(id)
      },
      onCancel() {
      },
    });
  }

  const handleDelete = (id) => {
    const data = { clientId: id };
    deleteClient(data).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        notification.success({
          message: res.data.message,
          description: 'This feature has been updated later!',
        });
        fetchData();
      } else {
        notification.error({
          message: "hvku",
          description: 'This feature has been updated later!',
        });
      }
    })


  }

  const handleEdit = (event, val) => {
    sessionStorage.setItem("edite", JSON.stringify(val));
    history.push(`/edit-client/${val.id}`);
    // window.location.href = `/edit-client/${val.id}`
  };





  return (
    <>
      <div class="wrapper h-100">
        <div class="container-fluid">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
              <img src="images/logo.png" alt="" srcset="" style={{ width: "125px" }} />
              {/* style="width:125px" */}
            </div>
            <div class="col-4 text-center">

            </div>
            {/* <div class="col-4 d-flex justify-content-end align-items-center">
              <a class="text-muted" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
              </a>
              <Link to="/signup"><a class="btn btn-sm btn-outline-secondary" >Sign up</a></Link>
            </div> */}
          </div>

        </div>



        <div class="nav-scroller py-1 mb-2">
          <nav class="nav px-3 d-flex justify-content-end text-white bg-dark">
            <Link to="/enquiry" class="icon p-2">
              <div class="txt">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" fill="currentColor" class=" bi bi-bell " viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg></div>
              {count > 0 ? <div class="txt1">{count} </div> : ''}
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
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div class="container-fluid mt-3">
          {/* <Link to="/create-client"><a class="btn btn-primary float-right " >add</a></Link> */}
          <div style={{ maxWidth: "100%" }}>
            <MaterialTable
              options={{
                // ..other options
                exportButton: {
                  csv: true,
                  pdf: true
                },
                actionsColumnIndex: -1
              }}
              columns={[
                { title: "Cust ID", field: "id" },
                { title: "Name", field: "customername" },
                { title: "Mobile", field: "phone", },
                { title: "Category", field: "category" },
                { title: "Qty", field: "quantity" },
                { title: "Description", field: "comment", },
                { title: "Handled", field: 'customername' },
              ]}
              data={data}
              title="Admin Dashboard "
              // editable={{
              //   onRowAdd: () => { history.push('/create-client') }
              // }}
              actions={[
                {
                  icon: 'add',
                  tooltip: 'Add User',
                  isFreeAction: true,
                  onClick: (event) => history.push('/create-client')
                },
                {
                  icon: 'delete',
                  tooltip: 'Delete User',
                  onClick: (event, rowData) => showConfirm(event, rowData.id)
                },
                {
                  icon: 'edite',
                  tooltip: 'edite User',
                  onClick: (e, val) => handleEdit(e, val)
                }
              ]}
            />
          </div>
          <div>
            {/*<h5>Search</h5>
          <div className='d-flex'>
            <input class="form-control   mr-4" id="myInput" type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}></input>
            
              <button type="button" class="btn btn-success mx-2 " disabled>Export</button>
              <Link to="/create-client">
                <button type="button" class="btn btn-secondary px-5">Add</button>
              </Link>
            
          </div>
          <br />
           <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Cust ID</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  {/* <th>Email</th> */}
            {/* <th>Type</th>
         <th>Product</th> 
                  <th>Location</th>
                  <th>Category</th>
                  <th>Qty</th>
                  <th>Edit/ Delete</th>
                </tr>
              </thead>
              <tbody id="myTable">
                {data.length !== 0 ?
                  data.filter((item) => {
                    if (search === '') {
                      return item;
                    } else if (item.customername.toLowerCase().includes(search.toLowerCase())) {
                      return item;
                    }
                  }).map((val) => (
                    <tr key={val.id}>
                      <td>{val.id}</td>
                      <td>{val.customername}</td>
                      <td>{val.phone}</td>
                      <td>{val.address}</td>
                      <td>{val.category}</td>
                      <td>{val.quantity}</td>

                      {/* <td>{val.email}</td>
                <td>{val.type}</td>
                  <td>{val.product}</td> 


                      <td>
                        <Button onClick={(e) => handleEdit(e, val)}> Edit</Button>

                        <Divider type="vertical" />
                        <Button onClick={(e) => showConfirm(e, val.id)}> Delete</Button>
                      </td>
                    </tr>
                  )) : <tr><p className="text-center m-100 color-blue">No data found</p></tr>
                }
                <tr>
                  
                </tr>
              </tbody>
            </table>
          </div> */}
          </div>
        </div>
      </div>

    </>
  );
}


export default Dashboard;