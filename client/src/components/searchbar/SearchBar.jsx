function SearchBar() {
    return (
        <div>

            <form className="flex items-center">
                <label for="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="voice-search" className=" active:shadow-[inset_0_0px_10px_rgba(255,174,0,1)] bg-gray-50 border border-yellow-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-1  " placeholder="Search..." required="" />
                </div>
                <button type="submit" className="inline-flex items-center py-1 px-3 ml-2 text-sm font-bold text-white rounded-lg  bg-gradient-to-r from-orange-300 via-orange-500 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-amber-400">
                    <svg aria-hidden="true" class="mr-2 -ml-1  h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                </button>
            </form>


        </div>
    )
}
export default SearchBar;