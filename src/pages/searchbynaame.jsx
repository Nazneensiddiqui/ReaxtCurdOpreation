import { useState } from "react";
import axios from "axios";

const SearchByName = () => {
  const [ename, setEname] = useState("");
  const [mydata, setMydata] = useState([]);
  const [noRecordsFound, setNoRecordsFound] = useState(false); // New flag for showing "No records found"

  const handleChange = (e) => {
    const emplname = e.target.value;
    setEname(emplname);

    if (emplname.trim() === "") {
      // If input is empty, reset the data and noRecordsFound flag
      setMydata([]);
      setNoRecordsFound(false);
      return;
    }

    const api = `http://localhost:3000/employees`;
    axios.get(api).then((res) => {
        setMydata(res.data);
        console.log(res.data);

        // Check if no records match
        const matches = res.data.filter((key) => key.empname.toLowerCase().includes(emplname.toLowerCase()));
        setNoRecordsFound(matches.length === 0); // Set flag to true if no matches are found
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  };

  const ans = mydata.map((key) => {
    const str = key.empname.toLowerCase();
    const mystatus = str.includes(ename.toLowerCase());

    if (mystatus) {
      return (
        <tr key={key.empno}>
          <td>{key.empno}</td>
          <td>{key.empname}</td>
          <td>{key.email}</td>
          <td>{key.contact}</td>
          <td>{key.salary}</td>
        </tr>
      );
    }else{

      return null; // Return null for unmatched items
    }

  });

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 style={{ color: "green" }}>Search Employee Records!</h1>
      <input type="text" value={ename}  onChange={handleChange}  placeholder="Type Employee Name..." 
        style={{ padding: "10px", width: "300px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "20px" }} 
      />
      <hr size="5" color="green" style={{ margin: "20px 0" }} />

      {/* Only show table when data is found */}
      {ans.length > 0 ? (
        <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
          <thead style={{ backgroundColor: "#f8f9fa" }}>
            <tr>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Employee No</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Email</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Contact</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Salary</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
      ) : null}

      {/* Show "No records found" if no matching records are found and input is not empty */}
      {noRecordsFound && ename.trim() !== "" && (
        <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>No records found</p>
      )}
    </div>
  );
};

export default SearchByName;