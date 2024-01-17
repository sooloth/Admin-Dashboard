import "./sidebar.css"
import {Home,TrendingUp,Timeline,Forward5,VerticalSplit,PersonOutline,AddBox} from '@material-ui/icons';
import { Link } from "react-router-dom";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                            <Home className="sidebarIcon"/>
                            Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem ">
                            <PersonOutline className="sidebarIcon"/>
                            Users
                            </li>
                        </Link>
                        <Link to="/product" className="link">
                            <li className="sidebarListItem">
                            <VerticalSplit className="sidebarIcon"/>
                            Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                        <Forward5 className="sidebarIcon"/>
                        transaction
                        </li>
                        <li className="sidebarListItem">
                        <AddBox className="sidebarIcon"/>
                        Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                        <Home className="sidebarIcon"/>
                        Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                        <Home className="sidebarIcon"/>
                        Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
