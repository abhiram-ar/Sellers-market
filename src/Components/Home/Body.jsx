import { useContext, useEffect, useState } from "react";
import AdCard from "./AdCard";
import AdCardShimmer from "./AdCardShimmer";
import { supabase } from "../../context/Supabase";
import { AdDataContext } from "../../context/DataContext";
import { useOutletContext } from "react-router-dom";

function Body() {


    const { adData, setAdData } = useContext(AdDataContext);
    const [
        searchQuery,
        setSearchQuery,
        showSearchResult,
        setShowSearchResult,
        searchData,
        setSearchData,
    ] = useOutletContext();

    console.log("serch query: " + searchQuery);
    console.log("search data: " + searchData);
    return (
        <>
            <div className="pt-20">
                <div className="bg-white min-w-44">
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

                <div className="mx-36 mb-10 px-10 py-3 min-h-[30em] shadow-md pb-40 bg-white mt-5">
                    <h3 className="text-2xl font-semibold py-5">
                        {showSearchResult
                            ? `Showing Result for : ${searchQuery}`
                            : "All Recommendation"}
                    </h3>
                    
                    {}
                    <div className=" flex flex-wrap w-fit justify-start items-center gap-3">
                        {showSearchResult
                            ? searchData?.map((ad) => (
                                  <AdCard key={ad.id} adDetails={ad} />
                              ))
                            : !adData
                            ? Array(10)
                                  .fill("")
                                  .map((val, ind) => (
                                      <AdCardShimmer key={ind} />
                                  ))
                            : adData.map((ad) => (
                                  <AdCard key={ad.id} adDetails={ad} />
                              ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
