import React from "react";


function VideoScreen(props){
    return(
        <div className="flex-col mx-2 my-3">
            <div className="relative pb-2 pt-3 overflow-hidden px-3">
                <div>
                    <iframe width="100%" height="100%" src={props.link} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen> </iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoScreen