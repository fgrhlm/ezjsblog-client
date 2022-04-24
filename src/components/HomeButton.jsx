import { useContext } from "react";
import { AppContext } from "../context";

const HomeButton = () => {
    const { blogInfo } = useContext(AppContext);

    return(
        <div className="HomeButton">
            <h1>{blogInfo.name}</h1>
            <a href={`mailto:${blogInfo.contact}`}>{blogInfo.contact}</a>
            <hr />
        </div>
    );
}

export default HomeButton;