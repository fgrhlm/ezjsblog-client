import { useContext } from "react";
import { AppContext } from "../context";

import ReactMarkdown from "react-markdown";

const Post = props => {
    const { post } = useContext(AppContext);

    return(
        <div className="Post">
            <div className="PostInfo">
                <h1>{post.title}</h1>
                <h6>Posted: {post.updatedAt}</h6>
            </div>
            <hr />
            <ReactMarkdown className="PostBody" children={post.body} />
            <hr />
        </div>
    );
}

export default Post;