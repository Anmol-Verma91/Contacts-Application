import { FaSearch } from "react-icons/fa";
import { useContact } from "../contexts/ContactContext";
function Search() {
    const {setSearch, search} = useContact()
    return (
        <div className=" flex w-full justify-center mt-2 h-[50px] gap-3 items-center">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search contact" className="border-2 border-black rounded-xl h-10 w-72 pl-4"/>
            <FaSearch className="text-3xl"/>
        </div>
    )
}

export default Search
