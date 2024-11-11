import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SellButton from "./SellButton";
import OlxLogo from "./utils/OlxLogo";

const Navbar = () => {
    return (
        <div className="bg-[#eff1f3] flex gap-5 p-3 justify-center items-center">
            <OlxLogo />

            <div className="bg-white px-2 py-3 rounded-md border-2 border-black flex items-center gap-2 ">
                <SearchOutlinedIcon />
                <input
                    className="outline-none border-none ring-0"
                    type="text"
                    placeholder="Kochi"
                />
            </div>

            <div className="w-full bg-white rounded-md border-2 border-black flex justify-between items-center gap-2 overflow-hidden">
                <input
                    className="w-full py-3 px-3 rounded-md outline-none"
                    type="text"
                    placeholder="Find Car, Mobile Phones and more..."
                />
                <div className=" bg-[#002f34] p-3 text-white">
                    <SearchOutlinedIcon />
                </div>
            </div>
            <select className="bg-transparent text-lg outline-none">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
            </select>

            <div className="w-fit">
                <a href="#" className="font-semibold text-lg underline">
                    Login
                </a>
            </div>
            <div className="w-48 ">
                <SellButton />
            </div>
        </div>
    );
};

export default Navbar;
