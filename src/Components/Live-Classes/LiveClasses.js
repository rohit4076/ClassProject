import React from "react";
import NumberBlock from "./Number-Block";


function LiveClass(props){
    return(
        <div className="bg-white">
            <div className="ml-20">
                <div className="text-5xl pt-12 opacity-80">Live Classes</div>
                <div className="text-base pt-4 pb-5 opacity-30"> Select a number</div>
            </div>
            <div className="flex border-2 border-black rounded-3xl mx-40 mt-10 mb-4 pt-6 pb-3 px-4 border-opacity-80 ">
                <div onClick={()=> props.setSelected(5)}>
                    <NumberBlock classNumber={5} selected={props.selected}/>
                </div>
                <div onClick={()=> props.setSelected(6)}>
                    <NumberBlock classNumber={6} selected={props.selected}/>
                </div>
                <div onClick={()=> props.setSelected(7)}>
                    <NumberBlock classNumber={7} selected={props.selected}/>
                </div>
                <div onClick={()=> props.setSelected(8)}>
                    <NumberBlock classNumber={8} selected={props.selected}/>
                </div>
                <div onClick={()=> props.setSelected(9)}>
                    <NumberBlock classNumber={9} selected={props.selected}/>
                </div>
            </div>
        </div>
    )
}

export default LiveClass
