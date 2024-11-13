import { useContext, useEffect, useState } from "react";
import AdCard from "./AdCard";
import AdCardShimmer from "./AdCardShimmer";
import { AdDataContext } from "../../context/DataContext";
import { useOutletContext } from "react-router-dom";
import QueryFailed from "./utils/QueryFailed";
import { Filter } from "@mui/icons-material";

function Body() {
    const { adData, setAdData } = useContext(AdDataContext);
    const [filter, setFilter] = useState("all");

    const [
        searchQuery,
        setSearchQuery,
        showSearchResult,
        setShowSearchResult,
        searchData,
        setSearchData,
    ] = useOutletContext();

    useEffect(() => {
        return () => {
            setSearchQuery("");
            setShowSearchResult(false);
            setSearchData(null);
        };
    }, []);

    useEffect(() => {
        if(searchQuery !== "") return
        
        if (filter !== "all") {
            const data = adData?.filter((ad) => ad.category === filter);
            setSearchData(data);
            setShowSearchResult(true);
        } else {
            setSearchData(null);
            setShowSearchResult(false);
        }
    }, [filter, adData]);

    return (
        <>
            <div className="pt-20">
                <div className="bg-white min-w-44">
                    <div className="flex items-center py-3 gap-4 ps-24 shadow-md">
                        <button
                            onClick={() => {
                                setFilter("all");
                            }}
                            className="font-semibold bg-slate-300/30 rounded-md shadow-sm px-4 py-1"
                        >
                            All
                        </button>
                        <button
                            onClick={() => {
                                setFilter("car");
                            }}
                        >
                            Cars
                        </button>
                        <button onClick={() => setFilter("motorcycle")}>
                            Motorcycles
                        </button>
                        <button onClick={() => setFilter("mobilelPhone")}>
                            MobilePhone
                        </button>
                        <button onClick={() => setFilter("others")}>
                            Others
                        </button>
                    </div>
                </div>

                <div className="mx-36 mb-10 px-10 py-3 min-h-[30em] shadow-md pb-40 bg-white mt-5">
                    <h3 className="text-2xl font-semibold py-5">
                        {showSearchResult
                            ? `Showing Result for : ${ searchQuery || filter}`
                            : "All Recommendation"}
                    </h3>

                    {showSearchResult && searchData.length === 0 ? (
                        <div className="flex justify-center items-center">
                            <QueryFailed />
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
        </>
    );
}

export default Body;
