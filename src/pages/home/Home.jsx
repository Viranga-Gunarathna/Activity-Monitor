import Sidebar from "../../components/sidebar/Sidebar";
import Activity from "../../components/activity/Activity";
import "./home.css"



export default function Home () {
    return (
        <div className = "home_container">
            <Sidebar/>
            <Activity/>
        </div>
    )
}