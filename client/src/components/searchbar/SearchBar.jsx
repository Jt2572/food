import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipeName } from '../../features/reducers/recipesActions'
function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [, setPage] = useState(1);

    const handleInput = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();        
        dispatch(searchRecipeName(name));
        setPage(1);

    };



    return (
        <div>

            <form className="flex items-center" onSubmit={handleSubmit}>
                <label className="sr-only">Search</label>
                <div className="relative w-full ">
                    <input type="text" id="search"
                        placeholder="  Write a name here..."
                        onChange={handleInput}
                        className=" active:shadow-[inset_0_0px_10px_rgba(255,174,0,1)] bg-gray-50 border border-yellow-900 text-gray-900 text-sm rounded-lg block w-56 pl-2 p-1 " />
                </div>
                <button type="submit" className="inline-flex items-center py-1 px-3 ml-2 text-sm font-bold text-white rounded-lg  bg-gradient-to-r from-orange-300 via-orange-500 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-amber-400">
                    <svg aria-hidden="true" className="mr-2 -ml-1 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                </button>
            </form>


        </div>
    )

 






}
export default SearchBar;