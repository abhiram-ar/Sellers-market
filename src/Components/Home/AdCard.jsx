import { useNavigate } from "react-router-dom";
import adImage from "./../../assets/adimage.png";

export default function AdCard({ adDetails }) {
    const navigate = useNavigate()
    
    
    const today = () => {
        let todayDate = [];
        let date = new Date();
        todayDate.push(date.getDate() - 1);
        todayDate.push(date.getMonth() + 1);
        todayDate.push(date.getFullYear());

        return todayDate.join("-");
    };

    return (
        <>
            <div className="font-sans relative w-80 h-96 border-2 p-3 rounded-md overflow-hidden" onClick={()=> navigate(`/home/item/${adDetails.id}`)}>
                <div>
                    <div className="h-48 w-full overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src={`https://mfoduixzqibzjxlxqkhz.supabase.co/storage/v1/object/public/olxadpics/${adDetails.pics[0]}`}
                        />
                    </div>
                    <div className="px-1">
                        <div></div>
                        <h3 className="font-bold text-xl mt-4">
                            {"₹" + adDetails.selling_price.toLocaleString()}
                        </h3>
                        <p className="mt-1 truncate">{adDetails.ad_title}</p>
                        <div className="absolute flex w-full justify-between p-4  left-0 bottom-0">
                            <p className="text-sm">{adDetails.location}</p>
                            <p className="text-sm">
                                {today() ===
                                adDetails.created_at
                                    .split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("-")
                                    ? "Today"
                                    : adDetails.created_at
                                          .split("T")[0]
                                          .split("-")
                                          .reverse()
                                          .join("-")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
