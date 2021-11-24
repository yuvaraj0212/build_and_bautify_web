import React,{useEffect,useState} from "react";
import  './style.css';
import { Link ,useHistory } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import {  notification,Divider ,Modal, Button, Space } from 'antd';
import Axios from 'axios';
import {
ExclamationCircleOutlined 
  } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { confirm } = Modal;

 const Dashboard =()=> {
    
       
    const [data,setData]=useState([]);

    useEffect(() => {
       fetchData();
    }, []);




 const fetchData=()=>{
        Axios({
            method: 'get',
            url: 'http://localhost:8080/get-client'
        }).then((res) => {
            if (res.data.status === 200) {
              setData(res.data.result)
               
                // window.location.href = "/dashboard" // history.push("/dashboard");
               
            } else {
            }
        })
  }

  const showConfirm=(event,id)=>{
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

  const handleDelete=(id)=>{
    Axios({
        method: 'delete',
        url: 'http://localhost:8080/get-client',id
    }).then((res) => {
        if (res.data.status === 200) {
            notification.success({
                message:"hvku",
                description: 'This feature has been updated later!',
            });
            fetchData();
        } else {
            notification.error({
                message:"hvku",
                description: 'This feature has been updated later!',
            });
        }
    })

   
}

const handleEdit = (event,id) => {
    window.sessionStorage.setItem("id", id);
    window.location.href = `/edit-client/${id}`
  };
  


 

    return (
        <>
         <div class="wrapper h-100">
     <div class="container-fluid">
      <div class="row flex-nowrap justify-content-between align-items-center">
         <div class="col-4 pt-1">
           <img src="images/logo.png" alt="" srcset="" style={{width:"125px"}}/>
           {/* style="width:125px" */}
         </div>
         <div class="col-4 text-center">
           
         </div>
         <div class="col-4 d-flex justify-content-end align-items-center">
           <a class="text-muted" href="#">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
           </a>
           <Link to="/signup"><a class="btn btn-sm btn-outline-secondary" >Sign up</a></Link>
         </div>
       </div>
     
     </div>
     <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-end text-white bg-dark">
        
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Request
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item"  >Service/<br/>Complaint/<br/>support</a>
            <a class="dropdown-item " >Product <br/> Request</a>
            
          </div>
        </div>
        <a class="p-2 ">Notification</a>
        <a class="p-2 ">Reward</a>
       
      </nav>
    </div>
  
<div class="container-fluid mt-3">
<Link to="create-client"><a  class="btn btn-primary float-right mb-2" >add</a></Link>
   <h5>Search</h5> 
   <input class="form-control" id="myInput" type="text" placeholder="Search.."></input>
   <br/>
   <table class="table table-bordered">
     <thead>
       <tr>
         <th>Cust ID</th>
         <th>Name</th>
        
         <th>Email</th>
         <th>Type</th>
         <th>Product</th>
         <th>Category</th>
         <th>Qty</th>
         <th>Address</th>
         <th>Mobile</th>
         <th>Edit/ Delete</th>
       </tr>
     </thead>
     <tbody id="myTable">
         {
            data.map((val)=>(
                <tr>
                <td>{val.id}</td>
                <td>{val.customername}</td>
               
                <td>{val.email}</td>
                <td>{val.type}</td>
                <td>{val.product}</td>
                <td>{val.category}</td>
                <td>{val.quantity}</td>
                <td>{val.address}</td>
                <td>{val.phone}</td>
                <td>
                    <Button onClick={(e) =>handleEdit(e,val.id)}> Edit</Button>
              
                <Divider type="vertical" />
                <Button onClick={(e) =>showConfirm(e,val.id)}> Delete</Button>
                </td>
                </tr>
            ))
         }
       <tr>
         {/* <td>09343</td>
         <td>Doe</td>
         <td>982738297</td>
         <td>Joe@gmail.com</td>
         <td>Stage 1</td>
         <td>Eletrician</td>
         <td>Ralifan</td>
         <td>3</td>
         <td>34, Gandhi nagar, Anna nagar, Chennai</td>
         <td>Completed</td>
         <td>Edit / Delete</td> */}
       </tr>
       </tbody>
       </table>
   </div>
   </div>
   {/* <Table columns={this.state.columns} dataSource={this.state.data} /> */}
   {/* <Modal title="Basic Modal" visible={this.state.open} onOk={this.handleDelete} onCancel={this.handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
        </>
        );
    }

  
  export default Dashboard;