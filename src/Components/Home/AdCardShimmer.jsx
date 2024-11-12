function AdCardShimmer(props) {
  return (
      <>
          <div className="font-sans relative w-80 h-96 border-2 p-3 rounded-md overflow-hidden animate-pulse">
              <div>
                  <div className="h-48 w-full overflow-hidden">
                      <img className="h-full w-full object-cover bg-zinc-200" />
                  </div>
                  <div className="px-1">
                      <div></div>
                      <h3 className="font-bold text-xl mt-4 bg-zinc-200 w-44 h-6"></h3>
                      <p className="mt-2 h-6 bg-zinc-200"></p>
                      <div className="absolute flex w-full justify-between p-4  left-0 bottom-0">
                          <p className="bg-zinc-100 w-32 h-6">

                          </p>
                          <p className="bg-zinc-100 w-24 h-6"></p>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}



export default AdCardShimmer
