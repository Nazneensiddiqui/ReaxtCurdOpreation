import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

const EditData=()=>{
    const {myid} =useParams();
    const[mydata , setMydata]=useState({});  // mydata me value object ke fome me ayegi {}
    
    
 const loadData=()=>{
let api=`http://localhost:3000/employees/${myid}`;  //id ko target kiya he
axios.get(api).then((res)=>{
console.log(res.data);
setMydata(res. data)
})
} 

useEffect(()=>{
    loadData();
}, [])  
 
const handlInput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setMydata(values=>({...values , [name]:value}));  //spreed opreater
console.log(mydata)
}
    
 const handlSubmit=()=>{
    let api=`http://localhost:3000/employees/${myid}`; 
    axios.put(api , mydata).then((res)=>{
        message.success("Data succesfully updated!!!");
        setMydata({
            empno:"",
            empname:"",
            email:"",
            contact:"",
            salary:""
        })

    })
 }   
    
    
    return(

        <>
        <div className="editdata" align="center" >
        <h2> Edit Employee Redcords </h2>
        Edit Employee No. : <input type="text" name="empno" value={mydata.empno} onChange={handlInput}/><br/><br/>
        Edit Name : <input type="text" name="empname" value={mydata.empname} onChange={handlInput}/><br/><br/>
        Edit Email : <input type="text" name="email" value={mydata.email} onChange={handlInput}/><br/><br/>
        Edit Contact : <input type="text" name="contact" value={mydata.contact} onChange={handlInput}/><br/><br/>
        Edit Salary : <input type="text" name="salary" value={mydata.salary} onChange={handlInput}/><br/><br/>
        <button onClick={handlSubmit}>Update</button>
        </div>
        </>
    )
}
export default EditData;