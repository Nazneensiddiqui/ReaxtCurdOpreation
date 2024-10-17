import { useState , useEffect } from "react";
import axios from "axios";

const Display=()=>{
    const[empData, setempdata]=useState([]);
    const loadData=()=>{
        let url= "http://localhost:3000/employees";
        axios.get(url).then((res)=>{
          console.log(res.data);
          setempdata(res.data)
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const ans=empData.map((key)=>{
        return(
            <>
            <tr border="1px" width="1000px" align="center" fontWidth="2px" bgcolor="lightblue" >
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
                <td>{key.salary}</td>
            </tr>
            </>
             )
    })

    return(
        <>
        <h1>Display Data</h1>
        <table border="1px" width="1000px" align="center" >
            <tr border="1px" width="1000px" align="center" fontWidth="2px" bgcolor="pink">
                <th>Employee No.</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Salary</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;