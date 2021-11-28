import "./sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryIcon from '@mui/icons-material/History';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Sidebar() {
    return (
        <div className = "sidebar_main">
            <div className="sidebar_wrapper">
                <h3 className="sidebar_brand">Activity Monitor</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item">
                        <HomeOutlinedIcon className = "sidebar_list_item_icon"/><br/>
                        <span className="sidebar_list_item_text">Home</span>
                    </li>
                    <li className="sidebar_list_item">
                        <HistoryIcon className = "sidebar_list_item_icon"/><br/>
                        <span className="sidebar_list_item_text">Activities</span>
                    </li>
                    <li className="sidebar_list_item">
                        <PermIdentityOutlinedIcon className = "sidebar_list_item_icon"/><br/>
                        <span className="sidebar_list_item_text">Profile</span>
                    </li>
                    <li className="sidebar_list_item">
                        <SettingsOutlinedIcon className = "sidebar_list_item_icon"/><br/>
                        <span className="sidebar_list_item_text">Settings</span>
                    </li>
                </ul>
                <div className="slidebar_logout">
                    <LogoutOutlinedIcon className = "sidebar_list_item_icon"/><br/>
                    <span className="sidebar_list_item_text">Log out</span>
                </div>
            </div>
        </div>
    )
}
