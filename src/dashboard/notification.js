import React, { useEffect, useState } from "react";
import '../main-screen/style.css';
import { Link, useHistory } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { notification, Divider, Modal, Button, Space } from 'antd';
import {
    ExclamationCircleOutlined, BellOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { deleteClient, getClient, getEnquiry } from "../url_helper";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
const { confirm } = Modal;
const Enquiry = () => {
    const history = new useHistory();
    const [search, setSearch] = useState('');
    const [enquiry, setEnquiry] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    console.log(enquiry);


    const fetchData = () => {
        // getClient().then((res) => {
        //     if (res.data.status === 200) {
        //         setData(res.data.result)
        //     }
        // });
        getEnquiry().then((res) => {
            if (res.data.status === 200) {
                setEnquiry(res.data.result)
            }
        });
    }

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
                    
                    </div>

                </div>
                <div class="nav-scroller py-1 mb-2">
                    <nav class="nav d-flex justify-content-end text-white bg-dark">

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Request
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item"  >Service/<br />Complaint/<br />support</a>
                                <a class="dropdown-item " >Product <br /> Request</a>

                            </div>
                        </div>
                        <a class="p-2 ">
                            Notification
                            {/* <span className="rounded-circle">{enquiry.length}</span> */}
                        </a>
                        <a class="p-2 ">Reward</a>

                    </nav>
                </div>
                <Breadcrumb>
                    <Breadcrumb.Item >
                        <Link to="/">
                            Login
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/dashboard">
                            Home
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Notification</Breadcrumb.Item>
                </Breadcrumb>
                <div class="container-fluid mt-3">
                    {/* <Link to="create-client"><a class="btn btn-primary float-right mb-2" >add</a></Link> */}
                    <h5>Search</h5>
                    <input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}></input>
                    <br />
                    <div class="table-responsive ">
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
                                    {/* <th>Edit/ Delete</th> */}
                                </tr>
                            </thead>
                            <tbody id="myTable">
                                {enquiry.length !== 0 ?
                                    enquiry.filter((item) => {
                                        if (search === '') {
                                            return item;
                                        } else if (item.userModel.name.toLowerCase().includes(search.toLowerCase())) {
                                            return item;
                                        }
                                    }).map((val,index) => (
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
                    </div>
                </div>
            </div>

        </>
    );
}


export default Enquiry;