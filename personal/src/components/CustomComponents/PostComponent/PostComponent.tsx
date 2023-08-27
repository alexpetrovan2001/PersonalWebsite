import React, { useEffect } from "react";
import { Post } from "../../../models/Post";
import './PostComponent.css'; 
import { CircularProgress, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const PostComponent: React.FC = () => {
    const [posts, setPosts] = React.useState<Post[]>([])
    const [currentPostIndex, setCurrentPostIndex] = React.useState<number>(0);
    const [loading, setLoading] = React.useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        async function getPosts(){
            try{
                const response = await fetch('/data/work-posts.json');
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch(error){
                console.error("Error loading posts: ", error);
            }
        }
    getPosts(); 
    }, []
    )

    const handleNextClick = () => {
        if (currentPostIndex < posts.length - 1){
            setCurrentPostIndex(prevIndex => prevIndex + 1);
        }
        else {
            setCurrentPostIndex(0);
        }
    }

    const handlePrevClick = () => {
        if (currentPostIndex > 0){
            setCurrentPostIndex(prevIndex => prevIndex - 1);
        }
        else {
            setCurrentPostIndex(posts.length - 1);
        }
    }

    const iconButtonStyles = {
        backgroundColor: "white", 
        color: "black", 
        margin: "auto", 
        "&:hover": {backgroundColor: "#c99e1a"}
    };
    
    return (
        <div>
        {loading && <CircularProgress />}
        {!loading && posts.length > 0 && (
            <div className="flex-row-container">
                <IconButton sx={iconButtonStyles} 
                            onClick={handlePrevClick}><ArrowBack/></IconButton>
                    <div className="post">
                        <p className="post-title">{posts[currentPostIndex].title}</p>
                        <p className="post-description">{posts[currentPostIndex].description1}</p>
                        <p className="post-description">{posts[currentPostIndex].description2}</p>
                    </div>
                <IconButton sx={iconButtonStyles} 
                    onClick={handleNextClick}><ArrowForward/></IconButton>
            </div>
        )}
        </div>
    )
};

export default PostComponent;