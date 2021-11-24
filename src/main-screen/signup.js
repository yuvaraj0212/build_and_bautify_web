import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class SignUp extends React.Component {

    render(){
        return(
            <>
            <div class="wrapper h-100">
      <div class="d-flex flex-row login h-100">
         <div class="  logo-sec h-100">
            <div class="d-flex flex-row login h-100">
               <div class=" w-100 text-center"><img src="images/logo.png" alt="" srcset=""/></div>
            </div>
         </div>
         <div class=" d-flex  tile-sec w-100 h-100" >
            <div class="d-flex flex-row login h-100">
               <div class=" w-100 ">

   
   <div class="card m-auto p-3 pt-2 sign-card"  > 
   {/* style="border:none; width:70%!Important " */}
      <div class="container-fluid mt-3">
         <h3>Sign Up</h3>
         <div class="row mt-3 mb-4">
          <div class="col-6">
           <form>
             <div class="form-group">
               <label for="exampleFormControlInput1">Name</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="username"/>
             </div>
             <div class="form-group">
               <label for="exampleFormControlInput1">Gender</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="gender"/>
             </div>
             <div class="form-group">
               <label for="exampleFormControlInput1">Emp ID</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="employee id"/>
             </div>
             <div class="form-group">
               <label for="exampleFormControlInput1">Adhar Number</label>
               <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="aadhar number"/>
             </div>
         
            
             
           </form>
          </div>
          <div class="col-6">
           <div class="form-group">
             <label for="exampleFormControlInput1">Date of Birth</label>
             <input type="date" class="form-control" id="exampleFormControlInput1" />
           </div>
           <div class="form-group">
             <label for="exampleFormControlInput1">Mobile Number</label>
             <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile number"/>
           </div> 
          </div>
       
       </div>
          
       <a  class="btn-primary p-2 mt-5" style={{marginTop:"30px !important"}} >Submit</a>
       {/* style="margin-top:30px !important" */}
        </div>
    </div>

               </div>
            </div>
         </div>
      </div>
   </div>
            </>
        )
    }
}

export default SignUp;