import carTradeGroup from "./../../assets/CarTrageGroup.png";
import olx from "./../../assets/olx.png";
import carwale from "./../../assets/carwale.png";
import bikewale from "./../../assets/bikewale.png";
import carTrade from "./../../assets/carTrade.png";
import mobilityOutlook from "./../../assets/ModilityOutlook.png";

export default function Footer() {
    return (
        <div className=" px-24 py-10 bg-[#002f34] text-white">
            <div className="flex justify-around gap-3">
                <img className="h-20" src={carTradeGroup} alt="" />
                <img className="h-20" src={olx} alt="" />
                <img className="h-20"src={carwale} alt="" />
                <img className="h-20"src={bikewale} alt="" />
                <img className="h-20"src={carTrade} alt="" />
                <img className="h-20"src={mobilityOutlook} alt="" />
            </div>
            <div className="mx-10 mt-8 flex justify-between">
                <p>Help - Sitemap</p>
                <p>All rights reserved © 2006-2024 OLX</p>
            </div>
        </div>
    );
}
