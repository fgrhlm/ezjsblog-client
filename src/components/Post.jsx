import ReactMarkdown from "react-markdown";

const Post = props => {
    return(
        <div className="Post">
            <div className="PostInfo">
                <h1>{props.data.title}</h1>
                <h6>Posted: {props.data.updatedAt}</h6>
            </div>
            <hr />
            <ReactMarkdown className="PostBody" children={props.data.body} />
        </div>
    );
}

export default Post;