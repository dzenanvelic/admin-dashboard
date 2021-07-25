import React from 'react'
import './user.css'
import{PermIdentity,CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function User() {
    return (
        <div className="user">
           <div className="userTitleContainer">
               <h1 className="userTitle">Edit User</h1>
               <Link to='/newuser'>
                <button className="userButton" >Create</button>
               </Link>
              
           </div>
           <div className="userContainer">
               <div className="userShow">
                   <div className="userShowTop">
                       <img className="userShowImg"src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png" alt="" />
                       <div className="userShowTopTitle">
                           <span className="userShowUsername">John Smith</span>
                           <span className="userShowTitleOne">Software Engineer</span>
                       </div>
                   </div>
                   <div className="userShowBottom">
                       <span className="userShowTitle">Account Details</span>
                       <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                       <span className="userShowInfoTitle">johsmit88</span>
                       </div>
                       <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                       <span className="userShowInfoTitle">03.06.1988.</span>
                       </div>
                        <span className="userShowTitle">Contact Details</span>
                       <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                       <span className="userShowInfoTitle">+1 234 567</span>
                       </div>
                       <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                       <span className="userShowInfoTitle">johsmit88@gmail.com</span>
                       </div>
                       <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                       <span className="userShowInfoTitle">Los Angeles/USA</span>
                       </div>
                      
                   </div>
               </div>
               <div className="userUpdate">
                   <span className="userUpdateTitle">
                       Edit
                   </span>
                   <form className="userUpdateForm">
                       <div className="userUpdateLeft">
                           <div className="userUpdateItem">
                               <label >Username</label>
                               <input type="text " placeholder="johsmit88" className="userUpdateInput" />
                           </div>
                           <div className="userUpdateItem">
                               <label >Full Name</label>
                               <input type="text " placeholder="John Smith" className="userUpdateInput" />
                           </div>
                           <div className="userUpdateItem">
                               <label >Email</label>
                               <input type="email " placeholder="johsmit88@gmail.com" className="userUpdateInput" />
                           </div>
                           <div className="userUpdateItem">
                               <label >Phone</label>
                               <input type="text " placeholder="+1 234 567" className="userUpdateInput" />
                           </div>
                           <div className="userUpdateItem">
                               <label >Address</label>
                               <input type="text " placeholder="Los Angeles/USA" className="userUpdateInput" />
                           </div>
                       </div>
                       <div className="userUpdateRight">
                           <div className="userUpdateUpload">
                               <img src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png" alt="" className="userUpdateImg" />
                               <label htmlFor="file"> <Publish className="userUpdateIcon"/></label>
                               <input type="file" id="file" style={{display:"none"}} />
                             
                           </div>
                            <button className="userUpdateButton">Update</button>
                       </div>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default User