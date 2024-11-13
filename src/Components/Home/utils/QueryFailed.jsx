import searchFailedIcon from "./../../../assets/searchInvalid.png"

export default function QueryFailed() {
    return (
        <div>
            <p>Oops... we didn't find anything that matches this search :(</p>
            <p>
                Try search for something more general, change the filters or
                check for spelling mistakes
            </p>
            <img src={searchFailedIcon} alt="" />
        </div>
    );
}
