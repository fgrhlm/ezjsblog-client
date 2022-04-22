import { useContext } from "react";
import { AppContext } from "../context";

const History = () => {
    const { postHistory, setNextId } = useContext(AppContext);

    const renderHistory = postHistory.map(p => 
        <p  onClick={()=>{setNextId(p.id)}} key={p.id}>
            {p.createdAt} :: {p.title}
        </p>
    )

    return(
        <div className="History">
            <div className="HistoryList">
                {postHistory && renderHistory}
            </div>
        </div>
    );
}

export default History;