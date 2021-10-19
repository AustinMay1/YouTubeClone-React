import React, { createFactory } from 'react';

const VideosArray = (props) => {
    // function title(){
    //     return props.videosArray.map((video)=>{
    //         return(
    //             <li><a href= {`http://www.youtube.com/watch?v=${video.videoId}`}>{video.videoId}</a></li>
    //         );
    //     })
    // }
        return(
            <div>
                {console.log("Related Videos Comp Props: ", props.VideosArray)}
                {props.VideosArray.map((video,index) => {
                    return (
                        <li><a href= {`http://www.youtube.com/watch?v=${video.videoId}`}>{video.videoId}</a></li>
                    )
                })}

            </div>
        );
}
export default VideosArray