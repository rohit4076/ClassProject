import React, {useState} from "react";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import VideoScreen from "./video";

function ConceptVideos(props){
    //Adding null values to links array
    var links = props.linksArray
    var linkLengthArray = links.length
    var leftNullArray = [null,null]
    var links = leftNullArray.concat(links)
    var rightNullArray = [null,null]
    var links = links.concat(rightNullArray)
    console.log(props.selected)

    //state
    const [selectX, setSelectedX] = useState(3);
    var x = selectX;


    //Implementing functions
    function Increment(){
        if (x >= 0 && x < linkLengthArray-1){
            setSelectedX(x+1)
        }
    }
    function Decrement(){
        if (x > 0 && x < linkLengthArray+1){
            setSelectedX(x-1)
        }
    }

    return(
        <div className="bg-white">
            <div className="ml-20">
                <div className="text-5xl pt-12 opacity-80">Concept Videos</div>
                <div className="text-base pt-4 pb-5 opacity-30"> Select a number</div>
            </div>
            <div className="flex h-80">
                <div className="w-1/12 pl-6">
                    <div className="mt-36 rounded-full ml-6 mr-12 border-2 border-black" onClick={() => Increment()}>
                        <ArrowBackIosRoundedIcon style={{color:"black",fontSize:'2rem'}}/>
                    </div>
                </div>
                <div className="w-5/6 flex ml-9 mt-12 h-2/3">
                   <div className={links[x] !== null?"bg-white transform scale-75  border-black border-2 rounded-3xl":""}>
                        <VideoScreen link={links[x]}/>
                   </div>
                    <div className={links[x+1] !== null?"bg-white transform scale-90 -ml-24 z-10 border-black border-2 rounded-3xl":""}>
                        <VideoScreen link={links[x+1]}/>
                    </div>
                    <div className={links[x+2] !== null?" bg-white -mx-24 z-20  border-black border-2 rounded-3xl":""}>
                        <VideoScreen link={links[x+2]}/>
                    </div>
                    <div className={links[x+3] !== null?"bg-white transform scale-90 -mr-24 z-10 border-black border-2 rounded-3xl":""}>
                        <VideoScreen link={links[x+3]}/>
                    </div>
                    <div className={links[x+4] !== null?"bg-white transform scale-75 border-black border-2 rounded-3xl":""}>
                        <VideoScreen link={links[x+4]}/>
                    </div>
                </div>
                <div className="w-1/12 pr-6">
                    <div className="mt-36 rounded-full ml-12 mr-7 pl-1 border-2 border-black" onClick={()=>Decrement()}>
                        <ArrowForwardIosRoundedIcon style={{color:"black",fontSize:'2rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConceptVideos