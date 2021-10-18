import React, { createFactory } from 'react';

const RelatedVideos = (props) => {
    function title(){
        return props.RelatedVideos.map((video)=>{
            return(
                <li><a href= {`http://www.youtube.com/watch?v=${video.videoId}`}>{video.videoId}</a></li>
            );
        })
    }
        return(
            <div>
                {title()}
            </div>
        );
}
export default RelatedVideos