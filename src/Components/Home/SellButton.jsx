import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/firebase";
import buttonBG from "./../../assets/buttonBG.svg";
import plusIcon from "./../../assets/ButtonPlus.svg";
import { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const SellButton = () => {
    const [buttonHover, setButtonHover] = useState(false);
    const { currentUser, handleLogin } = useFirebase();

    const navigate = useNavigate();

    const handleSell = async () => {
        if (currentUser) {
            navigate("/home/post");
        } 
    };
    return (
        <div className="relative">
            <button onClick={handleSell} onMouseEnter={()=> setButtonHover(true)} onMouseLeave={()=>setButtonHover(false)} className="relative">
                <img src={buttonBG} className="rounded-full shadow-xl" />
                <div className="absolute top-2.5 left-5 flex justify-center items-center gap-2">
                    <img src={plusIcon} />
                    <p className="font-semibold">SELL</p>
                </div>
            </button>
            { buttonHover&&  !currentUser  && (
                <div className="flex gap-1 items-center absolute top-12 right-2 bg-yellow-400 border-2  w-[9rem] h-10 p-2 rounded-md ">
                    <InfoOutlinedIcon />
                    <span>SignIn to sell</span>
                </div>
            )}
        </div>
    );
};

export default SellButton;
