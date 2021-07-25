import React from 'react'
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

import './charts.css'
function Charts({title,data,dataKey,grid}) {
  
    return (
        <div className="charts">
           <h3 className="chartTitle">{title}</h3>
           <ResponsiveContainer width="100%" aspect={4/1}>
<LineChart data={data}>
<XAxis dataKey="name" stroke="#5550bd"/>
<Line  type="monotone" dataKey={dataKey} stroke="#5550bd"/>
<Tooltip/>
{grid && <CartesianGrid stroke="#eBdfdf" strokeDasharray="5 5"/> }

</LineChart>

           </ResponsiveContainer>
        </div>
    )
}

export default Charts
