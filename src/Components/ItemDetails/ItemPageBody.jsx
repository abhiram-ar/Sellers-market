function ItemPageBody(props) {
    return (
        <div>
            <div className=" pt-32 mb-20 flex gap-5 mx-40">
                {/* image caosal */}
                <div className="w-2/3">
                    <div className="bg-black w-full h-[30em] rounded-md overflow-hidden">
                        <img src="" alt="" />
                    </div>
                    <div className="bg-white p-3 border rounded-md mt-3">
                        <h2 className="text-xl font-semibold">Details</h2>
                        <hr className="my-5"/>
                        <h2 className="text-xl font-semibold">Description</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>

                {/* sidedetails */}
                <div className="flex flex-col gap-3 w-1/3 ">
                    <div className="bg-white w-full px-5 py-3  rounded-md border-2">
                        <h2 className="text-3xl font-bold">$25,000</h2>
                        <p className="mt-3">Iphone 13pro urgent sale</p>
                        <div className="mt-5 flex w-full justify-between  left-0 bottom-0">
                            <p>Place, location</p>
                            <p>Time: Posted</p>
                        </div>
                    </div>
                    <div className="bg-white w-full px-5 py-3 rounded-md border-2">
                        <div className="flex gap-5 items-center">
                            <img
                                className="bg-black size-12 rounded-full"
                                src=""
                                alt=""
                            />

                            <h2 className="text-xl font-semibold">Seller name</h2>
                        </div>
                        <button className="w-full border-2 my-3 rounded-md font-semibold text-lg py-2 border-black">
                            Chat with seller
                        </button>
                    </div>
                    <div className="bg-white w-full px-5 py-3 rounded-md border-2">
                        <h2 className="text-xl font-semibold mb-2">Posted in</h2>
                        <p>Place posted, location</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemPageBody;
