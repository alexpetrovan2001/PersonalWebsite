import React, { useEffect } from "react";
import { Post } from "../../../models/Post";
import './PostComponent.css'; 

interface PostProps {
    dataPath: string;
}

const PostComponent: React.FC<PostProps> = ({ dataPath }) => {
    const [posts, setPosts] = React.useState<Post[]>([])
    
    useEffect(() => {
        async function getPosts(){
            try{
                const response = await fetch(dataPath);
                const data = await response.json();
                setPosts(data);
            } catch(error){
                console.error("Error loading posts: ", error);
            }
        }
        
    getPosts(); 
    }, []
    )
    
    return (
            <div className="flex-container-column">
                    {posts.map((post: Post, index: number) => (
                        <div className="post" key={index}>
                            <p className="post-title">{post.title}</p>
                            <p className="post-description">{post.description}</p>
                        </div>
                    ))}
            </div>
    )
};

export default PostComponent;