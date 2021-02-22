import React from "react";
import "./navBar.css"
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';


function TopBar(){
    return(
        <div className="bg-white shadow_bottom flex justify-end py-6 border-2">
            <div className="flex-col mx-2 mr-20">
                <div className="flex">
                    <div className="text-base opacity-50 font-light">Upcoming</div>
                    <div className="ml-2"> <NotificationsActiveRoundedIcon style={{color:"orange"}}/> </div>
                </div>
                <div className="text-2xl opacity-80">Live Consultation</div>
            </div>
            <div className="mx-2 text-2xl mt-6 mr-20 opacity-80">Buy Plans</div>
            <div className="mx-2 text-2xl mt-6 mr-20 opacity-80">View Plans</div>
            <div className="mx-2 text-2xl mt-5 mr-20 px-14 rounded-3xl border-1 opacity-80 bg-gradient-to-r from-red-500 to-pink-500 text-white font-light">Log in</div>
        </div>
    )
}

export default TopBar