import "./dashboard.css"
import Top5 from "./Top5"
import Category from "./Category"

export default function Dashboard() {
    return (
        <div className = "dashboard_main">
            <div className="dashboard_wrapper"> 
                <Top5/>
                <Category/>
            </div>
        </div>
    )
}
