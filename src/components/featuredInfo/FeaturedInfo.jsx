import React from 'react'
import './featuredInfo.css'
import {ArrowDownward, ArrowUpward}from '@material-ui/icons'
function FeaturedInfo() {
    return (
        <div className="featured">
           <div className="featuredItem">
               <span className="featuredTitle">Revanue</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">$3,459</span>
                   <span className="featuredMoneyRate">-14.4 <ArrowDownward className="featuredIcon negative"/></span>
               </div>
               <span className="featureSub">
                   Compared to last month
               </span>
               </div> 
           <div className="featuredItem">
               <span className="featuredTitle">Sales</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">$4,459</span>
                   <span className="featuredMoneyRate">-10.5 <ArrowDownward className="featuredIcon negative"/></span>
               </div>
               <span className="featureSub">
                   Compared to last month
               </span>
               </div> 
           <div className="featuredItem">
               <span className="featuredTitle">Cost</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">$2,448</span>
                   <span className="featuredMoneyRate">+4.4 <ArrowUpward className="featuredIcon "/></span>
               </div>
               <span className="featureSub">
                   Compared to last month
               </span>
               </div> 
        </div>
    )
}

export default FeaturedInfo
