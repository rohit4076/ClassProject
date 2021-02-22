import React, {useState} from "react";
import TopBar from "../Components/Nav Bar/NavBar";
import ConceptVideos from "../Components/Concept-Videos/Concept-videos";
import LiveClasses from "../Components/Live-Classes/LiveClasses";

function Classes(){
    const [selected, setSelected] = useState(5);

    //Receiving Links From Backend
    var links = []
    if (selected == 5) {
           var links = ["https://www.youtube.com/embed/dooaAtHBOXI","https://www.youtube.com/embed/TWKNUCGGwjE","https://www.youtube.com/embed/uA52Qju3cRc","https://www.youtube.com/embed/7-Qr-qBwLJM","https://www.youtube.com/embed/dV3ov0TB-1o","https://www.youtube.com/embed/ncAHqJZzqRo"]
      }
    if (selected == 6) {
        var links =[ "https://youtu.be/embed/YZU9stOKPpU","https://www.youtube.com/embed/bo8n_zfHmhs","https://youtu.be/embed/prfKV4vixpM","https://www.youtube.com/embed/YIKh5Q5YN4E","https://www.youtube.com/embed/Irq3eRw72EE","https://www.youtube.com/embed/kDLbinjDczw"]
    }
    if (selected == 7) {
        var links = ["https://youtu.be/embed/wcH3lijQvAs","https://www.youtube.com/embed/_wT2V1RKA64","https://www.youtube.com/embed/pjfHSbHkQXU","https://www.youtube.com/embed/fF09Rci62Gs","https://www.youtube.com/embed/6hq58qxujAY","https://www.youtube.com/embed/SRzw2VLPefM"]
    }
    if (selected == 8) {
        var links = ["https://www.youtube.com/embed/9_Ak4tgnAt4","https://www.youtube.com/embed/q1iCjN_8AzA","https://www.youtube.com/embed/s10kp3y42nw","https://www.youtube.com/embed/OpkR-AeUMJk","https://www.youtube.com/embed/Wvc9GbzCwE0","https://www.youtube.com/embed/SRzw2VLPefM"]
    }
    if (selected == 9) {
        var links = ["https://www.youtube.com/embed/2yG8s5X8dok","https://www.youtube.com/embed/E2zJYiZQoWc","https://www.youtube.com/embed/sYao9OWPsx4","https://www.youtube.com/embed/Rx7TdzKK6OA","https://www.youtube.com/embed/jRiFAF_ln3M","https://www.youtube.com/embed/SRzw2VLPefM"]
    }

    return(
        <div>
            <TopBar/>
            <ConceptVideos selected={selected} linksArray={links}/>
            <LiveClasses selected={selected} setSelected={setSelected}/>
        </div>
    )
}

export default Classes