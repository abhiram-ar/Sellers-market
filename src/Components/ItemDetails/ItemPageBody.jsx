import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdDataContext } from "../../context/DataContext";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

function ItemPageBody(props) {
    const [picIndex, setPicIndex] = useState(0);
    const { id } = useParams();
    console.log("id : " + id);

    const { adData } = useContext(AdDataContext);
    if (!adData) return <div>loading...</div>;

    const adDetails = adData.find((ad) => ad.id === Number(id));
    console.log("ad details " + adDetails);

    const handleRightClick = () => {
        setPicIndex(picIndex + 1);
    };

    const handleLeftClick = () => {
        setPicIndex(picIndex - 1);
    };

    return (
        <div>
            <div className=" pt-32 mb-20 flex gap-5 mx-40">
                {/* image caosal */}
                <div className="w-2/3">
                    <div className="relative bg-black w-full h-[35em] rounded-md overflow-hidden flex justify-center items-center">
                        <img
                            className="object-contain h-full w-full"
                            src={`https://mfoduixzqibzjxlxqkhz.supabase.co/storage/v1/object/public/olxadpics/${adDetails.pics[picIndex]}`}
                        />
                        <button
                            onClick={handleLeftClick}
                            className={`${
                                picIndex <= 0 && "hidden"
                            } absolute top-[45%] h-20 w-10 rounded-full left-2 bg-zinc-800/80 text-white`}
                        >
                            <ChevronLeftOutlinedIcon fontSize="large" />
                        </button>

                        <button
                            onClick={handleRightClick}
                            className={`${
                                picIndex >= adDetails.pics.length - 1 &&
                                "hidden"
                            } absolute top-[45%] h-20 w-10 rounded-full right-2 bg-zinc-800/80 text-white`}
                        >
                            <ChevronRightOutlinedIcon fontSize="large" />
                        </button>
                    </div>
                    <div className="bg-white p-5 border rounded-md mt-3">
                        <h2 className="text-xl font-semibold my-2 text-wrap">
                            Description
                        </h2>
                        <p>{adDetails?.description}</p>
                    </div>
                </div>

                {/* sidedetails */}
                <div className="flex flex-col gap-3 w-1/3 ">
                    <div className="bg-white w-full px-5 py-3  rounded-md border-2">
                        <h2 className="text-3xl font-bold">
                            ₹{adDetails.selling_price.toLocaleString()}
                        </h2>
                        <p className="mt-3">{adDetails.ad_title}</p>
                        <div className="mt-5 flex w-full justify-between  left-0 bottom-0">
                            <p>{adDetails.location}</p>
                            <p>
                                {new Date(
                                    adDetails.created_at
                                ).toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white w-full px-5 py-3 rounded-md border-2">
                        <div className="flex gap-5 items-center">
                            <img
                                className="bg-black size-12 rounded-full"
                                src=""
                                alt=""
                            />

                            <h2 className="text-xl font-semibold">
                                {adDetails.seller_name}
                            </h2>
                        </div>
                        <button className="w-full border-2 my-3 rounded-md font-semibold text-lg py-2 border-black">
                            Chat with seller
                        </button>
                    </div>
                    <div className="bg-white w-full px-5 py-3 rounded-md border-2">
                        <h2 className="text-xl font-semibold mb-2">
                            Posted in
                        </h2>
                        <p>{adDetails.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemPageBody;
