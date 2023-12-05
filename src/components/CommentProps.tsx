import React from 'react';
export interface CommentProps {
    text: string;
}
const Comment: React.FunctionComponent<CommentProps> = ({ text }) => {
    return <li><ul>{text}</ul></li>;
}
export default Comment;