import "./sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryIcon from '@mui/icons-material/History';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Login from "./login/Login"
import {Link} from "react-router-dom"

export default function Sidebar() {
    return (
        <div className = "sidebar_main">
            <div className="sidebar_wrapper">
                <h3 className="sidebar_brand">Activity Monitor</h3>
                <ul className="sidebar_list">
                    <Link to = "../activity" style={{ textDecoration: 'none', color: '#fff' }}>
                        <li className="sidebar_list_item">
                            <HomeOutlinedIcon className = "sidebar_list_item_icon"/><br/>
                            <span className="sidebar_list_item_text">Activity</span>
                        </li>
                    </Link>
                    <Link to = "../dashboard" style={{ textDecoration: 'none', color: '#fff' }}>
                        <li className="sidebar_list_item">
                            <HistoryIcon className = "sidebar_list_item_icon"/><br/>
                            <span className="sidebar_list_item_text">Dashboard</span>
                        </li>
                    </Link>
                    {/* <li className="sidebar_list_item">
                        <PermIdentityOutlinedIcon className = "sidebar_list_item_icon"/><br/>
                        <span className="sidebar_list_item_text">Profile</span>
                    </li>
                    <li className="sidebar_list_item">
                        <SettingsOutlinedIcon className = "sidebar_list_item_icon"/><br/>
                        <span className="sidebar_list_item_text">Settings</span>
                    </li> */}
                </ul>
                <div className="slidebar_logout">
                    {/* <LogoutOutlinedIcon className = "sidebar_list_item_icon"/><br/>
                    <span className="sidebar_list_item_text">Log out</span> */}
                    <Login/>
                </div>
            </div>
        </div>
    )
}
