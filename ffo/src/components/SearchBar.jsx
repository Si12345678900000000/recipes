import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit} className="flex justify-center w-full">
            <input 
                value={query}
                className="form-control border border-[#5e6b2f] p-2 text-lg rounded-l-lg w-80 focus:outline-none"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn border border-[#5e6b2f] p-2 text-lg rounded-r-lg cursor-pointer"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;