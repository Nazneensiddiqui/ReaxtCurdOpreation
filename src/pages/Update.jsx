import { useState, useEffect } from "react";
import axios from "axios";
import editimg from  "../images/edit.png";
import delimg from "../images/delet.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";


const Update=()=>{
 const [mydata, setMydata]=useState([]);
 const navigate= useNavigate();

 const loadData=()=>{
    let api="http://localhost:3000/employees";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);

const myRecDel=(id)=>{
    let api=`http://localhost:3000/employees/${id}`
    axios.delete(api).then((res)=>{
         message.error("Your record Succesfully deleted!!!");
        loadData();
    })
}

const myEdit=(id)=>{
     navigate(`/editrec/${id}`)
}

 const ans=mydata.map((key)=>{
      return(
        <>
          <tr border="1px" width="1000px" align="center" fontWidth="2px" bgcolor="lightblue" >
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
                <td>{key.salary}</td>
        
            <td>

                <a href="#" onClick={()=>{myEdit(key.id)}}>
                   <img src={editimg} width="30" height="30" /> 
                 </a>
                 
                 <a  href="#" onClick={()=>{myRecDel(key.id)}}>
                 <img src={delimg} width="30" height="30" /> 
                 </a>
            </td>

          </tr>
        
        </>
      )
 })

    return(
        <>
          <h1> Update Employee Records</h1>
          <table border="1px" width="1000px" align="center" >
            <tr border="1px" width="1000px" align="center" fontWidth="2px" bgcolor="pink">
                <th>Employee No.</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Update;