import buttonBG from "./../../assets/buttonBG.svg";
import plusIcon from "./../../assets/ButtonPlus.svg";
const SellButton = () => {
    return (
        <>
            <button className="relative" title="Sell">
                <img src={buttonBG} className="rounded-full shadow-xl"/>
                <div className="absolute top-2.5 left-5 flex justify-center items-center gap-2">
                    <img src={plusIcon} />
                    <p className="font-semibold">SELL</p>
                </div>
            </button>
        </>
    );
};

export default SellButton;
