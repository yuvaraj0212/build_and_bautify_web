import React, { useEffect, useState } from "react";
import '../main-screen/style.css';
import { Link, useHistory } from 'react-router-dom';
import {Modal, Select, Form, Input, Button, notification } from 'antd';
import {
  ExclamationCircleOutlined, BellOutlined
} from '@ant-design/icons';
import MaterialTable from "material-table";
import 'antd/dist/antd.css';
import { deleteClient, getClient, getEnquiry, getNotifyction } from "../url_helper";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { connect, useDispatch, useSelector } from "react-redux";
import { AddNotify, getNotify, pushNotify } from "../redux/action/action";


import 'antd/dist/antd.css';
import { createClientEnquiry, } from "../url_helper";
import TextArea from "rc-textarea";

const { confirm } = Modal;

function Dashboard(props) {
  const history = new useHistory();
  const [CountData, setCountData] = useState(0);
  const [data, setData] = useState([]);
  // const count = useSelector(state => state.notifycation.notify);
  const count = props.notify
  const dispatch = useDispatch();

  console.log("count",props);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCountData(CountData + 1);
  //     getNotifyction().then((res) => {
  //       if (res.data.status === 200) {
  //         dispatch(AddNotify(res.data.result));
  //       }
  //     }); 
  //   }, 10000);

  // });
  const fetchData = () => {

    console.log("props",props);
    getClient().then((res) => {
      if (res.data.status === 200) {
        setData(res.data.result);
      }
    });
    getNotifyction().then((res) => {
      if (res.data.status === 200) {
        // setCountData(res.data.result);
        dispatch(AddNotify(res.data.result));
      }
    });

  }
  useEffect(() => {
    console.log("1");
    fetchData();
  }, []);

  
  // useEffect(() => {
  //   console.log("props",props);
  //   fetchData();
  //   console.log("CountData "+CountData," count "+count);
  //   if (count !== CountData ) {
  //     getNotifyction().then((res) => {
  //       if (res.data.status === 200) {
  //         dispatch(AddNotify(res.data.result));
  //       }
  //     })
  //   }
  // }, [props.counts]);



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
            </div>
            <div class="col-4 text-center">

            </div>
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
                { title: "Handled", field: 'handeld' },
              ]}
              data={data}
              title="Admin Dashboard "
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
          
        </div>
      </div>
    </>
  );
}

const mapStatetopProps=(props)=>{
  return{
    notify:props.notifycation.notify
  }
}

export default connect(mapStatetopProps) (Dashboard);




// ############# dashboard component ################



// const { Option } = Select;

// export const ClientRequest = () => {
//   const dispatch = useDispatch();
//   console.log();
//  const props= useSelector(state => state.notifycation.notify)
//   const handlesignup = (value) => {
//     const id = sessionStorage.getItem("clientId");
//     value.clientId = id;
//     let val = {
//       clientId: "1",
//       complaint: "repair & maintenance",
//       comment: "gfgfdgvfgvb",
//       product: "Product",
//       quantity: "quantity",
//       category: "category",
//       other: "2wdfdf"
//     };
//     try {
//       createClientEnquiry(val).then((res) => {
//         // notify();
//         if (res.data.status === 200) {
//           console.log(props);
//           getNotifyction().then((res) => {
//             if (res.data.status === 200) {
//               console.log(res.data.result);
//               dispatch(AddNotify(res.data.result));
//             }
//           });
//           notification.success({
//             message: res.data.message,
//             description: 'This feature has been updated later!',
//           });
//           // document.getElementById('enquiryForm').reset()
//           // history.push("/client-dashboard");

//         } else {
//           notification.warn({
//             message: res.data.message,
//             description: 'This feature has been updated later!',
//           })
//         }
//       });

//     } catch (error) {
//       console.error(error)
//       notification.error({
//         message: error.message,
//         description: 'This feature has been updated later!',
//       })
//     }
//   };
//   const categoryTypes = [
//     "Steel & cement",
//     "Electrical",
//     "Sanitory|Tile|Plumbing",
//     "paints",
//     "Water proofing",
//     "Playwoods|Glasses",
//     "Kitchen Items",
//     "Water treatment",
//     "Mosqito slveeas",
//     "Hardware Tools"
//   ]

//   const style = {
//     color: '#fff',
//     backgroundColor: '#344e89',
//     borderRadius: '5px',
//   }

//           console.log(props);

//   return (
//     <>
//       <div class="wrapper h-100">
//         <div class="d-lg-flex flex-lg-row login h-100 mt-1">
//           <div class="  logo-sec h-lg-100">
//             <div class="d-flex flex-row login h-100">
//               <div class=" w-100 text-center">
//                 <Link to="/">
//                   <img src="images/logo.png" alt="" srcset="" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div class=" d-flex  tile-sec w-100 h-100     ">
//             <div class="d-flex flex-row login h-lg-100">
//               <div class=" w-100 mt-5 ">


//                 <div class="card m-auto p-3 mt-5 pt-2 sign-card"  >
//                   <div class="container-fluid mt-3">
//                     <h3>Client Page</h3>
//                     <Form onFinish={handlesignup} id='enquiryForm'>
//                       <div className="row">

//                         <div className="col-lg-6" >
//                           <div className="form-group">
//                             <label>Product Name 1</label>
//                             <Form.Item
//                               name="product"
//                               // label="Product Name"
//                               rules={[
//                                 {
//                                   required: true,
//                                   message: "Please input product name!",
//                                 },
//                               ]}

//                             >
//                               <Input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="product name"
//                               />
//                             </Form.Item>
//                           </div>
//                           <div className="form-group">
//                             <label>Category</label>
//                             <Form.Item
//                               name="category"
//                               rules={[{ required: true, message: 'Please select Category!' }]}
//                             >
//                               <Select mode="multiple" placeholder="select your Category">
//                                 {/* <Option value="1">1</Option> */}
//                                 {categoryTypes.map((item) => {
//                                   return <Option key={item} value={item}>{item}</Option>
//                                 })}
//                               </Select>
//                             </Form.Item>
//                           </div>

//                           <div className="form-group">
//                             <label>Quantity</label>
//                             <Form.Item
//                               name="quantity"
//                               // label="Quantity"
//                               rules={[
//                                 {
//                                   required: true,
//                                   message: "Please input your quantity!",
//                                 },
//                               ]}
//                             >
//                               <Input
//                                 className="form-control"
//                                 type="number"
//                                 placeholder="Quantity"
//                               />
//                             </Form.Item>
//                           </div>

//                         </div>
//                         <div className="col-lg-6" >

//                           {/* <div className="form-group ">
//                             <label>Support|Service|Complaint</label>
//                             <Form.Item
//                               name="complaint"
//                               rules={[
//                                 {
//                                   required: true,
//                                   message:
//                                     'Please input your Complaint!',
//                                 },
//                               ]}>
//                               <Select placeholder="select your type of customer">
//                                 <Option value="repair & maintenance">repair & maintenance</Option>
//                                 <Option value="Installation">Installation</Option>
//                               </Select>
//                             </Form.Item>
//                           </div> */}
//                           <div className="form-group">
//                             <label>Product Name 2</label>
//                             <Form.Item
//                               name="product2"
//                               // label="Product Name"
//                               rules={[
//                                 {
//                                   required: false,
//                                   message: "Please input product name!",
//                                 },
//                               ]}

//                             >
//                               <Input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="product name"
//                               />
//                             </Form.Item>
//                           </div>
//                           <div className="form-group ">
//                             <label>Other</label>
//                             <Form.Item
//                               name="other"
//                               rules={[
//                                 {
//                                   required: false,
//                                   message:
//                                     'Please input your other!',
//                                 },
//                               ]}>
//                               <Input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="Other"
//                               />
//                             </Form.Item>
//                           </div>
//                           <div className="form-group">
//                             <label>comment</label>
//                             <Form.Item
//                               name="comment"
//                               // label="Comment"
//                               rules={[
//                                 {
//                                   required: true,
//                                   message: "Please input your comment!",
//                                 },
//                               ]}
//                             >
//                               <TextArea
//                                 className="form-control "
//                                 placeholder="Comments"
//                                 autoSize={{ minRows: 5, }}
//                               />
//                             </Form.Item>
//                           </div>

//                         </div>
//                         <div className="form-group">
//                           <button type='submit' style={style} class="p-2 form-control" >Submit</button>
//                         </div>
//                       </div>
//                     </Form>
//                     {/* style="margin-top:30px !important" */}
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

