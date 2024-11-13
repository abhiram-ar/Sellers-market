import { Outlet } from "react-router-dom";
import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";
import DataContext from "./context/DataContext";
import { useState } from "react";

export default function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchData, setSearchData] = useState(null);
    return (
        <div className="bg-[#f2f4f5]">
            <DataContext>
                <Navbar
                    searchContext={[
                        searchQuery,
                        setSearchQuery,
                        showSearchResult,
                        setShowSearchResult,
                        searchData,
                        setSearchData
                    ]}
                />
                <Outlet
                    context={[
                        searchQuery,
                        setSearchQuery,
                        showSearchResult,
                        setShowSearchResult,
                        searchData,
                        setSearchData
                    ]}
                />
            </DataContext>
            <Footer />
        </div>
    );
}
