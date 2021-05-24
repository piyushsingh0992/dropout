import React from 'react';
import MentorHeader from "../mentorHeader/MentorHeader.js";
import VideoCard from "../videoCard/VideoCard.js";
import "./mentor.css";
const mentor = () => {
    return (
        <div className="mentor">
            <MentorHeader/>
            <div className="mentor-grid">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>

                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>

                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>

                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        </div>
    );
};

export default mentor;