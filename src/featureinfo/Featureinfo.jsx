import "./featureinfo.css"
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'
export default function Featureinfo() {
    return (
        <>
        <div className="featured">
           <div className="featuredItem">
               <span className="featureTitle">Revanue</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">$2,415</span>
                   <span className="featuredMoneyRate">+10,4 <ArrowUpward className="featureIcon"/></span>
               </div>
               <span className="featuredSub">Compared to last month</span>
            </div> 
        
            <div className="featuredItem">
                <span className="featureTitle">up</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">+11,4 <ArrowUpward className="featureIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span> 
            </div>
        
            <div className="featuredItem">
                <span className="featureTitle">Down</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-12,4 <ArrowDownward className="featureIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
  </>
    )
}
