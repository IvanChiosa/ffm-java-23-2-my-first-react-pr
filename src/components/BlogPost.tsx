import React from "react";
import Comment from "./CommentProps.tsx";


export interface BlogPostProps {
    title: string;
    content: string;
    author: string;
    date: string;
    comments: string[];
}
const BlogPost: React.FunctionComponent<BlogPostProps> = ({ title, content, author, date, comments }) => {
    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <p>{content}</p>
            <p>
                <strong>Author:</strong> {author} | <strong>Date:</strong> {date}
            </p>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment, index) => (
                    <Comment key={index} text={comment} />
                ))}
            </ul>
        </div>
    );
};

export default BlogPost;