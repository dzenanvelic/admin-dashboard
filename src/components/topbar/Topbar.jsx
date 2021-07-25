import React from 'react'
import './topbar.css'
import {NotificationsNone, Settings,Language} from '@material-ui/icons'
function Topbar() {
    return (
        <div className="topbar">
         <div className="topbarWrapper">
             <div className="topLeft"><span className="logo">dzenanadmin</span></div>
             <div className="topRight">
                 <div className="topbarIconContainer">
<NotificationsNone/>
<span className="topIconBadge">2</span>
                 </div>
                 <div className="topbarIconContainer">
<Language/>
<span className="topIconBadge">2</span>
                 </div>
                 <div className="topbarIconContainer">
<Settings/>

                 </div>
                 <img src="https://cdn.pixabay.com/photo/2021/06/18/07/19/man-6345374_960_720.png" alt="" className="topAvatar" />
             </div>
         </div>
        </div>
    )
}

export default Topbar
