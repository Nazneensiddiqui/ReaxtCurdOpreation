import { Link , Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        < Link to = "home">Home</Link>    ||
        < Link to = "insert">Insert Data</Link>     ||
        < Link to = "display">Display Data</Link>     ||
        < Link to = "search">Search Data</Link>     ||
        <Link to="searchbyname" > Search By name</Link> |
         <Link to="update" > Update</Link>     ||
        <hr color="red"/>
        <Outlet/>
        <hr color="blue"/>
        www.mycompany@.com
         </>
    )
}
export default Layout;