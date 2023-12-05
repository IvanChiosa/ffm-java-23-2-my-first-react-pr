import React from "react";
import BlogPost from "./BlogPost.tsx";

const Blog: React.FunctionComponent = () => {
    return(
        <>
            <h1>My Blog</h1>
            <BlogPost
                title="React Basics"
                content="Learn the basics of React and build awesome user interfaces."
                author="John Doe"
                date="January 1, 2023"
                comments={['Great post!', 'Looking forward to more React tutorials.']}
            />
            <BlogPost
                title="State Management in React"
                content="Explore various state management techniques in React applications."
                author="Jane Smith"
                date="January 5, 2023"
                comments={['Thanks for sharing!', 'State management is crucial in complex apps.']}
            />
        </>
    );
};

export default Blog;