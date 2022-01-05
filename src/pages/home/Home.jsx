import Sidebar from "../../components/sidebar/Sidebar";
import Activity from "../../components/activity/Activity";
import Dashboard from "../../components/dashboard/Dashboard";

import "./home.css"



export default function Home () {
    return (
        <div className = "home_container">
            <Sidebar/>
            <Activity/>
            {/* <Dashboard/> */}
        </div>
    )
}