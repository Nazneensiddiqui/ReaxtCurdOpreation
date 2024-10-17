import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Insert=()=>{
 const[input,setInput]=useState({});  //.......object form me data milega isliye {};

const handlInput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setInput(values=>({...values , [name]:value}));  //spreed opreater;
console.log(input);
}

// submit button ko handle karne ke liye ... isse data json server par chala jayega;
const handlSubmit=()=>{
    let api="http://localhost:3000/employees";
    axios.post(api,input).then((res)=>{
      console.log(res);
    toast.success("Save Data Successfully!!")
    })
}//input ke ander [name= empno] ye wahi name hota he jo json file mw hota he
    return(
        <>
        <div className="insert"  align="center">
        <h1>Insert Data</h1>
       Employee No.   :  <input type="text" name="empno" onChange={handlInput}/><br/><br/> 
        Enter Name    :  <input type="text" name="empname" onChange={handlInput}/><br/><br/>
        Enter Email   :  <input type="text" name="email" onChange={handlInput}/><br/><br/>
        Enter Contact :  <input type="text" name="contact" onChange={handlInput}/><br/><br/>
        Enter Salary  :  <input type="text" name="salary" onChange={handlInput}/><br/><br/>
        <button onClick={handlSubmit}>Save Data</button>
        </div>
        <ToastContainer/>
        </>
    )
}
export default Insert;