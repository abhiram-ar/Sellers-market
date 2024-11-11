import adImage from "./../../assets/adimage.png"

export default function AdCard() {
    return (
        <>
            <div className="font-sans relative w-80 h-96 border-2 p-3 rounded-md overflow-hidden">
                <div>
                    <div className="h-48 w-full overflow-hidden">
                        <img className="h-full w-full object-cover" src={adImage}  />
                    </div>
                    <div className="px-1">
                        <div></div>
                        <h3 className="font-bold text-xl mt-4">$23,000</h3>
                        <p className="mt-1">Name of the Product</p>
                        <div className="absolute flex w-full justify-between p-4  left-0 bottom-0">
                            <p>Place, location</p>
                            <p>Time: Posted</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
