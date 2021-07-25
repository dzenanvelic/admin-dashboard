import React from 'react'
import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import {userData} from '../../dummyData'
import './home.css'
function Home() {
    return (
        <div className="home">
           <FeaturedInfo/>
           <Charts data={userData} title="User Analitics" grid dataKey="Active User"/>
           <div className="homeWidget">
               <WidgetSmall/>
               <WidgetLarge/>
           </div>
        </div>
    )
}

export default Home
