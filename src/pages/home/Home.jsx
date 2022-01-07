import Sidebar from "../../components/sidebar/Sidebar";
import Activity from "../../components/activity/Activity";
import Dashboard from "../../components/dashboard/Dashboard";
// import Profile from "../../components/profile/Profile";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import "./home.css"

export default function Home () {
    return (
        <Router>
            <div className = "home_container">
                <Sidebar/>
                <Routes>
                    <Route path = "/activity" element = {<Activity/>}/>
                    <Route path = "/Dashboard" element = {<Dashboard/>}/>
                </Routes>
            </div>
        </Router>
    )
}