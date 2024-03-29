import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Se Suan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 1992</td>
                    <td className="widgetLgAmount">$122.0</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Se Suan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 1992</td>
                    <td className="widgetLgAmount">$122.0</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Se Suan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 1992</td>
                    <td className="widgetLgAmount">$122.0</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Se Suan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 1992</td>
                    <td className="widgetLgAmount">$122.0</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}