import React from "react";

function NumberBlock(props){
    return(
        <div className="flex-col ml-6">
            <div className="px-3 text-2xl text-center mx-8 opacity-80">{props.classNumber}</div>
            <div className={props.classNumber===props.selected?"bg-black rounded-full ml-3 mt-2 h-2 w-20 bg-opacity-80":""}> </div>
        </div>
    )
}

export default NumberBlock