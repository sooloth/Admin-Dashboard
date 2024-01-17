import Chart from '../../components/chart/Chart'
import Featureinfo from '../../featureinfo/Featureinfo'
import './home.css'
import {userData} from '../../Dummydata'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import {Link} from 'react-router-dom'

export default function home() {
    return (
        <div className="home">
            <Link to="/">
                <Featureinfo/>
            </Link>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
