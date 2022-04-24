import { useContext } from "react";
import { AppContext } from "../context";

const HomeButton = () => {
    const { blogInfo } = useContext(AppContext);

    return(
        <div className="HomeButton">
            <div className="container">
                <h1>{blogInfo.name}</h1>
                <a href={`mailto:${blogInfo.contact}`}>{blogInfo.contact}</a>
            </div>
            <hr />
        </div>
    );
}

export default HomeButton;