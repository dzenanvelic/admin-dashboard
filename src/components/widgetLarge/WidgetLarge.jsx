import React from 'react'
import './widgetLarge.css'
function WidgetLarge() {
    const Button =({type})=>{
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <div className="widgetLarge">
           <h3 className="widgetLgTitle">Latest Transactions</h3>
           <table className="widgetLgTable">
               <tr className="widgetLgTr">
                   <th className="widgetLgTh">Customer</th>
                   <th className="widgetLgTh">Date</th>
                   <th className="widgetLgTh">Amount</th>
                   <th className="widgetLgTh">Status</th>
               </tr>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://cdn.pixabay.com/photo/2020/12/08/09/47/woman-5813932_960_720.png"alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Susan Carol</span>
                   </td>
                   <td className="widgetLgDate">23 jun 2021</td>
                   <td className="widgetLgAmount">$122.90</td>
                   <td className="widgetLgStatus"><Button type="Approved"/></td>
               </tr>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                      <img src="https://cdn.pixabay.com/photo/2020/12/08/09/47/woman-5813932_960_720.png"alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Susan Carol</span>
                   </td>
                   <td className="widgetLgDate">23 jun 2021</td>
                   <td className="widgetLgAmount">$122.90</td>
                   <td className="widgetLgStatus"><Button type="Declined"/></td>
               </tr>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://cdn.pixabay.com/photo/2020/12/08/09/47/woman-5813932_960_720.png"alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Susan Carol</span>
                   </td>
                   <td className="widgetLgDate">23 jun 2021</td>
                   <td className="widgetLgAmount">$122.90</td>
                   <td className="widgetLgStatus"><Button type="Pending"/></td>
               </tr>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://cdn.pixabay.com/photo/2020/12/08/09/47/woman-5813932_960_720.png"alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Susan Carol</span>
                   </td>
                   <td className="widgetLgDate">23 jun 2021</td>
                   <td className="widgetLgAmount">$122.90</td>
                   <td className="widgetLgStatus"><Button type="Approved"/></td>
               </tr>
           </table>
        </div>
    )
}

export default WidgetLarge
