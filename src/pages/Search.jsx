import { useState } from "react";
import axios from "axios";

const Search=()=>{
    const[eno, setEno]=useState("");
    const[mydata, setMydata]=useState([]);

    const handlSearch=()=>{
        let api=`http://localhost:3000/employees/?empno=${eno}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data)
        })
    }

    const ans = mydata.map((key)=>{
        return(
        <>
        <h1>Employee No. : {key.empno}</h1>
        <h2>Employee Name : {key.empname}</h2>
        <h2>Employee Email : {key.email}</h2>
        <h2>Employee Contact : {key.contact}</h2>
        <h2>Employee Salary : {key.salary}</h2>
        </>
        )
    })


    return(
        <>
       <h1>Searching Employee Data</h1> 
       Enter Employee No : <input type="text" value={eno} onChange={(e)=>{setEno(e.target.value)}}/>
       <button onClick={handlSearch}>search</button>
   <hr size="5" color="green"/>
        { ans }
        </>
    )
}
export default Search;