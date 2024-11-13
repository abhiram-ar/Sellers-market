import { useState, useEffect, createContext } from "react";
import { supabase } from "./Supabase";

export const AdDataContext = createContext(null);

export default function DataContext({ children }) {
    const [adData, setAdData] = useState(null);

    useEffect(() => {
        supabase
            .from("olxads")
            .select()
            .then((data) => {
                console.log(`data Fetch Sucessful`);
                setAdData(data.data);
                console.log(data.data);
            })
            .catch((error) => {
                console.log(`error while fetchingData`);
                console.log(error);
            });

        return () => {
            setAdData(null);
        };
    }, []);

    return (
        <AdDataContext.Provider value={{adData, setAdData}}>
            {children}
        </AdDataContext.Provider>
    );
}
