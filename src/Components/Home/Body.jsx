import AdCard from "./AdCard";

function Body() {
    return (
        <>
            <div  >
                <div className="mx-20">
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

                <div className="mx-20 px-24 py-3 shadow-md pb-40">
                    <h3 className="text-2xl font-semibold py-5">
                        All Recomendation
                    </h3>
                    <div className=" flex flex-wrap w-fit justify-start items-center gap-3">
                        
                        {Array(10).fill("").map(() => <AdCard/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
