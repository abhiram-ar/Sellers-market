import searchFailedIcon from "./../../../assets/searchInvalid.png"

export default function QueryFailed() {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Oops... we didn&apos;t find anything that matches this search :(</p>
            <p className="text-lg ">
                Try search for something more general, change the filters or
                check for spelling mistakes
            </p>
            <img className="size-80 mt-5" src={searchFailedIcon} alt="" />
        </div>
    );
}
