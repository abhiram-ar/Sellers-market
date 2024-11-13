import { useContext, useEffect, useState } from "react";
import AdCard from "./AdCard";
import AdCardShimmer from "./AdCardShimmer";
import { supabase } from "../../context/Supabase";
import { AdDataContext } from "../../context/DataContext";

function Body() {
    
    const {adData, setAdData} = useContext(AdDataContext)

   

    return (
        <>
            <div className="pt-20">
                <div className="bg-white ">
                    <ul className="flex items-center py-3 gap-4 ps-24 shadow-md">
                        <li className="font-semibold bg-slate-300/30 rounded-md shadow-sm px-4 py-1">
                            <a href="#">All</a>
                        </li>
                        <li>
                            <a href="#">Cars</a>
                        </li>
                        <li>
                            <a href="#">Motorcycles</a>
                        </li>
                        <li>
                            <a href="3">MobilePhone</a>
                        </li>
                        <li>
                            <a href="3">Others</a>
                        </li>
                    </ul>
                </div>

                <div className="mx-36 px-10 py-3 shadow-md pb-40 bg-white mt-5">
                    <h3 className="text-2xl font-semibold py-5">
                        All Recomendation
                    </h3>
                    <div className=" flex flex-wrap w-fit justify-start items-center gap-3">
                        {!adData
                            ? Array(10)
                                  .fill("")
                                  .map((val, ind) => (
                                      <AdCardShimmer key={ind} />
                                  ))
                            : adData.map(ad => <AdCard key={ad.id} adDetails={ad}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
