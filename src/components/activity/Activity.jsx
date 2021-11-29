import "./activity.css";
import HistoryTable from "./HistoryTable";


export default function activity() {
    return (
        <div className = "activity_main">
            <div className="activity_wrapper">
                <HistoryTable/>
            </div>
        </div>
    )
}
